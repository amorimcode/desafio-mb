import { createContext, useState, ReactNode } from "react";

type UserType = {
  email: string | null;
  uid: string;
};

type AuthContextType = {
  user: UserType;
  setUser: any;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserType);

  return (
      <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
  </AuthContext.Provider>
  )
}
