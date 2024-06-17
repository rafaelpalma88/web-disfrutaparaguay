// app/context/AuthContext.tsx
"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  id: string;
  name: string;
  email: string;
  approved_at: string | null;
  created_at: string;
  role: "MEMBER" | "NOT_APPROVED";
}

interface AuthContextData {
  user: User | null;
  saveUserInfos: (data: User) => void;
  // signIn: (data: User) => void;
  // signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const userMock: User = {
  //   approved_at: null,
  //   created_at: "2024-06-11T12:58:11.806Z",
  //   email: "rafaelcostapalma@protonmail.com",
  //   id: "de3090ee-4558-4d60-9913-a9cec927773b",
  //   name: "Rafael Costa Palma",
  //   role: "MEMBER",
  // };

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // const storedUser = localStorage.getItem("@web-disfrutaparaguay");
    // if (storedUser) {
    //   setUser(JSON.parse(storedUser));
    // }
  }, [user]);

  const saveUserInfos = (user: User) => {
    setUser(user);
  };

  // const signIn = (userData: User) => {
  //   setUser(userData);
  //   localStorage.setItem("@web-disfrutaparaguay", JSON.stringify(userData));
  // };

  // const signOut = () => {
  //   setUser(null);
  //   localStorage.removeItem("@web-disfrutaparaguay");
  // };

  return (
    <AuthContext.Provider value={{ user, saveUserInfos }}>
      {/* <AuthContext.Provider value={{ user, saveUserInfos, signIn, signOut }}> */}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
