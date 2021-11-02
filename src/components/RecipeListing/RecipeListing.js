import React from "react";
import {
  getBreakfast,
  getDinner,
  getLunch,
  getSnack,
  getTeatime,
} from "../../features/appSlice";
import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeListing() {
  const breakfast = useSelector(getBreakfast);
  const lunch = useSelector(getLunch);
  const dinner = useSelector(getDinner);
  const snack = useSelector(getSnack);
  const teatime = useSelector(getTeatime);

  const breakfastRender = (breakfast.hits || []).map((breakfast, index) => {
    return <RecipeCard key={index} data={breakfast} />;
  });

  const lunchRender = (lunch.hits || []).map((lunch, index) => {
    return <RecipeCard key={index} data={lunch} />;
  });
  const dinnerRender = (dinner.hits || []).map((dinner, index) => {
    return <RecipeCard key={index} data={dinner} />;
  });
  const snackRender = (snack.hits || []).map((snack, index) => {
    return <RecipeCard key={index} data={snack} />;
  });
  const teatimeRender = (teatime.hits || []).map((teatime, index) => {
    return <RecipeCard key={index} data={teatime} />;
  });

  return (
    <div>
      {breakfastRender}
      {lunchRender}
      {dinnerRender}
      {snackRender}
      {teatimeRender}
    </div>
  );
}

export default RecipeListing;
