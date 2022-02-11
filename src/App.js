import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MealType from "./components/MealType/MealType";

import RecipeFavorite from "./components/RecipeFavorite";
import ScrollTopArrow from "./components/ScrollTopArrow";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import RecipeListing from "./components/RecipeListing/RecipeListing";
import RecipeCard from "./components/RecipeCard/RecipeCard";

function App() {
  return (
    <div className="app">
      <Router>
        <ToastContainer />
        <Header />
        <ScrollTopArrow />
        <div className="container">
          <Routes>
            <Route path="/recipe/favorite" element={<RecipeFavorite />} />
            <Route
              path="/recipe/:mealType/:recipeId"
              element={<RecipeDetail />}
            />
            <Route path="/recipe/:mealType" element={<MealType />} />
            {/* <Route path="/recipe/:page" element={<RecipeListing />} /> */}
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="/recipe" exact element={<Home />} />
            {/* <Route
              path="*"
              element={<Navigate replace to="/page-not-found" />}
            /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
