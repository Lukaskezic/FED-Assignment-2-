import { createContext, useState } from "react";
import React from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: any }) => 
{
  const [auth, setAuthentication] = useState<any>({});
  return (
    <AuthContext.Provider value={{ auth, setAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
