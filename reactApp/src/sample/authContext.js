import React, { useState, createContext } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = (username, password) => {
    setTimeout(() => {
      // validate user
      setIsAuthenticated(true);
    }, 100);
  };

  const register = (username, password) => {
    setTimeout(() => {
      // validate user
      setIsAuthenticated(false);
    }, 100);
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
