import React from "react";
import ReactQMap from "react-qmap";
import { Alert, Card } from "antd";

export default class QMapPage extends React.Component {
  render() {
    const QMAP_KEY = "KTMBZ-YETRJ-HAYFE-FK3U2-N2HSF-K3F6W";
    return (
      <div>
        <Alert
          message={
            <div>
              更多配置请参考
              <a href="https://github.com/yezihaohao/react-qmap" rel="noopener noreferrer" target="_blank">
                react-qmap
              </a>
              以及
              <a
                href="https://lbs.qq.com/webApi/javascriptGL/glGuide/glOverview"
                rel="noopener noreferrer"
                target="_blank"
              >
                腾讯地图JSAPI
              </a>
            </div>
          }
          type="info"
          showIcon
        />
        <br />
        <Card title="腾讯地图">
          <ReactQMap center={{ latitude: 30.53786, longitude: 104.07265 }} style={{ height: 500 }} apiKey={QMAP_KEY} />
        </Card>
      </div>
    );
  }
}
