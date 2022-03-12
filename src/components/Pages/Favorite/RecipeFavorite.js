import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getFavoriteItems,
  removeFromFavorite,
} from "../../../features/favoriteSlice";
import { MaterialIcon } from "../../../common/materialUI";
import { prettyPrintNum } from "../../../common/util";

const RecipeFavorite = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(getFavoriteItems);

  const handleRemoveFromFav = (recipe) => {
    dispatch(removeFromFavorite(recipe));
  };

  return (
    <div className="recipeFav">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">My Saved Recipes</h2>
      </div>
      {favorite.length === 0 ? (
        <div className="empty">
          <div className="u-center-text u-margin-bottom-medium">
            <h3 className="heading-tertiary">
              You have not saved any recipes recently
            </h3>
          </div>
          <Link to="/recipe" className="btn-text">
            Search all Recipes
          </Link>
        </div>
      ) : (
        <div className="favorite">
          <h3 className="favorite__titles heading-tertiary u-margin-bottom-medium">
            <span>Recipe</span>
            <span>Calories</span>
            <span>Diet Labels</span>
          </h3>

          <div className="favorite__items paragraph">
            {favorite?.map((fav) => {
              return (
                <ul
                  key={fav.uri}
                  className="favorite__item u-margin-bottom-small u-border-top"
                >
                  <Link
                    to={`/recipe/${fav.mealType[0].split(/([/])/)[0]}/${
                      fav.uri.split(/([_])/)[2]
                    }`}
                  >
                    <li className="favorite__item--label">
                      <div className="favorite__item--label--image">
                        <img src={fav.image} alt={fav.label} width="200px" />
                      </div>
                      <div className="favorite__item--label--span ">
                        <span>{fav.label}</span>
                      </div>
                    </li>
                  </Link>
                  <li className="favorite__item--calories">
                    <MaterialIcon.DirectionsRunIcon fontSize="large" />
                    <span>{`${prettyPrintNum(fav.calories)}`}</span>
                  </li>
                  <li>
                    {fav.dietLabels.map((dietLabel, index) => {
                      return <span key={index}>{dietLabel}</span>;
                    })}
                  </li>
                  <li className="remove">
                    <MaterialIcon.DeleteIcon
                      style={{ fontSize: 30 }}
                      className="remove-icon"
                      onClick={() => handleRemoveFromFav(fav)}
                    />
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeFavorite;
