module.exports = {
  base: "/",
  title: "Tech Blog",
  description: "About JavaScript, Architecture, System Design, and Cloud.",
  markdown: {
    lineNumbers: true,
  },
  permalink: "/:year/:month/:day/:slug",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    logo: "/logo.png",
    dateFormat: "YYYY-MM-DD",
    sitemap: {
      hostname: "https://blog.segersian.com",
    },
    smoothScroll: true,
    footer: {
      copyright: [
        {
          text: "Written with ❤️ by Segers Ian",
          link: "https://www.segersian.com",
        },
      ],
      contact: [
        {
          type: "github",
          link: "https://github.com/SegersIan",
        },
        {
          type: "web",
          link: "https://www.SegersIan.com",
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/segersian/",
        },
        {
          type: "mail",
          link: "mailto:ask@segersian.com",
        },
      ],
    },
    nav: [
      { text: "Posts", link: "/" },
      { text: "Tags", link: "/tag/" },
      {
        text: "Knowledge Base",
        link: "https://kb.segersian.com",
        target: "_blank",
        rel: "",
      },
      {
        text: "SegersIan.com",
        link: "https://www.segersian.com",
        target: "_blank",
        rel: "",
      },
    ],
  },

  plugins: [
    ["@vuepress/plugin-google-analytics", { ga: "UA-76745643-3" }],
    ["@vuepress/medium-zoom"],
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/",
          },
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tags"],
            path: "/tag/",
          },
        ],
      },
    ],
  ],
};
