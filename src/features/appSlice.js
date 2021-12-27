import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recipeApi from "../common/api/recipeApi";
import { recipeDetailApi } from "../common/api/recipeApi";

// a better way to fetch data

export const fetchRecipe = createAsyncThunk(
  "recipes/fetchMealType",
  async (recipe) => {
    const { data } = await recipeApi.get("/search", recipe);
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
    [fetchRecipeDetail.pending]: () => {
      console.log("Pending");
    },
    [fetchRecipeDetail.rejected]: () => {
      console.log("Rejected");
    },
    [fetchRecipeDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successful");
      return { ...state, selectRecipeDetail: payload };
    },
  },
});

export const { removeRecipeDetail, removeRecipe } = recipeSlice.actions;

export const selectRecipeDetail = (state) => state.recipes.selectRecipeDetail;

export const getRecipe = (state) => state.recipes.recipe;

export default recipeSlice.reducer;
