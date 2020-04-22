import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { DefaultLayout, BlankLayout } from "./layouts";
import Loading from "./components/Loading";
import { defaultRoutes, blankRoutes } from "./routes";
import "./global.less";

const lazy = (Name) =>
  Loadable({
    loader: () => import(`./pages/${Name}`),
    loading: Loading,
  });

const RouteWithLayout = ({ layout, component, ...rest }) => (
  <Route {...rest} render={(props) => React.createElement(layout, props, React.createElement(component, props))} />
);

function App() {
  return (
    <HashRouter>
      <Switch>
        {defaultRoutes.map((route, index) => {
          return (
            <RouteWithLayout
              layout={DefaultLayout}
              key={index}
              exact={route.exact}
              path={route.link}
              component={lazy(route.component)}
            />
          );
        })}
        {blankRoutes.map((route, index) => {
          return (
            <RouteWithLayout
              layout={BlankLayout}
              key={index}
              exact={route.exact}
              path={route.link}
              component={lazy(route.component)}
            />
          );
        })}
      </Switch>
    </HashRouter>
  );
}

export default App;
