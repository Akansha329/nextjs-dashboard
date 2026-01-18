export default function About() {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/nyc.jpg')" }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen p-12 gap-10 pt-32">
        
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-white shadow-2xl object-cover"
          />
        </div>

        
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-10 max-w-3xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            Hello! I’m <span className="font-semibold">Akansha</span>, a passionate Software Engineer dedicated to building modern, scalable, and user-friendly web applications. I love working on projects that challenge me to think creatively and solve real-world problems with clean code and elegant design.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed mb-4">
            I have experience with <span className="font-medium">Next.js, React, Tailwind CSS, JavaScript, HTML, CSS, and Git/GitHub</span>. I enjoy learning new technologies, optimizing workflows, and creating digital experiences that are both efficient and visually appealing.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed">
            Outside of coding, I enjoy exploring new frameworks, improving my design skills, and contributing to open-source projects. I aim to continuously grow as a developer and deliver high-quality solutions that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
}