import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectRecipeDetail,
  fetchRecipeDetail,
  removeRecipeDetail,
  getLoading,
} from "features/appSlice";
import { MaterialCard } from "common/materialUI";
import { prettyPrintNum } from "common/util";
import SkeletonDetail from "components/skeletons/SkeletonDetail";
import Slider from "react-slick";
import { Settings } from "common/slickSetting";

function RecipeDetail() {
  let { recipeId } = useParams();
  const loading = useSelector(getLoading);
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
      {loading ? (
        <SkeletonDetail />
      ) : (
        selectRecipe?.length > 0 &&
        selectRecipe.map((recipe) => {
          return (
            <div key={recipe.label} className="recipeDetail">
              <MaterialCard.Card className="recipeDetail__top">
                <MaterialCard.CardContent>
                  <div className="info">
                    <div className="info__top u-margin-bottom-medium u-center-text">
                      <h2 className="heading-secondary u-border-bottom">
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
                          <span>diet labels :{recipe.dietLables}</span>
                        </h3>
                        <a
                          className="btn-text"
                          href={recipe.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source
                        </a>
                      </div>
                    </div>
                  </div>
                </MaterialCard.CardContent>
              </MaterialCard.Card>
              <MaterialCard.Card className="recipeDetail__bottom">
                <MaterialCard.CardContent>
                  <div className="ingredient">
                    <div className=" ingredient__heading u-center-text u-margin-bottom-medium u-border-bottom">
                      <span className="heading-tertiary">ingredients</span>
                    </div>

                    <div className="ingredient__details">
                      <Slider {...Settings}>
                        {recipe.ingredients.map((ing) => {
                          return (
                            <div
                              key={ing.foodId}
                              className="ingredient__detail u-center-text"
                            >
                              <h4 className="paragraph ingredient__detail--span  u-margin-bottom-small">
                                {ing.text}
                              </h4>
                              <div className="ingredient__detail--image ">
                                <img src={ing.image} alt={ing.food} />
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </div>
                </MaterialCard.CardContent>
              </MaterialCard.Card>
            </div>
          );
        })
      )}
    </div>
  );
}

export default RecipeDetail;
