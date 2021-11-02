import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRecipeDetail,
  fetchRecipeDetail,
  removeRecipeDetail,
} from "../../features/appSlice";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  let { recipeUri, mealType } = useParams();
  const selectRecipe = useSelector(selectRecipeDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipeDetail(recipeUri, mealType));

    return () => {
      dispatch(removeRecipeDetail());
    };
  }, [dispatch, recipeUri]);
  return <div>RecipeDetail</div>;
}

export default RecipeDetail;
