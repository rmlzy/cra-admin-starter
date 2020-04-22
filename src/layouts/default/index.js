import React from "react";
import classnames from "classnames";
import AppHeader from "./AppHeader";
import AppAside from "./AppAside";
import AppBody from "./AppBody";
import AppFooter from "./AppFooter";
import "./style.less";

export default class DefaultLayout extends React.Component {
  state = {
    asideCollapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      asideCollapsed: !this.state.asideCollapsed,
    });
  };

  render() {
    const { asideCollapsed } = this.state;
    const { children } = this.props;
    const cls = classnames({
      "default-layout": true,
      "aside-collapsed": asideCollapsed,
    });
    return (
      <div className={cls}>
        <AppHeader />
        <AppAside collapsed={asideCollapsed} onToggleCollapsed={this.toggleCollapsed} />
        <AppBody>{children}</AppBody>
        <AppFooter />
      </div>
    );
  }
}
