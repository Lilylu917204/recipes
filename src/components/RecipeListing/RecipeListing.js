import React from "react";
import { getRecipe } from "../../features/appSlice";
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeListing.scss";

function RecipeListing({ pageNumber, setPageNumber }) {
  const recipe = useSelector(getRecipe);

  const displayRecipes = (recipe.hits || []).map((recipe, index) => {
    return <RecipeCard key={index} recipe={recipe} />;
  });

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
      <button onClick={PrePageRender}>Previous Page</button>
      <button onClick={nextPageRender}>Next Page</button>
    </div>
  );
}
export default RecipeListing;
