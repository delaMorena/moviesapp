// import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoviesDetails from "./pages/MoviesDetails";
import LandingPage from "./pages/LandingPage";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/movies/:movieId">
            <MoviesDetails/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
