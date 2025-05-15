export default function SucessStats() {
  return (
    <section className="py-16 px-6 md:px-20 text-center bg-white">
      {/* Our Success */}
      <div className="mb-12">
        <h2 className="text-black text-3xl font-bold mb-2">Our Success</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Over the years, College ONN has helped thousands of students discover the best colleges, 
          access expert guidance, and stay informed throughout their admission journey.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10 text-[#1D1D1D] font-semibold text-lg">
          <div>
            <p className="text-2xl font-bold text-[#49BBBD]">15K+</p>
            <p>Students</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#49BBBD]">75%</p>
            <p>Total success</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#49BBBD]">35</p>
            <p>Main questions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#49BBBD]">26</p>
            <p>Chief experts</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#49BBBD]">16</p>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      {/* What is College Onn */}
      <div className="mb-12">
        <h2 className="text-black text-2xl font-bold">
          What is <span className="text-[#49BBBD]">COLLEGE ONN?</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          College onn is a platform that helps students explore career paths,
          discover top colleges, get expert counseling, and stay updated on
          entrance exams — all in one place. From choosing the right course to
          preparing for JEE, NEET, CUET, and more, College onn makes your
          college journey simple, smart, and stress-free.
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 max-w-4xl mx-auto">
        {/* College Predictor Card */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="/Iit-delhi.jpg"
            alt="Student"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center items-center text-black p-4">
            <h3 className=" text-[#49BBBD] bg-white rounded-full px-4 py-2 text-xl font-semibold mb-2">
              College Predictor
            </h3>
            <button className=" bg-white border border-white rounded-full px-4 py-2 hover:bg-white hover:text-[#49BBBD] transition">
              Find Your College
            </button>
          </div>
        </div>

        {/* Compare College Card */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="/JU.jpg"
            alt="Student"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center items-center text-black p-4">
            <h3 className=" text-[#49BBBD]  bg-white rounded-full px-4 py-2  text-xl font-semibold mb-2">
              Compare College
            </h3>
            <button className="bg-white border border-white rounded-full px-4 py-2 hover:bg-white hover:text-[#49BBBD] transition">
              Find the Best One
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
