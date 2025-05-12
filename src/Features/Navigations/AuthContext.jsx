// import { createContext, useState, useEffect, } from "react";
// import authProvider from "./authProvider";

// const authContext = createContext();

// export const authProvider = ({ children }) => {
//   const authState = authProvider();
//   };

//   useEffect(() => {
//     const storedRole = localStorage.getItem("role");
//     if (storedRole) {
//       setAuthState({ role: storedRole });
//     }
//   }, []);

// //   const useAuthState = useCallback(() => {
// //     const context = useContext(authContext);
// //     if (context === undefined) {
// //       throw new Error("useAuthState must be used within an AuthProvider");
// //     }
// //     return context.authState;
// // }, []);

//   return (
//     <authContext.Provider value={AuthState}>
//         {children}
//     </authContext.Provider>
//   );
// export default authContext;


// import { createContext, useState, useEffect, useCallback, useContext } from "react";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState({
//     role: "visitor",
//   });

//   useEffect(() => {
//     const storedRole = localStorage.getItem("role");
//     if (storedRole) {
//       setAuthState({ role: storedRole });
//     }
//   }, []);

//   function useAuthState(){
//     const context = useContext(AuthContext);
//     if (context === undefined) {
//       throw new Error("useAuthState must be used within an AuthProvider");
//     }
//     return context;
// };

//   return (
//     <AuthContext.Provider value={{ authState }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export default useAuthState; AuthProvider


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

  return (
    <AuthContext.Provider value={authState}>
      {children}</AuthContext.Provider>
    );
};

export const useAuthState = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;