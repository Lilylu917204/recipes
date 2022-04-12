import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeApi from "common/api/recipeApi";

export const fetchRecipe = createAsyncThunk(
  "recipes/fetchMealType",
  async (recipe) => {
    const { data } = await recipeApi.get("/search", recipe);
    return data;
  }
);

export const fetchRecipeDetail = createAsyncThunk(
  "recipes/fetchRecipeDetail",
  async (recipeId) => {
    const { data } = await recipeApi.get("/search", recipeId);
    return data;
  }
);

const initialState = {
  selectRecipeDetail: {},
  recipe: {},
  loading: false,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    removeRecipe: (state) => {
      state.recipe = {};
    },
    removeRecipeDetail: (state) => {
      state.selectRecipeDetail = {};
    },
  },
  extraReducers: {
    [fetchRecipe.pending]: () => {
      return { loading: true };
    },
    [fetchRecipe.rejected]: () => {
      console.log("Rejected");
    },
    [fetchRecipe.fulfilled]: (state, action) => {
      return { ...state, recipe: action.payload, loading: false };
    },
    [fetchRecipeDetail.pending]: () => {
      return { loading: true };
    },
    [fetchRecipeDetail.rejected]: () => {
      console.log("Rejected");
    },
    [fetchRecipeDetail.fulfilled]: (state, action) => {
      return { ...state, selectRecipeDetail: action.payload, loading: false };
    },
  },
});

export const { removeRecipeDetail, removeRecipe } = recipeSlice.actions;

export const selectRecipeDetail = (state) => state.recipes.selectRecipeDetail;

export const getRecipe = (state) => state.recipes.recipe;

export const getLoading = (state) => state.recipes.loading;

export default recipeSlice.reducer;
