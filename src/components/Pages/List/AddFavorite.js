import React, { useState } from "react";
import { MaterialIcon } from "../../../common/materialUI";
import { useDispatch } from "react-redux";
import { addItemToFavorite } from "../../../features/favoriteSlice";

const AddFavorites = ({ recipe }) => {
  const [addFavorites, setAddFavorites] = useState(false);
  const dispatch = useDispatch();

  const handleAddToFavorite = (recipe) => {
    setAddFavorites(!addFavorites);
    dispatch(addItemToFavorite(recipe));
  };

  return (
    <>
      <MaterialIcon.IconButton
        onClick={() => handleAddToFavorite(recipe)}
        aria-label="add to favorites"
      >
        <MaterialIcon.FavoriteIcon
          className={addFavorites ? "addFavorites--red" : ""}
          className="recipeCard-icon"
        />
      </MaterialIcon.IconButton>
    </>
  );
};

export default AddFavorites;
