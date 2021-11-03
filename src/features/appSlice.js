import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeApi from "../common/api/recipeApi";

export const fetchData = createAsyncThunk("recipes/fetchData", async (term) => {
  const { data } = await recipeApi.get(`?q=${term}`);
  return data;
});

export const fetchMealType = createAsyncThunk(
  "recipes/fetchMealType",
  async (parameter = ["Breakfast", "chicken"]) => {
    console.log(parameter);
    const { data } = await recipeApi.get(
      `?mealType=${parameter[0]}&q=${parameter[1]}`
    );
    return data;
  }
);

// export const fetchMealType = createAsyncThunk(
//   "recipes/fetchMealType",
//   async (test) => {
//     const { data } = await recipeApi.get("", test);
//     return data;
//   }
// );

// const fetchMealType = (type) =>
//   createAsyncThunk(`recipes/fetch${type}`, async () => {
//     const { data } = await recipeApi.get(`?mealType=${type}`);
//     console.log(data);
//     return data;
//   });

export const fetchRecipeDetail = createAsyncThunk(
  "recipes/fetchRecipeDetail",
  async (recipeUri, mealType) => {
    const { data } = await recipeApi.get(`/${recipeUri}?mealType=${mealType}`);
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
  data: {},
  type: {},
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    removeRecipeDetail: (state) => {
      state.selectRecipeDetail = {};
    },
    removeRecipe: (state) => {
      state.type = {};
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
    [fetchRecipeDetail.fulfilled]: (state, { payload }) => {
      console.log("Detail Fetch Successfull");
      return { ...state, selectRecipeDetail: payload };
    },
    [fetchMealType.pending]: (state) => {
      console.log("Pending");
    },

    [fetchData.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfull");
      return { ...state, data: payload };
    },
    [fetchMealType.fulfilled]: (state, { payload }) => {
      console.log("Fetch Successfull");
      return { ...state, type: payload };
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

export const getData = (state) => state.recipes.data;
export const getMealType = (state) => state.recipes.type;

export default recipeSlice.reducer;
