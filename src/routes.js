import React from "react";
import {
  DashboardOutlined,
  EditOutlined,
  HourglassOutlined,
  PullRequestOutlined,
  PictureOutlined,
  ControlOutlined,
  CrownOutlined,
  GoldOutlined,
  SkinOutlined,
} from "@ant-design/icons";

export const defaultRoutes = [
  {
    title: "控制台",
    icon: <DashboardOutlined />,
    link: "/",
    exact: true,
    component: "Dashboard",
  },
  {
    title: "UI控件",
    icon: <SkinOutlined />,
    link: "/ui",
    component: "Ui",
    children: [
      {
        title: "Button",
        link: "/ui/button",
      },
      {
        title: "Icon",
        link: "/ui/icon",
      },
    ],
  },
  {
    title: "表单页",
    icon: <EditOutlined />,
    link: "/form",
    component: "Form",
    children: [
      {
        title: "基础表单",
        link: "/form/basic-form",
      },
      {
        title: "分布表单",
        link: "/form/step-form",
      },
      {
        title: "复杂表单",
        link: "/form/advanced-form",
      },
    ],
  },
];

export const blankRoutes = [
  {
    title: "登录",
    link: "/login",
    component: "Login",
  },
];
