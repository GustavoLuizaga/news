import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-600 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          NEWS
        </Link>

        <div className="hidden md:flex items-center">
          <Link
            to="/login"
            className="flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H3m0 0l4-4m-4 4l4 4m13-8v8a2 2 0 01-2 2h-6"
              />
            </svg>
            Iniciar sesión
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 bg-white text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H3m0 0l4-4m-4 4l4 4m13-8v8a2 2 0 01-2 2h-6"
              />
            </svg>
            Iniciar sesión
          </Link>
        </div>
      )}
    </nav>
  );
}