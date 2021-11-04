import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeApi from "../common/api/recipeApi";

// a better way to fetch data

export const fetchRecipe = createAsyncThunk(
  "recipes/fetchMealType",
  async (recipe) => {
    const { data } = await recipeApi.get("", recipe);
    return data;
  }
);

// export const fetchRecipe = createAsyncThunk(
//   "recipes/fetchRecipe",
//   async (parameter = ["Breakfast", "chicken"]) => {
//     console.log(parameter);
//     const { data } = await recipeApi.get(
//       `?mealType=${parameter[0]}&q=${parameter[1]}`
//     );
//     return data;
//   }
// );

export const fetchRecipeDetail = createAsyncThunk(
  "recipes/fetchRecipeDetail",
  async (recipeDetail) => {
    const { data } = await recipeApi.get("", recipeDetail);
    return data;
  }
);

// export const fetchBreakfast = fetchMealType("Breakfast");
// export const fetchLunch = fetchMealType("Lunch");
// export const fetchDinner = fetchMealType("Dinner");
// export const fetchSnack = fetchMealType("Snack");
// export const fetchTeatime = fetchMealType("Teatime");

const initialState = {
  breakfast: {},
  lunch: {},
  dinner: {},
  snack: {},
  teatime: {},
  selectRecipeDetail: {},
  recipe: {},
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
    // [fetchBreakfast.pending]: () => {
    //   console.log("Pending");
    // },
    // [fetchBreakfast.fulfilled]: (state, { payload }) => {
    //   console.log("Breakfast Fetch Successfull");
    //   return { ...state, breakfast: payload };
    // },
    // [fetchBreakfast.rejected]: () => {
    //   console.log("Rejected");
    // },
    // [fetchLunch.fulfilled]: (state, { payload }) => {
    //   console.log("Lunch Fetch Successfull");
    //   return { ...state, lunch: payload };
    // },
    // [fetchDinner.fulfilled]: (state, { payload }) => {
    //   console.log("Dinner Fetch Successfull");
    //   return { ...state, dinner: payload };
    // },
    // [fetchSnack.fulfilled]: (state, { payload }) => {
    //   console.log("Snack Fetch Successfull");
    //   return { ...state, snack: payload };
    // },
    // [fetchTeatime.fulfilled]: (state, { payload }) => {
    //   console.log("Teatime Fetch Successfull");
    //   return { ...state, teatime: payload };
    // },

    [fetchRecipe.pending]: () => {
      console.log("Pending");
    },
    [fetchRecipe.rejected]: () => {
      console.log("Rejected");
    },
    [fetchRecipe.fulfilled]: (state, action) => {
      console.log("Fetch Successfull");
      return { ...state, recipe: action.payload };
    },
    [fetchRecipeDetail.fulfilled]: (state, action) => {
      console.log("Detail Fetch Successfull");
      return { ...state, selectRecipeDetail: action.paylaod };
    },
  },
});

export const { removeRecipeDetail, removeRecipe } = recipeSlice.actions;

export const getBreakfast = (state) => state.recipes.breakfast;
export const getLunch = (state) => state.recipes.lunch;
export const getDinner = (state) => state.recipes.dinner;
export const getSnack = (state) => state.recipes.snack;
export const getTeatime = (state) => state.recipes.teatime;
export const selectRecipeDetail = (state) => state.recipes.selectRecipeDetail;

export const getRecipe = (state) => state.recipes.recipe;

export default recipeSlice.reducer;
