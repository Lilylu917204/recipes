import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe, removeRecipe } from "../../features/appSlice";
import RecipeListing from "../RecipeListing/RecipeListing";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function MealType() {
  // const [pageNumber, setPageNumber] = useState(0);
  let { mealType } = useParams();

  const { loading, pageNumber, setPageNumber } = useFetch(mealType);

  // const mealTypeDetail = {
  //   params: {
  //     q: mealType,
  //     from: pageNumber,
  //     to: pageNumber + 10,
  //   },
  // };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //    dispatch(fetchRecipe(mealTypeDetail));

  //   return () => {
  //     dispatch(removeRecipe());
  //   };
  // }, [dispatch, mealType, pageNumber]);

  console.log(loading);

  return (
    <div>
      <RecipeListing pageNumber={pageNumber} setPageNumber={setPageNumber} />
      {loading ? <h1>Loading...</h1> : null}
    </div>
  );
}

export default MealType;
