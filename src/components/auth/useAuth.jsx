import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider  = ({children}) => {
    // Initialisation -------------------------------------------
    const graeme = {
        UserID: 820,
        UserFirstname: "Graeme",
        UserUsertypeID: 1,
    };

  // State ----------------------------------------------------
  const [loggedInUser, setLoggedInUser] = useState(graeme);

  // Handlers -------------------------------------------------
  const login = (user) => setLoggedInUser(user);
  const logout = (user) => setLoggedInUser(null);

  // View -----------------------------------------------------
  return (
    <AuthContext.Provider value={{loggedInUser, login, logout}}>
        {children}
    </AuthContext.Provider>
    );

}

export const useAuth = () => useContext(AuthContext);