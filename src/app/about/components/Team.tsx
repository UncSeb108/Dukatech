interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  { name: "Kelvin Mulama", role: "Founder & CEO", image: "/images/kelvin-mulama.jpeg" },
  { name: "Sebastian Avonde", role: "Chief Technology Officer", image: "/images/sebastian.jpeg" },
  { name: "John Doe", role: "Lead Developer", image: "/images/johndoe.jpg" },
  { name: "Jane Doe", role: "Project Manager", image: "/images/janedoe.jpeg" },
];

export default function TeamSection() {
  return (
    <section className="py-12 px-6 md:px-12 bg-white font-poppins">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#b8873d] font-michroma tracking-wide">Meet <span className="text-[#2e318e]">Our Team</span></h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#b8873d] rounded-xl p-4 shadow hover:shadow-2xl hover:scale-105 transition ease-in-out duration-300"
            >
              <div className="w-36 h-36 mx-auto rounded-lg overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-1">
                {member.name}
              </h3>
              <p className="text-[#b8873d]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
