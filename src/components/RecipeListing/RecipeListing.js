import React from "react";
import { getBreakfast } from "../../features/appSlice";
import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeListing() {
  const breakfast = useSelector(getBreakfast);

  return <div></div>;
}

export default RecipeListing;
