import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mealTypeData } from "common/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { aosSettings } from "common/aosSetting";

AOS.init(aosSettings);

function Home() {
  const [meals, setMeals] = useState("");
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

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
          <div
            className="main__title u-center-text u-margin-bottom-big"
            data-aos="fade-up"
          >
            <h2 className="heading-secondary u-border-bottom">
              Choose your first recipe
            </h2>
          </div>
          <div className="main__mealType" data-aos="fade-up">
            {mealTypeData.map((type) => {
              return (
                <div key={type.title}>
                  <span
                    onClick={(e) => {
                      e.preventDefault();
                      setMeals(type.title);
                      setActive(true);
                      navigate(`/recipe/${type.title.toLowerCase()}`);
                    }}
                  >
                    <div className="card">
                      <div className="card__side card__side--front">
                        <div className="card__side--front--img">
                          <img alt="recipe_img" src={type.image} />
                        </div>
                        <h2 className="card__side--front--heading">
                          {type.title}
                        </h2>
                      </div>
                      <div className="card__side card__side--back">
                        <div className="card__detail">
                          <div className="card__textbox">
                            <p className="card__textbox-heading">{type.body}</p>
                            <p className="card__textbox-author">
                              {type.author}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
