import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState("false");
  const [token, setToken] = useState("");
  const userDetails = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  const isAuth = () => {
    if (auth === "false") {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(userDetails),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((e) => e.json())
        .then((e) => setToken(e));
      toggleAuth();
    } else {
      toggleAuth();
    }
  };
  const toggleAuth = () => {
    setAuth(auth === "false" ? "true" : "false");
  };
  return (
    <AuthContext.Provider value={{ auth, isAuth, token }}>
      {children}
    </AuthContext.Provider>
  );
};
