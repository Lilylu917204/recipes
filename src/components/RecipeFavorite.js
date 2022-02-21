import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getFavoriteItems,
  removeFromFavorite,
} from "../features/favoriteSlice";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import DeleteIcon from "@mui/icons-material/Delete";
import { prettyPrintNum } from "./util";

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
            <h3 className="heading-tertiary">You have not saved any recipes recently</h3>
          </div>
          <Link to="/recipe" className="btn-text">
             Search all Recipes
          </Link>
        </div>
      ) : (
        <div className="favorite">
          <div className="favorite-titles">
            <h3 className="favorite-heading favorite-title">Recipe</h3>
            <h3 className="favorite-heading  recipe-calories">Calories</h3>
            <h3 className="favorite-heading  recipe-dietLabel">Diet Labels</h3>
          </div>
          <div className="favorite-items">
            {favorite?.map((fav) => {
              return (
                <div key={fav.uri} className="favorite-item">
                  <Link
                    to={`/recipe/${fav.mealType[0].split(/([/])/)[0]}/${
                      fav.uri.split(/([_])/)[2]
                    }`}
                  >
                    <div className="favorite-label favorite-label--grid">
                      <img src={fav.image} alt={fav.label} width="200px" />
                      <div>
                        <h3>{fav.label}</h3>
                      </div>
                    </div>
                  </Link>

                  <div className="favorite-label favorite-calories">
                    <DirectionsRunIcon />
                    {`${prettyPrintNum(fav.calories)}`}
                  </div>
                  <div className="favorite-label favorite-dietLabels">
                    {fav.dietLabels.map((dietLabel, index) => {
                      return <h3 key={index}>{dietLabel}</h3>;
                    })}
                  </div>

                  <div title="remove">
                    <DeleteIcon
                      style={{ fontSize: 30 }}
                      className="remove-icon"
                      onClick={() => handleRemoveFromFav(fav)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeFavorite;
