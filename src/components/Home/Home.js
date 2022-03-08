import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe, removeRecipe } from "../../features/appSlice";
import { Link } from "react-router-dom";
import {types} from "../../common/data";
import Banner from "../Banner/Banner";
import RecipeListing from "../RecipeListing/RecipeListing";

function Home() {
  const dispatch = useDispatch();
  const [meals, setMeals] = useState("");
  const [active, setActive] = useState(false);

  // const data = useMemo(
  //   () => ({
  //     params: {
  //       mealType: meals,
  //       q: "",
  //     },
  //   }),
  //   [meals]
  // );

  // useEffect(() => {
  //   dispatch(fetchRecipe(data));
  //   return () => {
  //     dispatch(removeRecipe());
  //   };
  // }, [meals, active, data, dispatch]);

  return (
    <div className="home">
      <div className="text__box">
        <div className="text__box--title">
          <h1 className="heading-primary u-center-text">
             <span className="heading-primary--main u-margin-bottom-medium">
              What to cook today?
            </span>
            <span className="heading-primary--sub">
              Fast, fresh, and foolproof
            </span> 
          </h1>
        </div>
      </div>
      <main>
        <div className="main">
          <div className="main__title u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary u-border-bottom">Choose your first recipe</h2>
          </div>
          <div className="main__mealType">
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
                  <Link to={`/recipe/${type.title.toLowerCase()}`}>
                    <div className="card">
                      <div className="card__side card__side--front">
                        {" "}
                        <img
                          className="card__side--front--img"
                          src={type.image}
                        />
                        <h2 className="card__side--front--heading">
                          {type.title}
                        </h2>
                      </div>
                      <div className="card__side card__side--back card__side--back-1">
                        Back
                      </div>
                    </div>
                  </Link>
                </span>
              </div>
            );
          })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
