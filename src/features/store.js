import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./appSlice";
import favoriteReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    favorite: favoriteReducer,
  },
});
