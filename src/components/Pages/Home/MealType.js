import React from "react";
import { useParams } from "react-router-dom";
import RecipeListing from "../List/RecipeListing";
import useFetch from "hooks/useFetch";

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
