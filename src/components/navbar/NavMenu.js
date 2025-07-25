// components/Navbar.jsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/CollegeONN_LOGO.png"
            alt="COLLEGE ONN"
            className="h-24 w-auto object-contain"
          />
        </Link>
      </div>
      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-white text-[#49BBBD] font-semibold px-5 py-2 rounded-full shadow"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="bg-white text-[black] font-semibold px-5 py-2 rounded-full shadow"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
