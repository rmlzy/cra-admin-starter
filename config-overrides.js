const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require("customize-cra");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#20a8d8",
      "@menu-dark-bg": "#2f353a",
      "@menu-dark-arrow-color": "#fff",
      "@menu-dark-submenu-bg": "rgba(0, 0, 0, 0.2)",
      "@menu-collapsed-width": "50px",
    },
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin())
);
