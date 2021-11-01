import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./appSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
