import React from "react";
import { Row, Col, Card, Alert } from "antd";
import ReactEcharts from "echarts-for-react";

export default class BarChartPage extends React.Component {
  getEchartOption1 = () => {
    return {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: 10,
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "30",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" },
          ],
        },
      ],
    };
  };

  getEchartOption2 = () => {
    return {
      backgroundColor: "#2c343c",

      title: {
        text: "Customized Pie",
        left: "center",
        top: 20,
        textStyle: {
          color: "#ccc",
        },
      },

      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1],
        },
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 274, name: "联盟广告" },
            { value: 235, name: "视频广告" },
            { value: 400, name: "搜索引擎" },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          labelLine: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.3)",
            },
            smooth: 0.2,
            length: 10,
            length2: 20,
          },
          itemStyle: {
            color: "#c23531",
            shadowBlur: 200,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },

          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function (idx) {
            return Math.random() * 200;
          },
        },
      ],
    };
  };

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
            <Card title="饼状图图示例1">
              <ReactEcharts option={this.getEchartOption1()} />
            </Card>
            <br />
            <Card title="饼状图图示例2">
              <ReactEcharts option={this.getEchartOption2()} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
