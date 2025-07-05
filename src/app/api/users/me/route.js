import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return new Response(JSON.stringify({ loggedIn: false }), { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return new Response(JSON.stringify({
      loggedIn: true,
      user: decoded,
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({
      message: "Unauthorized",
      error: error.message
    }), {
      status: 401,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
