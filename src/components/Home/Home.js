import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBreakfast } from "../../features/appSlice";
import RecipeListing from "../RecipeListing/RecipeListing";
import { getBreakfast } from "../../features/appSlice";
import { useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const breakfast = useSelector(getBreakfast);

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
