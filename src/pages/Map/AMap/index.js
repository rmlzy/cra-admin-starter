import React from "react";
import { Alert, Card } from "antd";
import { Map } from "react-amap";

export default class AMapPage extends React.Component {
  render() {
    const AMAP_KEY = "9e7b9f938691f60715ddae07436cdacd";
    return (
      <div>
        <Alert
          message={
            <div>
              更多配置请参考
              <a href="https://github.com/ElemeFE/react-amap" rel="noopener noreferrer" target="_blank">
                react-amp
              </a>
              以及
              <a href="https://lbs.amap.com/api/javascript-api/summary" rel="noopener noreferrer" target="_blank">
                高德地图JSAPI
              </a>
            </div>
          }
          type="info"
          showIcon
        />
        <br />
        <Card title="高德地图">
          <div style={{ width: "100%", height: "500px" }}>
            <Map amapkey={AMAP_KEY} />
          </div>
        </Card>
      </div>
    );
  }
}
