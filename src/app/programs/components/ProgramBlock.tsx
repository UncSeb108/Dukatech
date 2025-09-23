import Image from "next/image";

interface ProgramBlockProps {
  title: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean;
}

export default function ProgramBlock({
  title,
  description,
  image,
  href,
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
          <h2 className="text-3xl font-bold text-[#2e318e] mb-6 font-michroma">
            {title}
          </h2>
          <p className="text-black text-lg leading-relaxed mb-10">
            {description}
          </p>
          <a
            href={href}
            className="relative inline-flex items-center justify-center px-8 py-3 font-michroma text-sm sm:text-base font-semibold 
             text-white tracking-wide overflow-hidden rounded-xl 
             bg-gradient-to-r from-[#b8873d] to-[#2e318e] 
             shadow-lg hover:shadow-[#b8873d]/40
             transition-all duration-500 hover:scale-105 group"
          >
            <span className="relative z-10">Learn More</span>

            {/* Subtle glowing overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Animated border effect */}
            <span className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-500" />
          </a>
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
