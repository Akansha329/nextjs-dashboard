export default function Projects() {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/nyc.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-32 px-6 md:px-12 pb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16">
          My Projects
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10 max-w-7xl mx-auto">

          {/* Project Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              To-do List
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Task management app built using HTML, CSS, and JavaScript that allows users to add, edit, and delete tasks.
            </p>
          </div>

          {/* Project Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Dashboard System
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Admin dashboard built with React & Tailwind CSS. Includes responsive layout and interactive components
              for efficient data management.
            </p>
          </div>

          {/* Project Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Weather App
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Real-time weather app built with Next.js. Fetches live weather data using API
              and displays it in a modern, user-friendly interface.
            </p>
          </div>

          {/* Project Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300">
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              User Profile System
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Profile management system with create, edit, and delete functionality using LocalStorage
              features a clean and responsive UI.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}