import React from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipe } from "../../features/appSlice";
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeListing.scss";

function RecipeListing({ pageNumber, setPageNumber }) {
  const recipeData = useSelector(getRecipe);

  const recipe = recipeData.hits;

  const displayRecipes = (recipe || []).map((recipe, index) => {
    return <RecipeCard key={index} recipe={recipe} />;
  });

  console.log(recipeData);

  // const { page } = useParams();

  // const p = parseInt(page, 10);

  const PrePageRender = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber - 10);
  };

  const nextPageRender = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber + 10);
  };

  return (
    <div>
      <div className="recipeList">{displayRecipes}</div>

      {/* 
      <button onClick={PrePageRender}>
        Previous
        <Link to={`/page/${pageNumber - 1}`}>Previous</Link>
      </button>
      <button onClick={nextPageRender}>
        Next
        <Link to={`/page/${pageNumber + 1}`}>Next</Link>
      </button> */}
    </div>
  );
}
export default RecipeListing;
