export default function Skills() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Tailwind CSS", icon: "🖌️" },
    { name: "Next.js", icon: "⚛️" },
    { name: "React", icon: "⚛️" },
    { name: "Git & GitHub", icon: "🐙" },
  ];

  return (
    <div className="relative min-h-screen">
      
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/nyc.jpg')" }}
      ></div>

      
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      
      <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 text-white">
        <h1 className="text-5xl font-bold mb-12 text-center">My Skills</h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          These are the key technologies I use to build modern, responsive web applications. 
          I focus on writing clean and maintainable code while creating interactive and user-friendly experiences.
        </p>
      </div>
    </div>
  );
}