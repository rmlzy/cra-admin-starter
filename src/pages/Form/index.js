import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import loadable from "@loadable/component";
import { Loading } from "../../components";

const lazy = (Name) =>
  loadable(() => import(`./${Name}`), {
    fallback: Loading,
  });

export default ({ match }) => (
  <Switch>
    <Route path="/form" exact render={() => <Redirect to="/form/basic-form" />} />
    <Route path="/form/basic-form" component={lazy("BasicForm")} />
    <Route path="/form/step-form" component={lazy("StepForm")} />
    <Route path="/form/advanced-form" component={lazy("AdvancedForm")} />
  </Switch>
);
