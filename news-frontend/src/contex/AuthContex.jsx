import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [hasLogin, setHasLogin] = useState(false);

  const login = () => setHasLogin(true);
  const logout = () => setHasLogin(false);

  return (
    <AuthContext.Provider value={{ hasLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}