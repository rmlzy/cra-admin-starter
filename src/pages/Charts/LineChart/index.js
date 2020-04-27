import React from "react";
import { Row, Col, Card, Alert } from "antd";
import ReactEcharts from "echarts-for-react";

export default class LineChartPage extends React.Component {
  getEchartOption1() {
    return {
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "邮件营销",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "联盟广告",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "视频广告",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "直接访问",
          type: "line",
          stack: "总量",
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: "搜索引擎",
          type: "line",
          stack: "总量",
          label: {
            normal: {
              show: true,
              position: "top",
            },
          },
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };
  }

  getEchartOption2() {
    return {
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          areaStyle: {},
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Alert
          message={
            <div>
              更多示例请参考{" "}
              <a href="https://echarts.apache.org/examples/zh/index.html" rel="noopener noreferrer" target="_blank">
                Echarts官方Demo
              </a>
            </div>
          }
          type="info"
          showIcon
        />
        <br />
        <Row>
          <Col span={24}>
            <Card title="折线图示例1">
              <ReactEcharts option={this.getEchartOption1()} />
            </Card>
            <br />
            <Card title="折线图示例2">
              <ReactEcharts option={this.getEchartOption2()} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
