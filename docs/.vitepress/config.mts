import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Tech Blog",
  description: "A personal technical blog",
  lastUpdated: true,

  base: '/tech-blog/', // 必须改成你的仓库名
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/2020-08-08' }
    ],

    sidebar: [
      {
        text: '2020',
        collapsed: false,
        items: [
          { text: '交叉编译docker镜像', link: '/2020-08-08' }
        ]
      },
      {
        text: '2019',
        collapsed: false,
        items: [
          { text: '【整理】HTTP相关版本对比', link: '/2019-11-09' },
          { text: '【整理】Jenkins自动部署maven工程', link: '/2019-09-12' },
          { text: '【整理】将javaWeb工程转成Maven工程', link: '/2019-09-11-5' },
          { text: '【整理】使用AOP打印接口参数', link: '/2019-09-11-4' },
          { text: '【整理】docker-compose安装操作', link: '/2019-09-11-3' },
          { text: '【整理】@Valid注解自动校验接口参数', link: '/2019-09-11-2' },
          { text: '【JS】页面显示服务器时间', link: '/2019-09-11-1' },
          { text: '【Mysql】uft8编码的坑', link: '/2019-09-06' },
          { text: '【整理】前端页面访问速度优化', link: '/2019-09-05' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chongtongTech/tech-blog' }
    ],

    search: {
      provider: 'local'
    },
    footer: {
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/chongtongTech">chongtongTech</a>'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },

  }
})
