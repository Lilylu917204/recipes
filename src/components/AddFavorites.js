import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { addItemToFavorite } from "../features/favoriteSlice";

const AddFavorites = ({ recipe }) => {
  const [addFavorites, setAddFavorites] = useState(false);
  const dispatch = useDispatch();

  const handleAddToFavorite = (recipe) => {
    setAddFavorites(!addFavorites);
    dispatch(addItemToFavorite(recipe));
  };

  return (
    <>
      <IconButton
        onClick={() => handleAddToFavorite(recipe)}
        aria-label="add to favorites"
      >
        <FavoriteIcon className={addFavorites ? "addFavorites--red" : ""} />
      </IconButton>
    </>
  );
};

export default AddFavorites;
