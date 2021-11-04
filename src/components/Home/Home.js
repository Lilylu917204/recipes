import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchBreakfast,
  fetchDinner,
  fetchLunch,
  fetchSnack,
  fetchTeatime,
  fetchRecipe,
} from "../../features/appSlice";
import RecipeListing from "../RecipeListing/RecipeListing";

function Home() {
  const data = {
    params: {
      mealType: "Breakfast",
      q: " ",
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(data));
    // dispatch(fetchBreakfast());
    // dispatch(fetchDinner());
    // dispatch(fetchLunch());
    // dispatch(fetchSnack());
    // dispatch(fetchTeatime());
  }, [dispatch, data]);

  return (
    <div>
      Home
      <RecipeListing />
    </div>
  );
}

export default Home;
