import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mealTypeData } from "common/data";

function Home() {
  const [meals, setMeals] = useState("");
  const [active, setActive] = useState(false);

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
            <h2 className="heading-secondary u-border-bottom">
              Choose your first recipe
            </h2>
          </div>
          <div className="main__mealType">
            {mealTypeData.map((type, key) => {
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
                          <div className="card__side--front--img">
                            <img src={type.image} />
                          </div>
                          <h2 className="card__side--front--heading">
                            {type.title}
                          </h2>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                          <h3 className="card__side--back--heading">
                            {type.body}
                            <span>{type.author}</span>
                          </h3>
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
