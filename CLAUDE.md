# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在处理此代码库时提供指导。

## 项目概述

基于 VitePress（由 Vite 和 Vue 3 驱动的静态站点生成器）的个人技术博客。博客文章使用 Markdown 编写，存放在 `docs/` 目录下。

## 常用命令

```bash
npm run docs:dev      # 启动本地开发服务器
npm run docs:build    # 构建生产版本
npm run docs:preview  # 预览构建结果（端口 8080）
```

## 项目架构

```
docs/
├── .vitepress/
│   ├── config.mts          # VitePress 主配置（SEO、导航、主题设置）
│   └── theme/
│       ├── index.ts        # 主题入口，注册组件
│       ├── Layout.vue      # 自定义布局，扩展默认主题
│       ├── config.ts       # Giscus 评论 + 分析统计配置
│       ├── components/
│       │   ├── Comment.vue     # Giscus 评论组件
│       │   └── PageStats.vue   # PV/UV 统计组件
│       └── composables/
│           ├── useAnalytics.ts # GA4 追踪逻辑
│           ├── useComment.ts   # 评论加载逻辑
│           └── usePageStats.ts # 统计追踪逻辑
├── public/                 # 静态资源
└── *.md                    # 博客文章
```

## 关键配置点

- **基础路径**: `/tech-blog/`（在 `config.mts` 中配置）
- **评论系统**: 通过 `@giscus/vue` 集成 Giscus，在 `theme/config.ts` 中配置
- **统计分析**: 自研 PV/UV + GA4，在 `theme/config.ts` 中配置
- **文章 Frontmatter**: 设置 `comments: false` 或 `pageStats: false` 可禁用对应功能

## 代码风格（来自 Cursor rules）

- 使用 Vue Composition API 的 `<script setup>` 语法
- 优先使用接口（interface）而非类型（type），便于扩展
- 避免使用枚举（enum），改用映射（Map）
- 函数使用具名导出（named exports）
- 使用辅助动词命名变量（如 isLoading、hasError）
