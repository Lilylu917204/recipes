import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipe, getLoading } from "features/appSlice";
import RecipeCard from "components/Pages/List/RecipeCard";
import SkeletonList from "components/skeletons/SkeletonList";

function RecipeListing({ pageNumber, setPageNumber }) {
  const [currentPage, setCurrentPage] = useState(0);

  const recipeData = useSelector(getRecipe);
  const loading = useSelector(getLoading);

  const displayRecipes = (recipeData?.hits || []).map(({ recipe }) => {
    return <RecipeCard key={recipe.uri} recipe={recipe} />;
  });

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const PrePageRender = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber - 10);
    setCurrentPage(currentPage - 1);
    scrollTop();
  };

  const nextPageRender = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber + 10);
    setCurrentPage(currentPage + 1);
    scrollTop();
  };

  const skeletonRender = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
    return <SkeletonList key={i} />;
  });

  return (
    <div className="recipeList">
      {loading ? (
        <div className="recipeList__list">{skeletonRender}</div>
      ) : (
        <>
          <div className="recipeList__list">{displayRecipes}</div>
          <div className="recipeList__btn u-center-text">
            {currentPage > 0 && (
              <Link
                to="#"
                className="recipeList__link btn-text"
                onClick={PrePageRender}
              >
                <span>Previous</span>
              </Link>
            )}
            <div className="heading-tertiary">{currentPage + 1}</div>
            <Link
              to="#"
              className="recipeList__link  btn-text"
              onClick={nextPageRender}
            >
              <span>Next</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
export default RecipeListing;
