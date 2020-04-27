import React from "react";
import { Badge, Modal, Menu, Dropdown, Avatar } from "antd";
import { Link } from "react-router-dom";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import logoPng from "../../images/logo.png";

export default class AppHeader extends React.Component {
  state = {
    contactModalVisible: false,
  };

  setContactModalVisible = (contactModalVisible) => {
    this.setState({ contactModalVisible });
  };

  render() {
    const { contactModalVisible } = this.state;
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/">个人中心</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">修改密码</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/">退出登录</Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="app-header">
        <Link className="brand" to="/">
          <img src={logoPng} alt="CRA 管理系统" />
          <span>CRA 管理系统</span>
        </Link>

        <ul className="nav">
          <li className="nav-item">
            <Link to="/list/table">用户管理</Link>
          </li>
          <li className="nav-item">
            <Link to="/charts/line-chart">销售统计</Link>
          </li>
          <li className="nav-item">
            <Link to="/map/amap">区域分析</Link>
          </li>
          <li className="nav-item">
            <Link to="/editor/quill">新闻发布</Link>
          </li>
        </ul>

        <ul className="nav tools">
          <li className="nav-icon">
            <Badge dot count={100}>
              <BellOutlined />
            </Badge>
          </li>
          <li className="nav-icon">
            <a href="javascript:;" onClick={() => this.setContactModalVisible(true)}>
              联系
            </a>
          </li>
        </ul>

        <Dropdown overlay={menu} placement="bottomRight">
          <div className="user">
            <Avatar icon={<UserOutlined />} />
            <span style={{ marginLeft: 5 }}>管理员</span>
          </div>
        </Dropdown>

        <Modal
          title="关于CRA Admin"
          visible={contactModalVisible}
          okText="点赞"
          cancelText="取消"
          maskClosable
          onOk={() => {
            window.open("https://github.com/fs-coder/cra-admin-starter");
          }}
          onCancel={() => this.setContactModalVisible(false)}
        >
          <p>CRA Admin 是一个基于 CRA 的中后台系统模板</p>
          <p>
            特性:
            <ul>
              <li>基于 create-react-app 创建, 代码十分精简</li>
              <li>集成了很多常用的功能</li>
              <li>
                源代码托管在
                <a href="https://github.com/fs-coder/cra-admin-starter" target="_blank">
                  Github
                </a>
              </li>
            </ul>
          </p>
          <p>MIT, 你可以继续定制自己的项目</p>
        </Modal>
      </div>
    );
  }
}
