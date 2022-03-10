import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe, removeRecipe } from "../../features/appSlice";
import RecipeListing from "../RecipeListing/RecipeListing";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function MealType() {
  let { mealType } = useParams();

  const { pageNumber, setPageNumber } = useFetch(mealType);

  return (
    <div>
      <RecipeListing pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default MealType;
