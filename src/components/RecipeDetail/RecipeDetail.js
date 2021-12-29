import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRecipeDetail,
  fetchRecipeDetail,
  removeRecipeDetail,
} from "../../features/appSlice";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  let { recipeId } = useParams();

  // recipeId = {
  //   params: {
  //     r: `http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${recipeId}`,
  //   },
  // };
  const selectRecipe = useSelector(selectRecipeDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipeDetail(recipeId));

    return () => {
      dispatch(removeRecipeDetail());
    };
  }, [dispatch, recipeId]);

  console.log(selectRecipe);

  return (
    <div>
      {Object.keys(selectRecipe).length === 0
        ? "loading..."
        : selectRecipe.map((recipe) => {
            return (
              <div key={recipe.label}>
                <div>label:{recipe.label}</div>
                <div>calories:{recipe.calories}</div>
                <img src={recipe.image} alt={recipe.label} />
                <div>diet labels : {recipe.dietLabels}</div>
                <a href={recipe.url} target="_blank">
                  <button type="submit">Source</button>
                </a>
              </div>
            );
          })}
    </div>
  );
}

export default RecipeDetail;
