import React from "react";
import { DefaultLayout } from "./layouts";
import {
  DashboardOutlined,
  PercentageOutlined,
  HourglassOutlined,
  PullRequestOutlined,
  PictureOutlined,
  ControlOutlined,
  CrownOutlined,
  GoldOutlined,
} from "@ant-design/icons";

export default [
  {
    title: "控制台",
    icon: <DashboardOutlined />,
    link: "/",
    exact: true,
    layout: DefaultLayout,
    component: "Dashboard",
  },
  {
    title: "一级菜单",
    link: "/level1",
    layout: DefaultLayout,
    component: "Level1",
    children: [
      {
        title: "首页",
        link: "/level1/home",
      },
      {
        title: "二级菜单",
        link: "/level1/level2",
      },
    ],
  },
  {
    title: "趋势分析",
    icon: <PercentageOutlined />,
    link: "/trending-analysis",
    layout: DefaultLayout,
    component: "TrendingAnalysis",
  },
  {
    title: "搜索词分析",
    icon: <HourglassOutlined />,
    link: "/search-analysis",
    layout: DefaultLayout,
    component: "SearchAnalysis",
  },
  {
    title: "观点分析",
    icon: <PullRequestOutlined />,
    link: "/point-analysis",
    layout: DefaultLayout,
    component: "PointAnalysis",
  },
  {
    title: "媒体分布",
    icon: <PictureOutlined />,
    link: "/media-analysis",
    layout: DefaultLayout,
    component: "MediaAnalysis",
  },
  {
    title: "传播分析",
    icon: <ControlOutlined />,
    link: "/spread-analysis",
    layout: DefaultLayout,
    component: "SpreadAnalysis",
  },
  {
    title: "受众分析",
    icon: <CrownOutlined />,
    link: "/audience-analysis",
    layout: DefaultLayout,
    component: "AudienceAnalysis",
  },
  {
    title: "事件分析",
    icon: <GoldOutlined />,
    link: "/event-analysis",
    layout: DefaultLayout,
    component: "EventAnalysis",
  },
];
