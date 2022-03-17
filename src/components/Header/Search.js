/*
import React from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import useFetch from "hooks/useFetch";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let searchTerm = searchParams.get("term") || "";
  const navigate = useNavigate();
  useFetch(searchTerm);

  const handleEvent = (e) => {
    const term = e.target.value;
    if (term) {
      setSearchParams(createSearchParams({ term }));
    } else {
      setSearchParams({});
    }
  };

  const submitEvent = (e) => {
    e.preventDefault();
    navigate(`/recipe/${searchTerm}`);
    searchTerm = searchParams.get("");
  };

  return (
    <>
      <form onSubmit={submitEvent} className="form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleEvent}
          placeholder="search..."
        />
      </form>
    </>
  );
};

export default Search;

*/

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { fetchRecipe, getRecipe } from "features/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { recipeIdSplit } from "common/util";
import useFetch from "hooks/useFetch";

const Search = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const recipeData = useSelector(getRecipe);
  const navigate = useNavigate();
  const data = recipeData?.hits;
  // useFetch(term);

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") {
      alert("Please enter recipe");
    }

    // dispatch(fetchRecipe(term));
    navigate(`/recipe/${term}`);
    setTerm("");
  };

  return (
    <>
      <form onSubmit={submitHandler} className="form">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="search..."
        />
      </form>

      {/* {term &&
        recipeData?.hits?.slice(0, 5).map((data) => {
          return (
            <Link to={`recipe/recipeId/${recipeIdSplit(data.recipe.uri)}`}>
              {data.recipe.label}
            </Link>
          );
        })} */}
    </>
  );
};

export default Search;
