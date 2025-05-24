import NavMenu from "@/components/navbar/NavMenu";

export default function HeroSection() {
  return (
    <section style={{ backgroundColor: "#49BBBD" }} className="relative pb-24">
      <NavMenu />
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
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
        <div className="relative mt-15  md:mt-0">
          {/* 👧 Girl image */}
          <img
            src="/girlcollegeonn.png"
            alt="Student"
            className="max-h-[600px] mx-auto"
          />

          {/* 📦 Floating Box 1 */}
          <div className="hidden lg:flex lg:absolute lg:top-20 lg:left-[-200px] w-48 p-4 bg-white rounded-xl shadow-lg gap-3">
            <div className="bg-[#49BBBD] p-1 rounded-full"> 📅 </div>
            <div>
              <p className="font-bold text-sm text-gray-500">250k</p>
              <p className="text-xs text-gray-500">Assisted Student</p>
            </div>
          </div>

          {/* 📦 Floating Box 2 */}
          <div
            className="absolute px-5 py-5 bottom-20 right-[350px] w-40 bg-white ... 
                sm:relative sm:bottom-0 sm:right-0 sm:w-full sm:max-w-xs sm:mx-auto sm:my-6  rounded-xl shadow-lg"
          >
            <div className="flex items-center gap-10">
              <img
                src="/52355.jpg"
                className="w-15 h-15 rounded-full"
                alt="Expert"
              />
              <div>
                <p className="font-semibold text-sm text-gray-500">
                  Get Expert Guidance
                </p>
                <p className="text-xs text-green-600">Today at 12:00 PM</p>
              </div>
            </div>
            <button className="mt-2 bg-[#C23957] text-white  mx-24 px-3 py-3 rounded-lg text-sm">
              Join Now
            </button>
          </div>

          {/* 📦 Floating Box 3 */}
          <div className="hidden lg:flex lg:absolute  lg:top-1/2 lg:right-[-10px] bg-white rounded-xl shadow-lg p-4 w-56">
            <div className="flex items-center gap-2">
              <span className="bg-orange-100 text-orange-600 p-2 rounded-full">
                📩
              </span>
              <div>
                <p className="font-bold text-sm text-gray-500">
                  Congratulations
                </p>
                <p className="text-xs text-gray-500">
                  Your admission completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Curved SVG at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,0 C720,100 720,100 1440,0 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  );
}
