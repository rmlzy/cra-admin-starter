import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

export default class Loading extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", width: "100%", height: "500px", alignItems: "center", justifyContent: "center" }}>
        <LoadingOutlined style={{ fontSize: 20 }} />
      </div>
    );
  }
}
