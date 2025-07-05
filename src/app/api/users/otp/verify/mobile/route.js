import { NextResponse } from "next/server";
import { createClient } from "redis";
import crypto from "crypto";


const redis = createClient({
    url: process.env.REDIS_URL,
});

redis.connect();

// OTP secret key
const OTP_SECRET = process.env.OTP_SECRET || "your-secret";

function hashOtp(otp) {
    return crypto.createHmac("sha256", OTP_SECRET).update(otp).digest("hex");
}

//POST route for verifying OTP 
export async function POST(req) {
    try {
        const body = await req.json();
        const { mobile, otp } = body;

        if (!mobile || !otp) {
            return NextResponse.json({ message: "Mobile and OTP required" }, { status: 400 });
        }

        const storedHashedOtp = await redis.get(`otp:${mobile}`);

        if (!storedHashedOtp) {
            return NextResponse.json({
                message: "OTP expired"
            },
                { status: 400 }
            )
        }
        const incomingHashedOtp = hashOtp(otp);
        if (incomingHashedOtp !== storedHashedOtp) {
            return NextResponse.json({ message: "Invalid OTP" }, { status: 401 });
        }

        await redis.del(`otp:${mobile}`);
        return NextResponse.json({ message: "OTP verified successfully" });
    }catch(error){
        console.log("OTP verification error", error); 
        return NextResponse.json({message:"Server error",error:error.message},{status:500}); 
    }
}