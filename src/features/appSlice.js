import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeApi from "common/api/recipeApi";
import { recipeDetailApi } from "common/api/recipeApi";

export const fetchRecipe = createAsyncThunk(
  "recipes/fetchMealType",
  async (recipe) => {
    const { data } = await recipeApi.get("/search", recipe);
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
  async (recipeId) => {
    const { data } = await recipeDetailApi.get(
      `/search?app_id=b4c650bb&app_key=becf87251f5d2ddfc322260756949473&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_${recipeId}`
    );
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
      console.log("pending");
      return { loading: true };
    },
    [fetchRecipe.rejected]: () => {
      console.log("Rejected");
    },
    [fetchRecipe.fulfilled]: (state, action) => {
      console.log("success");
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
