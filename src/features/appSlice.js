import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeApi from "../common/api/recipeApi";
import { ID, KEY } from "../common/api/recipeApiKey";

const fetchData = (type) =>
  createAsyncThunk(`recipes/fetch${type}`, async () => {
    const response = await recipeApi.get(
      `?type=public&mealType=${type}&app_id=${ID}&app_key=${KEY}`
    );
    return response.data;
  });

export const fetchBreakfast = fetchData("Breakfast");
export const fetchLunch = fetchData("Lunch");
export const fetchDinner = fetchData("Dinner");
export const fetchSnack = fetchData("Snack");
export const fetchTeatime = fetchData("Teatime");

const initialState = {
  breakfast: {},
  lunch: {},
  dinner: {},
  snack: {},
  teatime: {},
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBreakfast.pending]: () => {
      console.log("Pending");
    },
    [fetchBreakfast.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfull");
      return { ...state, breakfast: payload };
    },
    [fetchBreakfast.rejected]: () => {
      console.log("Rejected");
    },
    [fetchLunch.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfull");
      return { ...state, lunch: payload };
    },
    [fetchDinner.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfull");
      return { ...state, dinner: payload };
    },
    [fetchSnack.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfull");
      return { ...state, snack: payload };
    },
    [fetchTeatime.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfull");
      return { ...state, teatime: payload };
    },
  },
});

export const getBreakfast = (state) => state.recipes.breakfast;
export default recipeSlice.reducer;
