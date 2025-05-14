import { createContext } from "react";
import React from "react";

export const userContext = createContext()

const ContextProvider = ({ children }) => {
  const [role, setRole] = React.useState('admin');
  const [authenticated, setAuthenticated] = React.useState(true);
  

  const handlelogout = () => {
    setRole(null);
    setAuthenticated(false);
  };

  return (
    <userContext.Provider value = {{role, authenticated}}>
      {children}
    </userContext.Provider>
  )
}

export default ContextProvider


// import { createContext, useState, useEffect, useLayoutEffect, useContext } from "react";
// import api from '@api';
// import { storeToken } from "../utils/tokenService";

// const AuthContext = createContext(undefined);

// export const useAuthContext = () => {
//    const authContext = useContext(AuthContext);

//    if (!authContext) {
//     throw new Error("useAuth must be used within AuthProvider");
//    }
//    return authContext;
// };

// //holds the token in authprovider
// const AuthProvider = ({children}) => {
//   const [token, setToken] = useState();


//   //runs once on mount to try and fetch the user
//   useEffect(() => {
//     const fetchMe = async () => {
//       try {
//         const response = await api.get('/api/me')
//         setToken(response.data.accessToken);
//       } catch  {
//         setToken(null);
//       }
//     };

//       fetchMe();
//   }, []);

//   //using axios to check for the token and store it in the header
//   // uselayouteffect and the interceptor delays any unwwanted rendering
//   useLayoutEffect(() => {
//     const authInterceptor = api.interceptors.request.use((config) => {
//       config.headers.authorization = 
//         !config_rety && token
//         ? `Bearer ${token}`
//         : config.headers.authorization;
//       return config;
//     });

//     return () => {
//       api.interceptors.request.eject(authInterceptor);
//     };
//   }, [token]);




// export function AuthProvider({ children }) {
//   const [authState, setAuthState] = useState({ 
//     isLoggedIn: false,
//     user: null,
//     role: "visitor" 
//   });

//   //send a login request to api
//   const login = async (userData) => {
//     const loginResponse = await fetch("/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });

//     //set the token and user data
//     if (loginResponse.ok) {
//       const loginData = await loginResponse.json();
//       setAuthState((prevState) => ({
//         ...prevState,
//         isLoggedIn: true,
//         user: loginData.user,
//         token: loginData.token,
//       }));

//       //store token in local storage
//       localStorage.setItem("user", JSON.stringify(loginData.user));
//       //set user role from login
//       localStorage.setItem("role", loginData.role);
//     } else {
//       console.error("Login failed")
//     }
//   };

//   //removes token on logout
//   const logout = () => {
//     setAuthState({ isLoggedIn: false, user: null, token: null });
//     localStorage.removeItem("user");
//     localStorage.removeItem("role");
//   };

//   useEffect(() => {
//         // Check if there's a token in secure storage
//         const token = localStorage.getItem("token");
//         if (token) {
//           // Verify token with server if needed
//           const verifyResponse = fetch("/api/verify", {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });
//           if (verifyResponse.ok) {
//             // Fetch user data from the server if needed
//             const userData = verifyResponse.json();
//             setAuthState((prevState) => ({
//               ...prevState,
//               isLoggedIn: true,
//               user: userData.user,
//               role: userData.role,
//             }));
//           } else {
//             console.error("token verification failed");
//           }
//         }

//     const storedUser = localStorage.getItem("user");
//     const storedRole = localStorage.getItem("role");
//     if (storedUser) {
//       setAuthState((prevState) => ({ ...prevState, isLoggedIn: true, user: JSON.parse(storedUser) }));
//       setAuthState((prevState) => ({ ...prevState, role: storedRole }));
//     }
//   }, []);
// }

//   return (

//     <AuthContext.Provider value={{ authState, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );


// // export function useAuthState() {

// //   const context = useContext(AuthContext);
// //   if (context === undefined) {
// //     throw new Error("useAuthState must be used within an AuthProvider");
// //   }
// //   return context