import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home/Home";
import RecipeDetail from "./components/RecipeDetail/RecipeDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MealType from "./components/MealType/MealType";
import Login from "./components/Login/Login";
import RecipeFavorite from "./components/RecipeFavorite";
import ScrollTopArrow from "./components/ScrollTopArrow";
import { useSelector, useDispatch } from "react-redux";

import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./common/firebase/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photoURL: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router basename="/recipe">
        <ToastContainer />
        <Header />
        <ScrollTopArrow />
        {/* {window.location.pathname !== "/recipe/login" && <Header />} */}
        <div className="container">
          <Switch>
            <Route path="/login" component={Login}>
              {user ? <Redirect to="/" /> : undefined}
            </Route>
            <Route path="/favorite" component={RecipeFavorite} />
            <Route path="/:mealType/:recipeId" component={RecipeDetail} />
            <Route path="/:mealType" component={MealType} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="page-not-found" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
