import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contex/AuthContex.jsx";
import { LoginModal } from "./LoginForm.jsx";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { hasLogin, logout, login } = useAuth();

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + `/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        }
      );

      const data = await response.json();

      if (data.ok) {
        login();
      }
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <Link
            to="/"
            className="text-3xl font-extrabold text-emerald-600 tracking-tight"
          >
            NEWS
          </Link>

          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

            {hasLogin && (
              <Link
                to="/create"
                className="hover:text-emerald-600 transition"
              >
                Crear Noticia
              </Link>
            )}

            {hasLogin ? (
              <button
                onClick={logout}
                className="hover:text-red-500 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-emerald-600 hover:text-emerald-700 transition font-semibold"
              >
                Iniciar sesión
              </button>
            )}
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
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
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-700 font-medium">

            {hasLogin && (
              <Link
                to="/create"
                className="hover:text-emerald-600 transition"
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
                className="text-left hover:text-red-500 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="text-left text-emerald-600 font-semibold hover:text-emerald-700 transition"
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