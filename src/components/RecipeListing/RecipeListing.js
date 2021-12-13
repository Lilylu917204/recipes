import React from "react";
import { getRecipe } from "../../features/appSlice";
import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./RecipeListing.scss";

function RecipeListing({ pageNumber, setPageNumber }) {
  const recipe = useSelector(getRecipe);

  const displayUsers = (recipe.hits || []).map((recipe, index) => {
    return <RecipeCard key={index} data={recipe} />;
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
      {displayUsers}
      <button onClick={PrePageRender}>Previous Page</button>
      <button onClick={nextPageRender}>Next Page</button>
    </div>
  );
}
export default RecipeListing;
