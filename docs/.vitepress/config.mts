import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "A Blog Site",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "前端", link: "/javascript/base/prototype" },
    ],

    sidebar: [
      {
        text: "js基础知识",
        collapsed: false,
        items: [
          {
            text: "原型链",
            link: "javascript/base/prototype",
          },
          {
            text: "继承",
            link: "javascript/base/prototype",
          },
        ],
      },
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
      level: "deep",
    },
    search: {
      provider: "algolia",
      options: {
        appId: "5T1AAMLB5D",
        apiKey: "e2a623206ff6b0671aaaf5e514c3b286",
        indexName: "dev_blog",
      },
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/malinlin809/blog" },
    ],
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,
});
