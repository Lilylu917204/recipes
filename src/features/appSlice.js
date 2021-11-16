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

// fetch multiple data using axios.all

// export const fetchRecipe = createAsyncThunk("recipes/fetchRecipe", async () => {
//   const requestOne = recipeApi.get("?mealType=Breakfast");
//   const requestTwo = recipeApi.get("?mealType=Lunch");

//   axios.all([requestOne, requestTwo]).then(
//     axios.spread((...responses) => {
//       const responseOne = responses[0];
//       const responseTwo = responses[1];
//       // use/access the results

//       console.log(responseOne.data);
//       console.log(responseTwo.data);
//
//     })
//   );
// });

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

const initialState = {
  selectRecipeDetail: {},
  recipe: {},
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

export const selectRecipeDetail = (state) => state.recipes.selectRecipeDetail;

export const getRecipe = (state) => state.recipes.recipe;

export default recipeSlice.reducer;
