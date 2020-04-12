/**
 * 系统配置
 *
 */

const env = process.env.NODE_ENV;

const Setting = {
  // 网页标题的后缀
  titleSuffix: "Tenant Site",
  // 路由模式，可选值为 history 或 hash
  routerMode: "history",
  // 应用的基路径
  routerBase: "/",

  // Cookies 默认保存时间，单位：天
  cookiesExpires: 1,

  // 租户策略
  // 0:login 登录时指定
  // 1:Host 通过Host获取
  tenantMode: 0,

  // 接口请求地址
  // host 方式形如 http://{tenant}.localhost/
  // route方式形如 http://localhost/{tenant}/
  apiBaseURL:
    env === "development"
      ? "http://${tenant}.localhost:5188"
      : "http://${tenant}.localhost:5188",

  layout: {
    // tab 类型 "" | border-card
    tabType: "",
    // tab位置 top | bottom
    tabPosition: "top",
    // 是否显示全屏按钮
    showFullscreen: true,
    // 是否显示通知
    showNotice: true,
    // 是否显示多语言
    showI18n: true,
    // 退出登录时，是否二次确认
    logoutConfirm: true
  }
};

export default Setting;