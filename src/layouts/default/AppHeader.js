import React from "react";
import { Badge, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import logoPng from "../../images/logo.png";

export default class AppHeader extends React.Component {
  render() {
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
          <img src={logoPng} alt="舆情监控系统" />
          <span>舆情监控系统</span>
        </Link>

        <ul className="nav">
          <li className="nav-item">
            <Link to="/">实时舆情</Link>
          </li>
          <li className="nav-item">
            <Link to="/">舆情分析</Link>
          </li>
          <li className="nav-item">
            <Link to="/">舆情报告</Link>
          </li>
          <li className="nav-item">
            <Link to="/">设置</Link>
          </li>
        </ul>

        <ul className="nav tools">
          <li className="nav-icon">
            <Badge dot count={100}>
              <BellOutlined />
            </Badge>
          </li>
          <li className="nav-icon">
            <Link to="/">联系</Link>
          </li>
          <li className="nav-icon">
            <Link to="/">帮助</Link>
          </li>
          <li className="nav-icon">
            <Link to="/">购买</Link>
          </li>
        </ul>

        <div className="user">
          <Dropdown overlay={menu} placement="bottomRight">
            <UserOutlined />
          </Dropdown>
        </div>
      </div>
    );
  }
}
