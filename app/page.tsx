"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/nyc.jpg')" }}
    >
      <div className="min-h-screen bg-black/70 flex items-center justify-center px-4 pt-32">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
              Hi, I’m <span className="text-blue-400">Akansha</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg mb-4 text-center md:text-left">
              I am a passionate Software Engineer who loves building modern,
              scalable, and user-friendly web applications using Next.js, React, and Tailwind CSS.
            </p>

            <p className="text-gray-300 text-sm md:text-base mb-8 text-center md:text-left">
              This portfolio represents my journey, projects, and skills. I believe in writing clean, maintainable code 
              creating beautiful UI that users love.
            </p>

            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="https://github.com/Akansha329"
                target="_blank"
                className="flex items-center gap-2 bg-gray-900 px-6 py-3 rounded hover:bg-gray-800"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 bg-blue-900 px-6 py-3 rounded hover:bg-blue-800"
              >
                <FaFilePdf /> Resume
              </a>

              <a
                href="https://www.linkedin.com/in/aakansha-gautam-289230306/"
                target="_blank"
                className="flex items-center gap-2 bg-blue-900 px-6 py-3 rounded hover:bg-blue-800"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                href="mailto:aakanshagautam867@gmail.com"
                className="flex items-center gap-2 bg-red-900 px-6 py-3 rounded hover:bg-red-800"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <img
              src="/images/profile.jpg"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}