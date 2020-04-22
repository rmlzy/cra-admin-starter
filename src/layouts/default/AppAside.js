import React from "react";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import { defaultRoutes } from "../../routes";

const { SubMenu } = Menu;

class AppAside extends React.Component {
  state = {
    selectedKeys: [],
    openKeys: [],
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    const selectedKeys = [pathname];
    const links = pathname.split("/");
    const openKeys = links.length > 1 ? [`/${links[1]}`] : [];
    this.setState({ selectedKeys, openKeys });
  }

  toggleCollapsed = () => {
    this.props.onToggleCollapsed();
  };

  onOpenChange = (openKeys) => {
    this.setState({ openKeys });
  };

  onSelect = ({ selectedKeys }) => {
    this.setState({ selectedKeys });
  };

  render() {
    const { collapsed } = this.props;
    const { openKeys, selectedKeys } = this.state;
    return (
      <div className="app-aside">
        <div className="app-aside-list">
          <Menu
            theme="dark"
            mode="inline"
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            inlineCollapsed={collapsed}
            onOpenChange={this.onOpenChange}
            onSelect={this.onSelect}
          >
            {defaultRoutes.map((level1, level1Index) => {
              if (!level1.children) {
                return (
                  <Menu.Item key={level1.link}>
                    <Link to={level1.link}>
                      {level1.icon}
                      <span>{level1.title}</span>
                    </Link>
                  </Menu.Item>
                );
              }

              const level1Title = (
                <span>
                  {level1.icon}
                  <span>{level1.title}</span>
                </span>
              );
              return (
                <SubMenu key={level1.link} title={level1Title}>
                  {level1.children.map((level2, level2Index) => {
                    if (!level2.children) {
                      return (
                        <Menu.Item key={level2.link}>
                          <Link to={level2.link}>
                            <span>{level2.title}</span>
                          </Link>
                        </Menu.Item>
                      );
                    }
                    return (
                      <SubMenu key={level2.link} title={level2.title}>
                        {level2.children.map((level3, level3Index) => (
                          <Menu.Item key={level3.link}>
                            <Link to={level3.link}>{level3.title}</Link>
                          </Menu.Item>
                        ))}
                      </SubMenu>
                    );
                  })}
                </SubMenu>
              );
            })}
          </Menu>
        </div>

        <div className="app-aside-collapsed">
          <div className="collapsed-icon" onClick={this.toggleCollapsed}>
            {collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AppAside);
