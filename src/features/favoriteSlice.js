import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  favoriteItems: localStorage.getItem("favoriteItems")
    ? JSON.parse(localStorage.getItem("favoriteItems"))
    : [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addItemToFavorite: (state, action) => {
      const itemIndex = state.favoriteItems.findIndex(
        (item) => item.uri === action.payload.uri
      );

      if (itemIndex < 0) {
        state.favoriteItems.push(action.payload);
        toast.success(`${action.payload.label} added to favorite`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem(
        "favoriteItems",
        JSON.stringify(state.favoriteItems)
      );
    },

    removeFromFavorite: (state, action) => {
      const favoriteFilter = state.favoriteItems.filter(
        (item) => item.uri !== action.payload.uri
      );

      state.favoriteItems = favoriteFilter;
    },
  },
});

export const { addItemToFavorite, removeFromFavorite } = favoriteSlice.actions;

export const getFavoriteItems = (state) => state.favorite.favoriteItems;

export default favoriteSlice.reducer;
