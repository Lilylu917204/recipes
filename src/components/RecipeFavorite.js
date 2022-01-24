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
    <div className="recipeFavorite_container">
      <h2>My Saved Recipes</h2>
      {favorite.length === 0 ? (
        <div className="recipe-empty">
          <p>You have not saved any recipes recently</p>
          <div className="start-searching-recipes">
            <Link to="/">
              <span>Search all Recipes</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="recipe-title">Recipe</h3>
            <h3 className="recipe-calories">Calories</h3>
            <h3 className="recipe-dietLabel">Diet Labels</h3>
          </div>
          <div className="recipe-items">
            {favorite?.map((fav) => {
              return (
                <div key={fav.uri} className="recipe-item">
                  <div className="recipe-label">
                    <img src={fav.image} alt={fav.label} width="200px" />
                    <div>
                      <h3>{fav.label}</h3>
                    </div>
                  </div>
                  <div className="recipe-calories">
                    <DirectionsRunIcon />
                    {`${prettyPrintNum(fav.calories)}`}
                  </div>
                  <div className="recipe-dietLabels">
                    {fav.dietLabels.map((dietLabel, index) => {
                      return <h4 key={index}>{dietLabel}</h4>;
                    })}
                  </div>

                  <div title="Remove">
                    <DeleteIcon
                      style={{ fontSize: 30 }}
                      className="recipe-remove"
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
