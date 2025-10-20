export default function CTASection() {
  return (
    <section className="py-12 px-6 md:px-12 bg-[#b8873d] text-white text-center font-poppins">
      <h2 className="text-3xl font-bold mb-6 font-montserrat tracking-wide">
        Ready to <span className="text-[#2e318e]">Empower</span> Your <span className="text-[#2e318e]">Community</span> with <span className="text-[#2e318e]">Tech?</span>
      </h2>
      <p className="mb-8 max-w-2xl mx-auto text-2xl">
        Partner with Dukatech Solutions today and join us in creating a
        technology-driven future for Kenya.
      </p>
      <button className="relative overflow-hidden group px-15 py-3 rounded-lg bg-[#b8873d] border border-[#ffffff] text-[#ffffff] hover:text-[#2e318e] cursor-pointer font-bold font-montserrat transition-all ease-in-out duration-500">
          <span className="absolute inset-0 bg-[#ffffff] translate-x-[-100%] group-hover:translate-x-0 transition-transform ease-in-out duration-500"></span>
          <span className="relative flex items-center justify-center gap-2">
            Contact Us
          </span>
        </button>
    </section>
  );
}
