import { defineConfig } from 'vitepress'
import { analyticsConfig } from './theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Tech Blog",
  description: "A personal technical blog",
  lastUpdated: true,

  base: '/tech-blog/', // 必须改成你的仓库名
  
  // SEO
  sitemap: {
    hostname: 'https://chongtongtech.github.io/tech-blog/',
    lastmodDateOnly: false
  },

  // Google Analytics
  head: analyticsConfig.enabled && analyticsConfig.measurementId && analyticsConfig.measurementId.startsWith('G-')
    ? [
        [
          'script',
          {
            async: '',
            src: `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.measurementId}`
          }
        ],
        [
          'script',
          {},
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analyticsConfig.measurementId}', {
              send_page_view: false
            });
          `
        ]
      ]
    : [],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/2020-08-08' }
    ],

    // 搜索功能：浏览器本地实现
    search: {
      provider: 'local'
    },

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

     // 文章页脚，页面编辑跳转
     editLink: {
      pattern: 'https://github.com/chongtongTech/tech-blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 主页页脚
    footer: {
      // message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: `Copyright © 2019-${new Date().getFullYear()} <a href="https://github.com/chongtongTech">chongtongTech</a>`
    },

     // 文章页脚
     docFooter: {
      prev: '上一页',
      next: '下一页'
    },   

    outline: {
      label: '页面导航'
    },

    // 文章页脚，最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chongtongTech/tech-blog' }
    ],

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容'

  }
})
