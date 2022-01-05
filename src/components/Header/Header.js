import React, { useState } from "react";
import { fetchRecipe } from "../../features/appSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser, logout } from "../../features/userSlice";
import { auth } from "../../common/firebase/firebase";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");
  const data = {
    params: {
      q: term,
    },
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter recipe");
    dispatch(fetchRecipe(data));
    setTerm("");
  };

  const signOutHandler = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("user");
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="header_container">
      <div className="header-login">
        {user ? (
          <>
            <div>
              <h4>Welcome,{user.displayName} </h4>
              <h4>uid:{user.uid} </h4>
            </div>
            <Link to="">
              <h4 onClick={signOutHandler}>Log Out</h4>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <h4>Log In</h4>
          </Link>
        )}
      </div>
      <form onSubmit={submitHandler}>
        <input
          value={term}
          type="text"
          placeholder="Search Recipes..."
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Click</button>
      </form>
      <Link to="favorite">
        <IconButton aria-label="favorite list">
          <FavoriteIcon className="favoriteIcon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
