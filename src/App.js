import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "components/Header/Navigation";
import Home from "components/Pages/Home/Home";
import MealType from "components/Pages/Home/MealType";
import RecipeDetail from "components/Pages/Detail/RecipeDetail";
import PageNotFound from "components/Pages/PNF/PageNotFound";
import RecipeFavorite from "components/Pages/Favorite/RecipeFavorite";
import Footer from "components/Footer/Footer";
import ScrollTop from "components/ScrollTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <Router>
        <ToastContainer />
        <Navigation />
        <ScrollTop />
        <div className="container">
          <Routes>
            <Route path="/recipe/favorite" element={<RecipeFavorite />} />
            <Route
              path="/recipe/recipeId/:recipeId"
              element={<RecipeDetail />}
            />
            <Route
              path="/recipe/:mealType/:recipeId"
              element={<RecipeDetail />}
            />
            <Route path="/recipe/:mealType" element={<MealType />} />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="/recipe" exact element={<Home />} />
            <Route
              path="*"
              element={<Navigate replace to="/page-not-found" />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
