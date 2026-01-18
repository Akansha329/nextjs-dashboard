export default function Projects() {
  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: "url('/images/nyc.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      
      <div className="relative z-10 min-h-screen pt-32 p-12">
        <h1 className="text-5xl font-bold text-center text-white mb-16">
          My Projects
        </h1>

        <div className="grid md:grid-cols-4 gap-10">

          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold mb-3">To-do List</h2>
            <p className="text-gray-700">
              Task management app built using HTML, CSS, and JavaScript that allows users to add, edit, and delete tasks.
            </p>
          </div>

          
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold mb-3">Dashboard System</h2>
            <p className="text-gray-700">
              Admin dashboard built with React & Tailwind CSS.
              Includes responsive layout, and interactive components for efficient data management.
            </p>
          </div>

          
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold mb-3">Weather App</h2>
            <p className="text-gray-700">
              Real-time weather app built with Next.js.
              Fetches live weather data using API and displays it in a modern, user-friendly interface.
            </p>
          </div>

          
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold mb-3">User Profile System</h2>
            <p className="text-gray-700">
              Profile management system with create, edit, delete functionality using LocalStorage.
              Features a clean and responsive UI.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}