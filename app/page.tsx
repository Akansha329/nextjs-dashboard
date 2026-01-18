"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/nyc.jpg')" }}
    >
      <div className="min-h-screen bg-black/70 flex flex-col">
        {/* Main Content */}
        <div className="flex flex-1 items-center justify-center px-10">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Section */}
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Hi, I’m <span className="text-blue-400">Akansha</span>
              </h1>

              <p className="text-lg mb-4">
                I am a passionate Software Engineer who loves building modern,
                scalable, and user-friendly web applications using Next.js, React, and Tailwind CSS.
              </p>

              <p className="text-gray-300 mb-8">
                This portfolio represents my journey, my projects, and my skills. I believe in writing clean,
                maintainable code and creating beautiful UI that users love.
              </p>

              {/* Professional Buttons */}
              <div className="flex gap-4 flex-wrap">
                
                <a
                  href="https://github.com/Akansha329"
                  target="_blank"
                  className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded shadow-lg transition"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded shadow-lg transition"
                >
                  <FaFilePdf size={20} />
                  Resume
                </a>

                <a
                  href="https://www.linkedin.com/in/aakansha-gautam-289230306/"
                  target="_blank"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded shadow-lg transition"
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>

                <a
                  href="mailto:aakanshagautam867@gmail.com"
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-6 py-3 rounded shadow-lg transition"
                >
                  <FaEnvelope size={20} />
                  Email Me
                </a>

              </div>
            </div>

            {/* Right Section */}
            <div className="flex justify-center">
              <img
                src="/images/profile.jpg"
                alt="Profile"
                className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}