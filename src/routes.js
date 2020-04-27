import React from "react";
import {
  DashboardOutlined,
  EditOutlined,
  AreaChartOutlined,
  SkinOutlined,
  FormOutlined,
  GlobalOutlined,
  UnorderedListOutlined,
  FileDoneOutlined,
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
    title: "列表页",
    icon: <UnorderedListOutlined />,
    link: "/list",
    component: "List",
    children: [
      {
        title: "查询表格",
        link: "/list/table",
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
  {
    title: "详情页",
    icon: <FileDoneOutlined />,
    link: "/profile",
    component: "Profile",
    children: [
      {
        title: "基础详情",
        link: "/profile/basic",
      },
    ],
  },
  {
    title: "图表",
    icon: <AreaChartOutlined />,
    link: "/charts",
    component: "Charts",
    children: [
      {
        title: "折线图",
        link: "/charts/line-chart",
      },
      {
        title: "饼状图",
        link: "/charts/bar-chart",
      },
    ],
  },
  {
    title: "编辑器",
    icon: <FormOutlined />,
    link: "/editor",
    component: "Editor",
    children: [
      {
        title: "Quill富文本",
        link: "/editor/quill",
      },
    ],
  },
  {
    title: "地图",
    icon: <GlobalOutlined />,
    link: "/map",
    component: "Map",
    children: [
      {
        title: "高德地图",
        link: "/map/amap",
      },
      {
        title: "百度地图",
        link: "/map/bmap",
      },
      {
        title: "腾讯地图",
        link: "/map/qmap",
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
