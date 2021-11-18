import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe, removeRecipe } from "../../features/appSlice";
import { Link } from "react-router-dom";
import types from "../../common/data";
import Banner from "../Banner/Banner";

function Home() {
  const dispatch = useDispatch();
  const [meals, setMeals] = useState("");
  const [active, setActive] = useState(false);

  const data = useMemo(
    () => ({
      params: {
        mealType: meals,
        q: "",
      },
    }),
    [meals]
  );

  useEffect(() => {
    dispatch(fetchRecipe(data));
    return () => {
      dispatch(removeRecipe());
    };
  }, [meals, active, data, dispatch]);

  return (
    <div>
      <Banner />
      {types.map((type, key) => {
        return (
          <div key={key}>
            <span
              onClick={(e) => {
                e.preventDefault();
                setMeals(type.title);
                setActive(true);
              }}
            >
              <Link to={`/${type.mealType}`}>
                <h2>{type.title}</h2>
              </Link>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
