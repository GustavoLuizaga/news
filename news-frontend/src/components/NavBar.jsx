import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contex/AuthContex.jsx";
import { LoginModal } from "./LoginForm.jsx";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { hasLogin, logout, login } = useAuth();

  const handleLogin = (credentials) => {
    console.log(credentials);
    login(); 
  };

  return (
    <>
      <nav className="bg-green-600 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <Link to="/" className="text-2xl font-bold text-white">
            NEWS
          </Link>

          <div className="hidden md:flex items-center gap-4">

            {hasLogin && (
              <Link
                to="/create"
                className="bg-white text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Crear Noticia
              </Link>
            )}

            {hasLogin ? (
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-white text-green-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Iniciar sesión
              </button>
            )}

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
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3">

            {hasLogin && (
              <Link
                to="/create"
                className="bg-white text-green-600 px-4 py-2 rounded-md text-center font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Crear Noticia
              </Link>
            )}

            {hasLogin ? (
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="bg-white text-green-600 px-4 py-2 rounded-md font-semibold"
              >
                Iniciar sesión
              </button>
            )}

          </div>
        )}
      </nav>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
}