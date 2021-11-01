import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBreakfast } from "../../features/appSlice";
import RecipeListing from "../RecipeListing/RecipeListing";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBreakfast());
  }, [dispatch]);

  return (
    <div>
      Home
      <RecipeListing />
    </div>
  );
}

export default Home;
