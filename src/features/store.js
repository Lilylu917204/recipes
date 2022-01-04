import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./appSlice";
import userReducer from "./userSlice";
import favoriteReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    user: userReducer,
    favorite: favoriteReducer,
  },
});
