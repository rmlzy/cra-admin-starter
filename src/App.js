import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "./components/Loading";
import routes from "./routes";
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
        {routes.map((level1, level1Index) => {
          return (
            <RouteWithLayout
              layout={level1.layout}
              key={level1Index}
              exact={level1.exact}
              path={level1.link}
              component={lazy(level1.component)}
            />
          );
        })}
      </Switch>
    </HashRouter>
  );
}

export default App;
