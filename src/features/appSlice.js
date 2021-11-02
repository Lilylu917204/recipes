import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeApi from "../common/api/recipeApi";
import { ID, KEY } from "../common/api/recipeApiKey";

const fetchMealType = (type) =>
  createAsyncThunk(`recipes/fetch${type}`, async () => {
    const { data } = await recipeApi.get(
      `?type=public&mealType=${type}&app_id=${ID}&app_key=${KEY}`
    );
    return data;
  });

export const fetchRecipeDetail = (recipeUri, mealType) =>
  createAsyncThunk("recipes/fetchRecipeDetail", async () => {
    const { data } = await recipeApi.get(
      `/${recipeUri}?&app_id=${ID}&app_key=${KEY}&type=public&mealType=${mealType}`
    );
    return data;
  });

export const fetchBreakfast = fetchMealType("Breakfast");
export const fetchLunch = fetchMealType("Lunch");
export const fetchDinner = fetchMealType("Dinner");
export const fetchSnack = fetchMealType("Snack");
export const fetchTeatime = fetchMealType("Teatime");

const initialState = {
  breakfast: {},
  lunch: {},
  dinner: {},
  snack: {},
  teatime: {},
  selectRecipeDetail: {},
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    removeRecipeDetail: (state) => {
      state.selectRecipeDetail = {};
    },
  },
  extraReducers: {
    [fetchBreakfast.pending]: () => {
      console.log("Pending");
    },
    [fetchBreakfast.fulfilled]: (state, { payload }) => {
      console.log("Breakfast Fetch Successfull");
      return { ...state, breakfast: payload };
    },
    [fetchBreakfast.rejected]: () => {
      console.log("Rejected");
    },
    [fetchLunch.fulfilled]: (state, { payload }) => {
      console.log("Lunch Fetch Successfull");
      return { ...state, lunch: payload };
    },
    [fetchDinner.fulfilled]: (state, { payload }) => {
      console.log("Dinner Fetch Successfull");
      return { ...state, dinner: payload };
    },
    [fetchSnack.fulfilled]: (state, { payload }) => {
      console.log("Snack Fetch Successfull");
      return { ...state, snack: payload };
    },
    [fetchTeatime.fulfilled]: (state, { payload }) => {
      console.log("Teatime Fetch Successfull");
      return { ...state, teatime: payload };
    },
    [fetchRecipeDetail.fulfilled]: (state, { payload }) => {
      console.log("Detail Fetch Successfull");
      return { ...state, selectRecipeDetail: payload };
    },
  },
});

export const { removeRecipeDetail } = recipeSlice.actions;

export const getBreakfast = (state) => state.recipes.breakfast;
export const getLunch = (state) => state.recipes.lunch;
export const getDinner = (state) => state.recipes.dinner;
export const getSnack = (state) => state.recipes.snack;
export const getTeatime = (state) => state.recipes.teatime;
export const selectRecipeDetail = (state) => state.recipes.selectRecipeDetail;

export default recipeSlice.reducer;
