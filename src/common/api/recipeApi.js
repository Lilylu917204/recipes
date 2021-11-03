import axios from "axios";
import { KEY, ID } from "../api/recipeApiKey";

export default axios.create({
  baseURL: "https://api.edamam.com/api/recipes/v2",
  params: {
    type: "public",
    app_id: ID,
    app_key: KEY,
  },
});
