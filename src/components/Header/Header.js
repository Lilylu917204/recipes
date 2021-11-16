import React, { useState } from "react";
import { fetchRecipe } from "../../features/appSlice";
import { useDispatch } from "react-redux";
import Login from "../Login.js/Login";

function Header() {
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

  return (
    <div>
      Header
      <form onSubmit={submitHandler}>
        <input
          value={term}
          type="text"
          placeholder="Search Recipes..."
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit">Click</button>
      </form>
      <Login />
    </div>
  );
}

export default Header;
