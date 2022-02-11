/*

import React, { useState, useEffect } from "react";
import { fetchRecipe } from "../features/appSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams, createSearchParams } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { create } from "@mui/material/styles/createTransitions";

function Search() {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("q") || "";

  console.log(searchTerm);

  //   const [term, setTerm] = useState("");

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     if (term === "") return alert("Please enter recipe");
  //     dispatch(fetchRecipe(data));
  //     setTerm("");

  //     if (term) {
  //       setSearchParams({ term });
  //       dispatch(
  //         fetchRecipe({
  //           params: {
  //             q: term,
  //           },
  //         })
  //       );
  //     } else {
  //       setSearchParams({});
  //     }
  //   };

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm === "") return alert("Please enter recipe");
    dispatch({
      params: {
        q: e.target.value,
      },
    });
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (term === "") return alert("Please enter recipe");
  //   dispatch(fetchRecipe(data));
  //   setTerm("");
  // };

  return (
    <>
       <form title="Search" className="headerForm" onSubmit={submitHandler}>
        <input
          value={searchTerm}
          type="text"
          placeholder="Search Recipes..."
          onChange={(e) => {
            setSearchParams(createSearchParams({ q: e.target.value }));
          }}
        />
        <IconButton aria-label="search list" type="submit">
          <SearchIcon className="headerIcon searchIcon" />
        </IconButton>
      </form> 
    </>
  );
}

*/

import React, { useEffect, useState } from "react";
import {
  useSearchParams,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import { fetchRecipe } from "../features/appSlice";
import { useDispatch } from "react-redux";
import useFetch from "../components/hooks/useFetch";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let searchTerm = searchParams.get("term") || "";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [pageNumber, setPageNumber] = useState(0);
  const { loading } = useFetch(searchTerm);

  const handleEvent = (e) => {
    const term = e.target.value;
    if (term) {
      // setSearchParams({ term });
      setSearchParams(createSearchParams({ term }));
    } else {
      setSearchParams({});
    }
  };

  const submitEvent = (e) => {
    e.preventDefault();
    // dispatch(
    //   fetchRecipe({
    //     params: {
    //       q: searchTerm,
    //       from: pageNumber,
    //       to: pageNumber + 10,
    //     },
    //   })
    // );
    navigate(`/recipe/${searchTerm}`);
    searchTerm = searchParams.get("");
  };

  return (
    <>
      <form onSubmit={submitEvent}>
        <input type="text" value={searchTerm} onChange={handleEvent} />
      </form>
    </>
  );
};

export default Search;

/*

import React, { useEffect, useState } from "react";
import {
  useParams,
  useSearchParams,
  createSearchParams,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import { fetchRecipe } from "../features/appSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  let [term, setTerm] = useState("");

  let { searchTerm } = useParams();

  searchTerm = term;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitEvent = (e) => {
    e.preventDefault();
    dispatch(
      fetchRecipe({
        params: {
          q: searchTerm,
        },
      })
    );

    navigate(`/recipe/search/${searchTerm}`);
  };

  useEffect(() => {
    dispatch(
      fetchRecipe({
        params: {
          q: searchTerm,
        },
      })
    );
  }, [dispatch, searchTerm]);

  console.log(searchTerm);

  return (
    <>
      <form onSubmit={submitEvent}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;

*/
