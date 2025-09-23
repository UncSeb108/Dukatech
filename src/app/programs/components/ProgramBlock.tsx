import Image from "next/image";

interface ProgramBlockProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function ProgramBlock({
  title,
  description,
  image,
  reverse,
}: ProgramBlockProps) {
  return (
    <section className="py-12 px-6 md:px-12 bg-white font-poppins">
      <div
        className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div>
          <h2 className="text-3xl font-bold text-[#2e318e] mb-6 font-michroma">{title}</h2>
          <p className="text-black text-lg leading-relaxed">{description}</p>
          <button className="font-michroma px-6 py-2 bg-[#b8873d] text-white rounded-md hover:bg-[#a3742e] hover:scale-105 transition-all duration-300 mt-10">
                Learn More
              </button>
        </div>
        <div className="relative w-full h-80 md:h-96">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
