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
    <Route path="/map" exact render={() => <Redirect to="/map/amap" />} />
    <Route path="/map/amap" component={lazy("AMap")} />
    <Route path="/map/bmap" component={lazy("BMap")} />
    <Route path="/map/qmap" component={lazy("QMap")} />
  </Switch>
);
