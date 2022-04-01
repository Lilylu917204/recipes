import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcon } from "common/materialUI";
import {
  addItemToFavorite,
  removeFromFavorite,
  getFavoriteItems,
} from "features/favoriteSlice";

const AddFavorites = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteList = useSelector(getFavoriteItems);

  useEffect(() => {
    if (favoriteList.map((fav) => fav.uri).includes(recipe.uri)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [isFavorite, favoriteList, recipe.uri]);

  const dispatch = useDispatch();

  const handleAddToFavorite = (recipe) => {
    setIsFavorite(true);
    dispatch(addItemToFavorite(recipe));
  };

  const removeFavorite = (recipe) => {
    setIsFavorite(false);
    dispatch(removeFromFavorite(recipe));
  };

  return (
    <>
      <MaterialIcon.IconButton
        aria-label="add to favorites"
        onClick={() => {
          isFavorite ? removeFavorite(recipe) : handleAddToFavorite(recipe);
        }}
      >
        <MaterialIcon.FavoriteIcon
          className="recipeCard-icon"
          sx={{ color: `${isFavorite ? "red" : ""}` }}
        />
      </MaterialIcon.IconButton>
    </>
  );
};

export default AddFavorites;
