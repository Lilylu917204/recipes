import React, { useState, useEffect } from "react";
import { fetchRecipe } from "../../features/appSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite";
import Search from "../Search";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const [showNavBar, setShowNavBar] = useState(false);
  // const dispatch = useDispatch();
  // const history = useHistory();

  // const [term, setTerm] = useState("");
  // const data = {
  //   params: {
  //     q: term,
  //   },
  // };

  // useEffect(() => {
  //   const params = new URLSearchParams();
  //   if (term) {
  //     params.append("label", term);
  //   } else {
  //     params.delete("label");
  //   }
  //   history.push({ pathname: "/search", search: params.toString() });
  // }, [term, history]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (term === "") return alert("Please enter recipe");
  //   dispatch(fetchRecipe(data));
  //   setTerm("");
  // };

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
    <nav className={`navbar ${showNavBar && "nav__black"}`}>
      <div className="header">
        <div className="logo">
          <Link to="/recipe">Recipes</Link>
        </div>
        <ul className="menu-list">
          <div className="icon cancel-btn">
            <i className="fas fa-times"></i>
          </div>
          <li>
            <Search />{" "}
            {/* <form
              onSubmit={submitHandler}
              title="Search"
              className="headerForm"
            >
              <input
                value={term}
                type="text"
                placeholder="Search Recipes..."
                onChange={(e) => setTerm(e.target.value)}
              />
              <IconButton aria-label="search list" type="submit">
                <SearchIcon className="headerIcon searchIcon" />
                {/* {term ? <Redirect to="/breakfast" /> : null} */}
            {/* </IconButton>
            </form>  */}
          </li>
          <li>
            <Link to="/recipe/favorite" title="Favorite">
              <IconButton aria-label="favorite list">
                <FavoriteIcon
                  className="headerIcon favoriteIcon"
                  fontSize="large"
                />
              </IconButton>
            </Link>
          </li>
        </ul>
        <div className="icon menu-btn">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Header;
