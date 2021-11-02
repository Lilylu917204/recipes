import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ data }) {
  const recipeUri = data.recipe.uri.split(/([_])/)[2];
  return (
    <div>
      <Link to={`/recipe/${recipeUri}`}></Link>
    </div>
  );
}

export default RecipeCard;
