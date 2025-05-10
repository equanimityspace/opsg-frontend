import { createContext, useState, useEffect, useCallback, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    role: "visitor",
  });

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setAuthState({ role: storedRole });
    }
  }, []);

  const useAuthState = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useAuthState must be used within an AuthProvider");
    }
    return context;
};

  return (
    <AuthContext.Provider value={{ authState }}>
      {children}
    </AuthContext.Provider>
  );
};
export default useAuthState; AuthProvider



