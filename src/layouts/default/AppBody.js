import React from "react";
import { Breadcrumb } from "antd";
import { withRouter, Link } from "react-router-dom";
import { defaultRoutes } from "../../routes";

class AppBody extends React.Component {
  expandMenu = (menus) => {
    const result = [];
    menus.forEach((menu1) => {
      if (!menu1.children) {
        result.push([menu1]);
        return;
      }
      menu1.children.forEach((menu2) => {
        if (!menu2.children) {
          result.push([menu1, menu2]);
          return;
        }
        menu2.children.forEach((menu3) => {
          if (!menu3.children) {
            result.push([menu1, menu2, menu3]);
            return;
          }
          menu3.children.forEach((menu4) => {
            result.push([menu1, menu2, menu3, menu4]);
          });
        });
      });
    });
    return result;
  };

  render() {
    const { children } = this.props;
    const { pathname } = this.props.location;
    const expandedMenus = this.expandMenu(defaultRoutes);
    let currentBreads = [];
    expandedMenus.forEach((menu) => {
      if (menu.length) {
        const lastMenu = menu[menu.length - 1];
        if (lastMenu.link === pathname) {
          currentBreads = menu;
        }
      }
    });
    return (
      <div className="app-body">
        <div className="breadcrumb">
          <Breadcrumb>
            {currentBreads.map((menu, i) => (
              <Breadcrumb.Item key={i}>
                <Link to={menu.link}>{menu.title}</Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
        <div className="main">{children}</div>
      </div>
    );
  }
}

export default withRouter(AppBody);
