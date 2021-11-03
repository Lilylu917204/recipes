import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchBreakfast,
  fetchDinner,
  fetchLunch,
  fetchSnack,
  fetchTeatime,
  fetchMealType,
} from "../../features/appSlice";
import RecipeListing from "../RecipeListing/RecipeListing";

function Home() {
  const test = {
    params: {
      mealType: "Breakfast",
      q: " ",
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealType());
    // dispatch(fetchBreakfast());
    // dispatch(fetchDinner());
    // dispatch(fetchLunch());
    // dispatch(fetchSnack());
    // dispatch(fetchTeatime());
  }, [dispatch]);

  return (
    <div>
      Home
      <RecipeListing />
    </div>
  );
}

export default Home;
