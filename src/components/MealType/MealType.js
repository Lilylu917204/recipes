import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe, removeRecipe } from "../../features/appSlice";
import RecipeListing from "../RecipeListing/RecipeListing";
import { useParams } from "react-router-dom";

function Home() {
  let { mealType } = useParams();
  const mealTypeDetail = {
    params: {
      mealType,
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(mealTypeDetail));

    return () => {
      dispatch(removeRecipe());
    };
  }, [dispatch, mealTypeDetail]);

  return (
    <div>
      <RecipeListing />
    </div>
  );
}

export default Home;
