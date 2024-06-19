export const getSiderBarList = (pathname: string) => {
  switch (pathname) {
    case "/javascript/":
      return [
        {
          text: "JS基础知识",
          items: [
            {
              text: "原型链",
              link: `${pathname}base/prototype`,
            },
          ],
        },
      ];
    case "/project/":
      return [
        {
          text: "vite项目搭建",
          link: `${pathname}/vite`,
        },
      ];
    default:
      return [
        {
          text: "面试知识学习",
          items: [{ text: "算法", link: `${pathname}knowadge/leetcode` }],
        },
      ];
  }
};
