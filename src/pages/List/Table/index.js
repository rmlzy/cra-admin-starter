import React from "react";
import { Form, Input, Button, Card, Table, Tag, Divider } from "antd";
import { SearchOutlined, ClearOutlined } from "@ant-design/icons";

export default class TablePage extends React.Component {
  formRef = React.createRef();

  state = {
    loading: false,
    tableData: [],
  };

  componentDidMount() {
    this.queryTableData();
  }

  queryTableData = () => {
    const tableData = [
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
    ];
    this.setState({ loading: true });
    return new Promise((resolve) => {
      setTimeout(() => {
        this.setState({ tableData, loading: false });
      }, 3000);
    });
  };

  render() {
    const { tableData, loading } = this.state;
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
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <a href="#demo">查看</a>
            <Divider type="vertical" />
            <a href="#demo">编辑</a>
            <Divider type="vertical" />
            <a href="#demo">删除</a>
          </span>
        ),
      },
    ];
    return (
      <div>
        <Form ref={this.formRef} layout="inline">
          <Form.Item style={{ marginBottom: 16 }} name="field1">
            <Input placeholder="请输入订单号" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 16 }} name="field2">
            <Input placeholder="请输入下单人" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 16 }} name="field3">
            <Input placeholder="请输入下单人手机号" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 16 }} name="field4">
            <Input placeholder="请输入收货人" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 16 }} name="field5">
            <Input placeholder="请输入收货人手机号" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 16 }}>
            <Button style={{ marginRight: 16 }} type="primary" icon={<SearchOutlined />}>
              查询
            </Button>
            <Button style={{ marginRight: 16 }} icon={<ClearOutlined />}>
              重置
            </Button>
          </Form.Item>
        </Form>

        <Card
          title="用户列表"
          extra={
            <div>
              <a href="#demo">新增</a>
              <Divider type="vertical" />
              <a href="#demo" onClick={this.queryTableData}>
                刷新数据
              </a>
            </div>
          }
        >
          <Table loading={loading} columns={columns} dataSource={tableData} />
        </Card>
      </div>
    );
  }
}
