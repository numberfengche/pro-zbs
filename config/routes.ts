export default [
  {
    path: "/user",
    layout: false,
    routes: [
      {
        path: "/user",
        routes: [
          { name: "login", path: "/user/login", component: "./User/Login" },
        ],
      },
      { component: "./404" },
    ],
  },
  {
    path: "/home",
    name: "控制中心",
    icon: "icon-kongzhizhongxin1",
    component: "./Center/Center",
  },
  {
    path: "/machine",
    name: "机器管理",
    icon: "icon-jiqiren2",
    component: "./Machine/Machine",
  },
  // component: './Rules/Rule'
  {
    path: "/rules",
    name: "私聊导购",
    icon: "icon-siliao",
    routes: [
      {
        name: "导购配置",
        icon: "icon-siliao",
        path: "/rules/configuration",
        component: "./Rules/Rule",
      },
      // {
      //   name: "引流盲盒",
      //   path: "/rules/blind",
      //   icon: "icon-guizeguanli",
      //   component: "./Blind/Blind",
      // },
      {
        name: "营销红包",
        path: "/rules/send",
        icon: "icon-jiqiren_o",
        component: "./Send/Send",
      },
      {
        name: "顾客明细",
        path: "/rules/customer",
        component: "./Customer/Customer",
      },
      { component: "./404" },
    ],
  },

  {
    path: "/group",
    name: "群聊导购",
    icon: "icon-qunliao1",
    routes: [
      {
        name: "导购配置",
        path: "/group/groupconfig",
        component: "./Group/Group",
      },
      {
        name: "代理配置",
        path: "/group/proxy",
        component: "./Proxy/Proxy",
      },
      { component: "./404" },
    ],
  },

  {
    path: "/order",
    name: "订单明细",
    icon: "icon-guizeguanli1",
    component: "./Order/Order",
  },
  {
    path: "/message",
    name: "消息管理",
    icon: "icon-faxiaoxi1",
    component: "./Message/Message",
  },
  // {
  //   path: "screen",
  //   name: "运营大屏",
  //   icon: "icon-daping",
  //   component: "./Screen/Screen",
  // },
  // {
  //   path: "/blind",
  //   name: "活动配置",
  //   icon: "icon-guizeguanli",
  //   component: "./Blind/Blind",
  // },
  // {
  //   path: "/send",
  //   name: "消息发送",
  //   icon: "icon-jiqiren_o",
  //   component: "./Send/Send",
  // },
  { path: "/", redirect: "/user/login" },
  { component: "./404" },
];
