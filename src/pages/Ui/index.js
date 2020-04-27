import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../../components/Loading";

const lazy = (Name) =>
  Loadable({
    loader: () => import(`./${Name}`),
    loading: Loading,
  });

export default ({ match }) => (
  <Switch>
    <Route path="/ui" exact render={() => <Redirect to="/ui/button" />} />
    <Route path="/ui/button" component={lazy("Button")} />
    <Route path="/ui/icon" component={lazy("Icon")} />
  </Switch>
);
