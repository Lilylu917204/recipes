import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "features/appSlice";
import favoriteReducer from "features/favoriteSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    favorite: favoriteReducer,
  },
});
