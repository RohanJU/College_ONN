import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#1E1D39] text-white py-12 px-6 mt-16">
      <div className="max-w-5xl mx-auto text-center space-y-6">

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/CollegeONN_LOGO.png"
            alt="College ONN Logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Newsletter */}
        <h3 className="text-lg sm:text-xl font-medium text-gray-300">
          Subscribe to get our Newsletter
        </h3>

        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded-full w-full sm:w-auto flex-grow border border-gray-400 text-black"
          />
          <button
            type="submit"
            className="bg-teal-400 hover:bg-teal-500 text-white font-semibold px-6 py-2 rounded-full shadow-md transition"
          >
            Subscribe
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-center space-x-6 text-sm text-gray-400 pt-4">
          <a href="#" className="hover:text-white">Careers</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 pt-2">
          © 2021 Class Technologies Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
