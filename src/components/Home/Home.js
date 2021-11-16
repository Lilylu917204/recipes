import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe, removeRecipe } from "../../features/appSlice";
import RecipeListing from "../RecipeListing/RecipeListing";

function Home() {
  const dispatch = useDispatch();
  const [mealType, setMealType] = useState("Breakfast");
  const [active, setActive] = useState(false);
  const types = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

  useEffect(() => {
    dispatch(fetchRecipe(data));
    console.log(mealType);
    return () => {
      dispatch(removeRecipe());
    };
  }, [mealType, active, dispatch]);

  const data = {
    params: {
      mealType: mealType,
      q: "",
    },
  };

  return (
    <div>
      {active ? (
        <RecipeListing />
      ) : (
        <>
          {types.map((type) => {
            return (
              <div>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    setMealType(type);
                    setActive(true);
                  }}
                >
                  <h2>{type}</h2>
                </span>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default Home;
