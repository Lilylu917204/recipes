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
import { useNavigate } from "react-router-dom";
import { getRecipe } from "features/appSlice";
import { useSelector } from "react-redux";

const Search = () => {
  const [term, setTerm] = useState("");
  const recipeData = useSelector(getRecipe);
  const navigate = useNavigate();
  const data = recipeData?.hits;
  const pattern = new RegExp("[A-Za-z]+");

  const submitHandler = (e) => {
    e.preventDefault();

    term === "" && alert("Please Enter Recipe");
    if (
      data?.length === 0 ||
      data?.length === undefined ||
      !pattern.test(term)
    ) {
      navigate("/page-not-found");
    }
    if (data?.length !== 0 && term !== "" && pattern.test(term)) {
      navigate(`/recipe/${term}`);
    }
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
    </>
  );
};

export default Search;
