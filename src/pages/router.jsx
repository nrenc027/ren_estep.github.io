import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./about";
import Home from "./home";
import ContactPage from "./contact";
import ResumePage from "./resume";
import Layout from 'components/Layout';
import "./styles.scss";

const RouterWrap =({ children }) => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
export default  RouterWrap;