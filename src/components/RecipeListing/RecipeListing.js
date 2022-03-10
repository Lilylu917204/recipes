import React from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipe, getLoading } from "../../features/appSlice";
import { useSelector, useDispatch } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import SkeletonList from "../skeletons/SkeletonList";

function RecipeListing({ pageNumber, setPageNumber }) {
  const recipeData = useSelector(getRecipe);
  const loading = useSelector(getLoading);

  const recipe = recipeData.hits;

  const displayRecipes = (recipe || []).map((recipe, index) => {
    return <RecipeCard key={index} recipe={recipe.recipe} />;
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
      <div className="recipeList">
        {loading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
              return <SkeletonList key={i} />;
            })
          : displayRecipes}
      </div>
      <div className="recipeList"></div>
      <div className="recipeList__btn u-center-text">
        <Link
          to="#"
          className="recipeList__link btn-text"
          onClick={PrePageRender}
        >
          <span>Previous</span>
        </Link>
        <Link
          to="#"
          className="recipeList__link  btn-text"
          onClick={nextPageRender}
        >
          <span>Next</span>
        </Link>
      </div>
    </div>
  );
}
export default RecipeListing;
