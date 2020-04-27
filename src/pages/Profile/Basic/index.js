import React from "react";
import { Row, Col, Card, Divider, Tag, Table } from "antd";

export default class BasicProfilePage extends React.Component {
  state = {
    tableData: [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "4",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "5",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "6",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "7",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
      {
        key: "8",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"],
      },
    ],
  };
  render() {
    const { tableData } = this.state;
    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        render: (text) => <a href="#demo">{text}</a>,
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "地址",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "标签",
        key: "tags",
        dataIndex: "tags",
        render: (tags) => (
          <span>
            {(tags || []).map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "loser") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
    ];
    return (
      <Card>
        <div className="desc">
          <div className="desc__title">退款申请</div>
          <div className="desc__content">
            <div className="desc__row">
              <Row>
                <Col span={8}>
                  <span className="desc__label">取货单号：</span>
                  <div className="desc__control">1000000000</div>
                </Col>
                <Col span={8}>
                  <span className="desc__label">状态：</span>
                  <div className="desc__control">已取货</div>
                </Col>
                <Col span={8}>
                  <span className="desc__label">销售单号：</span>
                  <div className="desc__control">1234123421</div>
                </Col>
              </Row>
            </div>

            <div className="desc__row">
              <Row>
                <Col span={8}>
                  <span className="desc__label">子订单：</span>
                  <div className="desc__control">3214321432</div>
                </Col>
              </Row>
            </div>

            <Divider />

            <div className="desc__row">
              <Row>
                <Col span={8}>
                  <span className="desc__label">用户姓名：</span>
                  <div className="desc__control">Jason Liu</div>
                </Col>
                <Col span={8}>
                  <span className="desc__label">联系电话：</span>
                  <div className="desc__control">18100000000</div>
                </Col>
                <Col span={8}>
                  <span className="desc__label">常用快递：</span>
                  <div className="desc__control">菜鸟仓储</div>
                </Col>
              </Row>
            </div>

            <div className="desc__row">
              <Row>
                <Col span={8}>
                  <span className="desc__label">取货地址：</span>
                  <div className="desc__control">浙江省杭州市西湖区万塘路18号</div>
                </Col>
                <Col span={8}>
                  <span className="desc__label">备注：</span>
                  <div className="desc__control">无</div>
                </Col>
              </Row>
            </div>

            <Divider />
          </div>

          <div className="desc__title">退货商品</div>
          <div className="desc__content">
            <Table columns={columns} dataSource={tableData} />
          </div>
        </div>
      </Card>
    );
  }
}
