# tech-blog

个人技术博客网站，基于 VitePress 构建的静态文档/博客系统。

![VitePress](https://img.shields.io/badge/VitePress-2.x-646cff?style=flat-square&logo=vite)
![Vue 3](https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vue.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)

## 特性

- **评论系统** - 基于 Giscus (GitHub Discussions) 的评论功能
- **访问统计** - 自研 PV/UV 统计 + Google Analytics 4 集成
- **SEO 友好** - 自动生成 sitemap
- **暗色模式** - 自动切换亮色/暗色主题
- **本地搜索** - 浏览器端快速搜索
- **高度可配置** - 通过配置集中管理功能开关

## 技术栈

| 技术 | 用途 |
|------|------|
| [VitePress](https://vitepress.dev/) | 静态站点生成器 |
| [Vue 3](https://vuejs.org/) | 前端框架 |
| [TypeScript](https://www.typescriptlang.org/) | 类型安全 |
| [@giscus/vue](https://giscus.app/) | GitHub Discussions 评论系统 |
| [Google Analytics 4](https://analytics.google.com/) | 网站访问分析 |

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

启动本地开发服务器：

```bash
npm run docs:dev
```

### 构建生产版本

```bash
npm run docs:build
```

### 预览构建结果

```bash
npm run docs:preview
```

## 目录结构

```
tech-blog/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # VitePress 主配置
│   │   ├── theme/
│   │   │   ├── index.ts        # 主题入口
│   │   │   ├── Layout.vue      # 布局组件
│   │   │   ├── config.ts       # 评论和统计配置
│   │   │   ├── components/     # 自定义组件
│   │   │   │   ├── Comment.vue      # 评论组件
│   │   │   │   └── PageStats.vue    # 页面统计组件
│   │   │   └── composables/    # 组合式函数
│   │   │       ├── useAnalytics.ts  # GA 分析逻辑
│   │   │       ├── useComment.ts    # 评论逻辑
│   │   │       └── usePageStats.ts  # 统计逻辑
│   │   ├── cache/              # 构建缓存
│   │   └── dist/               # 构建输出
│   ├── public/                 # 静态资源
│   ├── *.md                    # 博客文章
│   └── index.md                # 主页
├── package.json
└── README.md
```

## 配置说明

### 评论系统配置

在 `.vitepress/theme/config.ts` 中配置 Giscus：

```typescript
commentConfig: {
  repo: 'your-username/tech-blog',
  repoId: 'R_xxx',
  category: 'Announcements',
  mapping: 'pathname',
  // ...
}
```

### Google Analytics 配置

```typescript
analyticsConfig: {
  enabled: true,
  measurementId: 'G-XXXXXXXXXX',
}
```

### 文章禁用评论

在 Markdown 文件的 frontmatter 中设置：

```yaml
---
comments: false
---
```

## 博客文章

| 年份 | 主题 |
|------|------|
| 2020 | Docker 交叉编译 |
| 2019 | HTTP 版本、Jenkins、Docker、Maven、AOP、MySQL、前端优化等 |

## 许可证

MIT License
