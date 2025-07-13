import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 py-10 sm:py-20 gap-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        UI Fix 🛠️ – Before & After
      </h1>

      <p className="text-gray-300 text-center max-w-md text-sm sm:text-base">
        A real-world layout transformation. See the broken version and how it
        was fixed using React + Tailwind CSS.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center px-2">
        <Link to="/before" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-sm sm:text-base transition-transform duration-200 hover:scale-105">
            View Broken Layout
          </button>
        </Link>
        <Link to="/after" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-sm sm:text-base transition-transform duration-200 hover:scale-105">
            View Fixed Layout
          </button>
        </Link>
      </div>
    </div>
  );
}
