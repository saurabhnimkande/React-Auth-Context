import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
export const Navbar = () => {
  const { auth, isAuth } = useContext(AuthContext);
  return (
    <>
      <div>
        <button onClick={isAuth}>
          {auth === "false" ? "Login" : "Logout"}
        </button>
      </div>
    </>
  );
};
