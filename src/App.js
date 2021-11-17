import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MealType from "./components/MealType/MealType";
import Login from "./components/Login.js/Login";

function App() {
  return (
    <div className="app">
      <Router basename="/recipe">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/logIn" component={Login} />
            <Route path="/:mealType/:recipeId" component={RecipeDetail} />
            <Route path="/:mealType" component={MealType} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
