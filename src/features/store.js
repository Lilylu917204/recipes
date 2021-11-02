import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./appSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    user: userReducer,
  },
});
