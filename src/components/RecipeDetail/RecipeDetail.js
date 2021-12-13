import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRecipeDetail,
  fetchRecipeDetail,
  removeRecipeDetail,
} from "../../features/appSlice";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  let { recipeId, mealType } = useParams();
  // const link = `http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${recipeId}`;

  const recipeDetail = {
    params: {
      r: `http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${recipeId}`,
      mealType,
    },
  };
  const selectRecipe = useSelector(selectRecipeDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipeDetail(recipeDetail));

    return () => {
      dispatch(removeRecipeDetail());
    };
  }, [dispatch, recipeId]);
  return <div>RecipeDetail</div>;
}

export default RecipeDetail;
