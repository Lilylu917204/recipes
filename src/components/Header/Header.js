import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Sidebar from "../Sidebar";
import { MaterialIcon } from "../../common/materialUI";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const [showNavBar, setShowNavBar] = useState(false);

  const transitionNavBar = () => {
    window.scrollY > 100 ? setShowNavBar(true) : setShowNavBar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <nav className={`navbar ${showNavBar && "navbar__black"}`}>
      <div className="navbar__header">
        <div>
          <Link to="/recipe" className="navbar__logo">
            Recipes
          </Link>
        </div>
        <ul className="navbar__list">
          <li className="nabar__item">
            <Search />
          </li>
          <li className="nabar__item">
            <Link
              to="/recipe/favorite"
              title="Favorite"
              className="navbar__link"
            >
              <MaterialIcon.IconButton aria-label="favorite list">
                <MaterialIcon.FavoriteIcon
                  className="navbar__icon"
                  fontSize="large"
                />
              </MaterialIcon.IconButton>
            </Link>
          </li>
        </ul>
        <Sidebar />
      </div>
    </nav>
  );
}

export default Header;
