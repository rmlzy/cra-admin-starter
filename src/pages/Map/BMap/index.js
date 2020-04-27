import React from "react";
import { Alert, Card } from "antd";
import { Map } from "react-bmap";

export default class BMapPage extends React.Component {
  render() {
    return (
      <div>
        <Alert
          message={
            <div>
              更多配置请参考
              <a href="https://github.com/huiyan-fe/react-bmap" rel="noopener noreferrer" target="_blank">
                react-bmap
              </a>
              以及
              <a href="http://lbsyun.baidu.com/index.php?title=jspopularGL" rel="noopener noreferrer" target="_blank">
                百度地图JSAPI
              </a>
            </div>
          }
          type="info"
          showIcon
        />
        <br />
        <Card title="百度地图">
          <Map zoom="12" style={{ height: 500 }} center={{ lng: 116.402544, lat: 39.928216 }} />
        </Card>
      </div>
    );
  }
}
