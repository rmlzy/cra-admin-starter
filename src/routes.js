import React from "react";
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

export const defaultRoutes = [
  {
    title: "控制台",
    icon: <DashboardOutlined />,
    link: "/",
    exact: true,
    component: "Dashboard",
  },
  {
    title: "趋势分析",
    icon: <PercentageOutlined />,
    link: "/trending-analysis",
    component: "TrendingAnalysis",
  },
  {
    title: "搜索词分析",
    icon: <HourglassOutlined />,
    link: "/search-analysis",
    component: "SearchAnalysis",
  },
  {
    title: "观点分析",
    icon: <PullRequestOutlined />,
    link: "/point-analysis",
    component: "PointAnalysis",
  },
  {
    title: "媒体分布",
    icon: <PictureOutlined />,
    link: "/media-analysis",
    component: "MediaAnalysis",
  },
  {
    title: "传播分析",
    icon: <ControlOutlined />,
    link: "/spread-analysis",
    component: "SpreadAnalysis",
  },
  {
    title: "受众分析",
    icon: <CrownOutlined />,
    link: "/audience-analysis",
    component: "AudienceAnalysis",
  },
  {
    title: "事件分析",
    icon: <GoldOutlined />,
    link: "/event-analysis",
    component: "EventAnalysis",
  },
];

export const blankRoutes = [
  {
    title: "登录",
    link: "/login",
    component: "Login",
  },
];
