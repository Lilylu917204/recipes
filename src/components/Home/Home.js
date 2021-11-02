import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchBreakfast,
  fetchDinner,
  fetchLunch,
  fetchSnack,
  fetchTeatime,
} from "../../features/appSlice";
import RecipeListing from "../RecipeListing/RecipeListing";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreakfast());
    dispatch(fetchDinner());
    dispatch(fetchLunch());
    dispatch(fetchSnack());
    dispatch(fetchTeatime());
  }, [dispatch]);

  return (
    <div>
      Home
      <RecipeListing />
    </div>
  );
}

export default Home;
