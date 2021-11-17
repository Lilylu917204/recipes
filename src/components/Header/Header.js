import React, { useState, useEffect } from "react";
import { fetchRecipe } from "../../features/appSlice";
import { useSelector, useDispatch } from "react-redux";

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
    </div>
  );
}

export default Header;
