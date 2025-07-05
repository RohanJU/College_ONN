import dbConnect from "@/db/dbConfig";
import User from "@/models/User";
import { isValidEmail } from "@/utils/isValidEmail";
import { isValidMobile } from "@/utils/isValidMobile";


export async function POST(request) {
  try {
    const { email, mobile } = await request.json();

    // Validate presence
    if (!email && !mobile) {
      return new Response(JSON.stringify({ message: "Email or mobile is required" }), { status: 400 });
    }

    // Validate formats
    if (email && !isValidEmail(email)) {
      return new Response(JSON.stringify({ message: "Invalid email format" }), { status: 400 });
    }

    if (mobile && !isValidMobile(mobile)) {
      return new Response(JSON.stringify({ message: "Invalid mobile number" }), { status: 400 });
    }

    await dbConnect();

    // Try finding the user by email first, then mobile
    const existingUser = await User.findOne(email ? { email } : { mobile });

    if (!existingUser) {
      return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ message: "Login Successful", user: existingUser }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ message: "Server error", error: error.message }), { status: 500 });
  }
}
