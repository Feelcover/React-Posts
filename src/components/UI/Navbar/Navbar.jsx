import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <MyButton
        style={{ color: "white", border: "2px solid white" }}
        onClick={() => logout()}
      >
        Выйти
      </MyButton>
      <div className="navbar__links">
        <Link className="navbar_link" to="/about">
          О сайте
        </Link>
        <Link className="navbar_link" to="/posts">
          Посты
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
