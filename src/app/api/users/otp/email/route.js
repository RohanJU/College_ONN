import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";
import { createClient } from "redis";
import crypto from "crypto";
import { Resend } from "resend";

// ===================
// Redis Setup
// ===================
const redis = createClient({ url: process.env.REDIS_URL });

let isRedisConnected = false;
async function connectRedis() {
  if (!isRedisConnected) {
    await redis.connect();
    isRedisConnected = true;
  }
}

// ===================
// Constants & Secrets
// ===================
const OTP_SECRET = process.env.OTP_SECRET;
const OTP_EXPIRY_SECONDS = 300;  // 5 minutes
const RATE_LIMIT_EXPIRY = 3600;  // 1 hour
const MAX_ATTEMPTS = 3;

const resend = new Resend(process.env.RESEND_API_KEY);

// ===================
// Helper: Hash OTP
// ===================
function hashOtp(otp) {
  return crypto.createHmac("SHA256", OTP_SECRET).update(otp).digest("hex");
}

// ===================
// Helper: Email Template
// ===================
function generateEmailTemplate(otp) {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2 style="color: #1a237e;">CollegeOnn Verification Code</h2>
      <p>Your One-Time Password (OTP) is:</p>
      <p style="font-size: 24px; font-weight: bold; color: #009688;">${otp}</p>
      <p>This code is valid for <strong>5 minutes</strong>.</p>
      <p style="color: #888; font-size: 12px;">Do not share this code with anyone.</p>
    </div>
  `;
}

// ===================
// Helper: Send OTP Email
// ===================
async function sendOTPEmail(email, otp) {
  return await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "CollegeOnn OTP Code verification",
    html: generateEmailTemplate(otp),
  });
}

// ===================
// Main Handler
// ===================
export async function POST(req) {
  try {
    await connectRedis();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    // Rate-limiting logic
    const rateLimitKey = `otp_req_count:${email}`;
    const currentCount = await redis.get(rateLimitKey);

    if (currentCount && parseInt(currentCount) >= MAX_ATTEMPTS) {
      return NextResponse.json(
        { error: "Too many requests. Try again after 1 hour." },
        { status: 429 }
      );
    }

    // Generate and hash OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const hashedOtp = hashOtp(otp);

    // Store OTP in Redis
    await redis.setEx(`otp:${email}`, OTP_EXPIRY_SECONDS, hashedOtp);

    // Update rate limit count
    if (!currentCount) {
      await redis.setEx(rateLimitKey, RATE_LIMIT_EXPIRY, "1");
    } else {
      await redis.incr(rateLimitKey);
    }

    // Send OTP
    await sendOTPEmail(email, otp);

    return NextResponse.json({ message: "OTP sent to email successfully." });

  } catch (error) {
    console.error("Email OTP Error:", error);
    return NextResponse.json(
      { error: "Server error", details: error.message },
      { status: 500 }
    );
  }
}
