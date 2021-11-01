import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipe/:recipeURL" component={RecipeDetail} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
