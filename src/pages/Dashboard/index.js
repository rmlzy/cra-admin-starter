import React from "react";
import { Row, Col, Card } from "antd";
import ReactEcharts from "echarts-for-react";
import "./style.less";

export default class Dashboard extends React.Component {
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
    const data = [];
    for (let i = 0; i <= 360; i++) {
      const t = (i / 180) * Math.PI;
      const r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    return {
      polar: {
        center: ["50%", "54%"],
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      angleAxis: {
        type: "value",
        startAngle: 0,
      },
      radiusAxis: {
        min: 0,
      },
      series: [
        {
          coordinateSystem: "polar",
          name: "line",
          type: "line",
          showSymbol: false,
          data: data,
        },
      ],
      animationDuration: 2000,
    };
  }

  render() {
    return (
      <div className="dashboard">
        <Row gutter={20} style={{ marginBottom: 20 }}>
          <Col span={8}>
            <Card bordered={false}>
              <h2>销售金额: ¥ 100,000</h2>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <h2>销售金额: ¥ 100,000</h2>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <h2>销售金额: ¥ 100,000</h2>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>

        <Row gutter={20}>
          <Col span={16}>
            <Card title="图标示例" bordered={false}>
              <ReactEcharts option={this.getEchartOption1()} />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="图标示例" bordered={false}>
              <ReactEcharts option={this.getEchartOption2()} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
