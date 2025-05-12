import Image from "next/image";
import NavMenu from "@/components/navbar/NavMenu";

export default function HeroSection() {
  return (
    <section style={{ backgroundColor: "#49BBBD" }} className="relative">
    <NavMenu/>
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left side */}
        <div className="text-white max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-orange-400">Find Over</span>{" "}
            <span className="text-[#1F267E]">25000+</span> <br />
            college in india
          </h1>
          <p className="mt-4 text-white/90">
            CollegeOnn makes your admission journey smoother with smart tools
            and expert insights.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <button className="bg-white text-[#49BBBD] font-semibold px-6 py-3 rounded-full">
              Join free counseling
            </button>
            <button className="flex items-center gap-2 text-white font-medium">
              <span className="bg-white text-[#49BBBD] w-10 h-10 flex items-center justify-center rounded-full">
                ▶
              </span>
              Watch how it works
            </button>
          </div>
        </div>
        {/* Right side */}
        <div className="relative mt-10 md:mt-0">
  {/* 👧 Girl image */}
  <img
    src="/girlcollegeonn.png"
    alt="Student"
    className="max-h-[500px] mx-auto"
  />

  {/* 📦 Floating Box 1 */}
  <div className="absolute top-20 left-[-200px] bg-white rounded-xl shadow-lg p-4 flex items-center gap-2 w-48">
    <div className="bg-[#49BBBD] p-2 rounded-full">
      📅
    </div>
    <div>
      <p className="font-bold text-sm text-gray-500">250k</p>
      <p className="text-xs text-gray-500">Assisted Student</p>
    </div>
  </div>

  {/* 📦 Floating Box 2 */}
  <div className="absolute bottom-10 right-[400px] bg-white rounded-xl shadow-lg p-4 w-60">
    <div className="flex items-center gap-3">
      <img
        src="/expert.png"
        className="w-10 h-10 rounded-full"
        alt="Expert"
      />
      <div>
        <p className="font-semibold text-sm text-gray-500">Get Expert Guidance</p>
        <p className="text-xs text-green-600">Today at 12:00 PM</p>
      </div>
    </div>
    <button className="mt-2 bg-[#C23957] text-white mx-12 px-5 py-2 rounded-lg text-sm">Join Now</button>
  </div>

  {/* 📦 Floating Box 3 */}
  <div className="absolute top-1/2 right-[-50px] bg-white rounded-xl shadow p-4 w-56">
    <div className="flex items-center gap-2">
      <span className="bg-orange-100 text-orange-600 p-2 rounded-full">📩</span>
      <div>
        <p className="font-bold text-sm text-gray-500">Congratulations</p>
        <p className="text-xs text-gray-500">Your admission completed</p>
      </div>
    </div>
  </div>
</div>

      </div>
      {/* Curved SVG at bottom */}
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1040 125"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#ffffff"
      d="M0,0 C480,120 960,0 1440,120 L1440,120 L0,120 Z"
    />
  </svg>
    </section>
  );
}
