export default function About() {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/nyc.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen
        px-4 sm:px-6 md:px-12 py-20 gap-10 pt-32">

        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="
              w-40 h-40
              sm:w-56 sm:h-56
              md:w-72 md:h-72
              lg:w-80 lg:h-80
              rounded-full border-4 border-white shadow-2xl object-cover
            "
          />
        </div>

        {/* About Content */}
        <div className="bg-white/90 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center md:text-left">
            About Me
          </h1>

          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Hello! I’m <span className="font-semibold">Akansha</span>, a passionate Software Engineer dedicated to building modern, scalable, and user-friendly web applications. I love working on projects that challenge me to think creatively and solve real-world problems with clean code and elegant design.
          </p>

          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            I have experience with <span className="font-medium">Next.js, React, Tailwind CSS, JavaScript, HTML, CSS, and Git/GitHub</span>. I enjoy learning new technologies, optimizing workflows, and creating digital experiences that are both efficient and visually appealing.
          </p>

          <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            Outside of coding, I enjoy exploring new frameworks, improving my design skills, and contributing to open-source projects. I aim to continuously grow as a developer and deliver high-quality solutions that make a difference.
          </p>
        </div>
      </div>
    </div>
  );
}