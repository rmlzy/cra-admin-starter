import React from "react";
import "./style.less";

export default class BlankLayout extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="blank-layout">{children}</div>;
  }
}
