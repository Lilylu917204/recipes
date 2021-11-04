import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe } from "../../features/appSlice";
import RecipeListing from "../RecipeListing/RecipeListing";

function Home() {
  const data = {
    params: {
      mealType: "Breakfast",
      q: "",
    },
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(data));
  }, [dispatch]);

  return (
    <div>
      Home
      <RecipeListing />
    </div>
  );
}

export default Home;
