import dbConnect from "@/db/dbConfig";
import User from "@/models/User";
import { handleApiError } from "@/utils/handleApiError";
import { isValidEmail } from "@/utils/isValidEmail";
import { isValidMobile } from "@/utils/isValidMobile";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers"; // ✅ App Router cookie handler

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, mobile, studying_In, City_In } = body;

    // ✅ Validation
    if (!name || !email || !mobile || !studying_In || !City_In) {
      return Response.json({ message: "All fields are required" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return Response.json({ message: "Invalid email format" }, { status: 400 });
    }

    if (!isValidMobile(mobile)) {
      return Response.json({ message: "Invalid mobile number" }, { status: 400 });
    }

    await dbConnect();

    // ✅ Save user to DB
    const newUser = await User.create({
      name,
      email,
      mobile,
      studying_In,
      City_In,
    });

    // ✅ Generate JWT
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ Set cookie using App Router cookies API
    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    // ✅ Return success response
    return Response.json({
      message: "User created successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        mobile: newUser.mobile,
      },
    }, { status: 201 });
    

  } catch (error) {
    return handleApiError(error);
  }
}
