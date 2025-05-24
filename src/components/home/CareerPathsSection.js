import {
  Book,
  Briefcase,
  FileText,
  GraduationCap,
  Landmark,
  Stethoscope,
  Syringe,
  Users,
} from "lucide-react";

const categories = [
  {
    title: "Engineering",
    icon: <Briefcase className="text-[#49BBBD]" size={28} />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    title: "Medical",
    icon: <Stethoscope className="text-[#BDB2FF]" size={28} />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    title: "Management",
    icon: <Users className="text-[#A0C4FF]" size={28} />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    title: "Commerce & Banking",
    icon: <GraduationCap className="text-[#80FFDB]" size={28} />,
    desc: "sed do eiusmodadipiscing elit, sed do eiusmod",
  },
  {
    title: "Law",
    icon: <Landmark className="text-[#FFD6A5]" size={28} />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    title: "Paramedical",
    icon: <Syringe className="text-[#FFADAD]" size={28} />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    title: "Arts & Humanities",
    icon: <FileText className="text-[#BDBDBD]" size={28} />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    title: "Nursing",
    icon: <Book className="text-[#80FFDB]" size={28} />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
];

export default function CareerPathsSection() {
  return (
    <section className="bg-white px-20 py-16 max-w-auto mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-[#1F1F1F]">
        Choose Your Career Path – <span className="text-[#0bf1ac] font-bold">Explore Exams</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:bg-teal-200 hover:shadow-lg transition"
          >
            <div className="bg-gray-100 p-3 rounded-lg mb-4">{cat.icon}</div>
            <h3 className="text-lg  text-black font-semibold mb-2">{cat.title}</h3>
            <p className="text-sm text-black">{cat.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <button className="bg-[#49BBBD] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#3da2a4] transition">
          View More
        </button>
      </div>
    </section>
  );
}
