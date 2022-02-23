import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRecipeDetail,
  fetchRecipeDetail,
  removeRecipeDetail,
} from "../../features/appSlice";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { prettyPrintNum } from "../util";

function RecipeDetail() {
  let { recipeId } = useParams();

  const selectRecipe = useSelector(selectRecipeDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipeDetail(recipeId));

    return () => {
      dispatch(removeRecipeDetail());
    };
  }, [dispatch, recipeId]);

  return (
    <div>
      {Object.keys(selectRecipe).length === 0
        ? "loading..."
        : selectRecipe.map((recipe) => {
            return (
              <div key={recipe.label} className="recipeDetail">
                {/* <div className="recipeDetail__left"> */}
                <Card className="recipeDetail__left">
                  <CardContent>
                    <div className="info">
                      <div className="info__top">
                        <h2 className="heading-secondary u-center-text u-margin-bottom-medium">
                          <span>{recipe.label}</span>
                        </h2>
                      </div>
                      <div className="info__bottom">
                        <div className="info__bottom--image">
                          <img src={recipe.image} alt={recipe.label} />
                        </div>
                        <div className="info__bottom--span">
                          <h3 className="heading-tertiary">
                            <span>
                              calories:{prettyPrintNum(recipe.calories)}
                            </span>
                            <span>diet labels : {recipe.dietLabels}</span>
                          </h3>
                          <a
                            className="btn-text u-center-text"
                            href={recipe.url}
                            target="_blank"
                          >
                            Source
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* <div className="detail">
                      <div className="recipeDetail__left--top">
                        <h2 className="heading-secondary u-center-text u-margin-bottom-medium">
                          <span>{recipe.label}</span>
                        </h2>
                      </div>
                      <div className="recipeDetail__left--bottom">
                        <div className="recipeDetail__left--top--image">
                          <img src={recipe.image} alt={recipe.label} />
                        </div>
                        <div>
                          <h3 className="heading-tertiary">
                            <span>
                              calories:{prettyPrintNum(recipe.calories)}
                            </span>
                            <span>diet labels : {recipe.dietLabels}</span>
                          </h3>
                          <a href={recipe.url} target="_blank">
                            <button type="submit">Source</button>
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </CardContent>
                </Card>
                {/* <Card className="recipeDetail__left--bottom">
                  <CardContent> */}

                {/* </CardContent>
                </Card> */}
                {/* </div> */}

                <Card className="recipeDetail__right">
                  <CardContent>
                    <div className="ingredient">
                      <div className=" ingredient__heading u-center-text u-margin-bottom-medium">
                        <span className="heading-tertiary">ingredients</span>
                      </div>

                      <div className="ingredient__details">
                        {recipe.ingredients.map((ing) => {
                          return (
                            <div className="ingredient__detail">
                              <h4 className="ingredient__detail--span  u-margin-bottom-small">
                                {ing.text}
                              </h4>
                              <div className="ingredient__detail--pic">
                                <img src={ing.image} alt={ing.food} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
    </div>
  );
}

export default RecipeDetail;
