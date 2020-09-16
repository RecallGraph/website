import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import 'typeface-roboto';
import 'typeface-roboto-slab';

import LandingPage from "./LandingPage/LandingPage";

let hist = createMemoryHistory();

export default () => (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );