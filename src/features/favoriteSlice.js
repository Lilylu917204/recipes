import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteItems: [],
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
      }
    },
    removeFavorite: (state, action) => {
      //   const itemFilter = state.favoriteItems.filter(
      //     (item) => item.uri !== action.payload.uri
      //   );
      //   state.favoriteItems = itemFilter;
    },
  },
});

export const { addItemToFavorite, removeFavorite } = favoriteSlice.actions;

export const getFavoriteItems = (state) => state.favorite.favoriteItems;

export default favoriteSlice.reducer;
