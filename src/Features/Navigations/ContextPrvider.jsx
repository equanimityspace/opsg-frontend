import { createContext } from "react";
import React from "react";

export const userContext = createContext()

const ContextProvider = ({ children }) => {
  const [role, seetRole] = React.useState('admin');
  const [authenticated, setAuthenticated] = React.useState(true);
  

  const logout = () => {
    seetRole(null);
    setAuthenticated(false);
  };

  return (
    <userContext.Provider value = {{role, authenticated}}>
      {children}
    </userContext.Provider>
  )
}

export default ContextProvider