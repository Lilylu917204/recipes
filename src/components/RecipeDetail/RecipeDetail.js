import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRecipeDetail,
  fetchRecipeDetail,
  removeRecipeDetail,
} from "../../features/appSlice";
import { useParams } from "react-router-dom";
import { prettyPrintNum } from "../../components/util";

function RecipeDetail() {
  let { recipeId } = useParams();

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
                <div>calories:{prettyPrintNum(recipe.calories)}</div>
                <img src={recipe.image} alt={recipe.label} />
                <div>diet labels : {recipe.dietLabels}</div>
                <h3>ingredients</h3>
                {recipe.ingredients.map((ing) => {
                  return (
                    <div>
                      <h4>{ing.text}</h4>
                      <img src={ing.image} alt={ing.food} />
                    </div>
                  );
                })}
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
