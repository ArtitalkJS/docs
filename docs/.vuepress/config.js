module.exports = {
  theme: 'vuepress-theme-yilia-plus',
  title: 'Artitalk.js',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `https://cdn.jsdelivr.net/gh/drew233/cdn/atico.png` }],
    ['script', { data_ad_client: "ca-pub-9420537843748923", async: true, src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }],
    ['script', { src: "https://unpkg.com/artitalk" }],
  ],
  output: {
    globalObject: 'this'
  },
  description: '基于 LeanCloud 实现的可实时发布说说/微语的 js',
  themeConfig: {
    sidebarDepth: 2,
    collapsable: true,
    yilia_plus: {
      github: false,
      footer: {
        // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        since: 2020,
        // 网站作者(关闭请设置为 false)
        author: 'Powered by <a href="https://github.com/ArtitalkJS/Artitalk" target="_blank">Artitalk</a>',
        // 访问量统计功能(不蒜子)
        busuanzi: {
          // 是否启用(关闭请设置为 false)
          enable: true
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },                      // 根路径
      { text: '使用文档', link: '/doc/' },
      { text: '配置项', link: '/settings/' },
      { text: '更新日志', link: '/release/' },
      { text: '项目地址', link: 'https://github.com/ArtitalkJS/Artitalk' },
      { text: '示例页面', link: '/demo/' }, // 外部链接
      { text: 'FAQ', link: '/faq/' },
      { text: '成功案例', link: '/links/' },
      { text: '联系 or 支持', link: '/contact/' },
      // 下拉列表显示分组
    ],
    logo: 'https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png',
  },
  markdown: {
    plugins: ['task-lists']
  }
}
