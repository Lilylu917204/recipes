import axios from "axios";
import { KEY, ID } from "../api/recipeApiKey";

export default axios.create({
  baseURL: "https://api.edamam.com",
  params: {
    app_id: ID,
    app_key: KEY,
  },
});
