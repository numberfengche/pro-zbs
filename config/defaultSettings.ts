import { Settings as LayoutSettings } from "@ant-design/pro-layout";

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: "dark",
  // 拂晓蓝
  headerTheme: "light",
  primaryColor: "#1890ff",
  // layout: 'mix',
  contentWidth: "Fluid",
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: "折博士",
  pwa: false,
  logo: "/logo.svg",
  iconfontUrl: "//at.alicdn.com/t/c/font_3378082_hcd227p6pga.js",
  menu: {
    defaultOpenAll: true,
    autoClose: false,
    locale: false,
  },
};

export default Settings;
