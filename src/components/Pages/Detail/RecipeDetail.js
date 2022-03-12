import React, { useEffect } from "react";
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

  console.log(loading);

  return (
    <div>
      {loading ? (
        <SkeletonDetail />
      ) : (
        Object.values(selectRecipe).map((recipe) => {
          return (
            <div key={recipe.label} className="recipeDetail">
              <MaterialCard.Card className="recipeDetail__left">
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
                          <span>diet labels : {recipe.dietLabels}</span>
                        </h3>
                        <a
                          className="btn-text"
                          href={recipe.url}
                          target="_blank"
                        >
                          Source
                        </a>
                      </div>
                    </div>
                  </div>
                </MaterialCard.CardContent>
              </MaterialCard.Card>
              <MaterialCard.Card className="recipeDetail__right">
                <MaterialCard.CardContent>
                  <div className="ingredient">
                    <div className=" ingredient__heading u-center-text u-margin-bottom-medium u-border-bottom">
                      <span className="heading-tertiary">ingredients</span>
                    </div>

                    <div className="ingredient__details">
                      {recipe.ingredients.map((ing) => {
                        return (
                          <div className="ingredient__detail u-center-text">
                            <h4 className="paragraph ingredient__detail--span  u-margin-bottom-small">
                              {ing.text}
                            </h4>
                            <div className="ingredient__detail--image">
                              <img src={ing.image} alt={ing.food} />
                            </div>
                          </div>
                        );
                      })}
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
