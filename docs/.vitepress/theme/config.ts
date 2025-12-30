// 评论配置
export interface GiscusConfig {
  repo: `${string}/${string}`
  repoId: string
  category: string
  categoryId: string
  mapping: 'pathname'
  lang: string
}

// TODO: 将下面这些值替换为你在 giscus.app 上生成的真实配置
export const commentConfig: GiscusConfig = {
  repo: 'chongtongTech/tech-blog',
  repoId: 'R_kgDOQvEXiQ',
  category: 'Announcements',
  categoryId: 'DIC_kwDOQvEXic4C0VP5',
  mapping: 'pathname',
  lang: 'zh-CN'
}

// 预留：SEO 配置
// export interface SEOConfig {
//   // ...
// }

// 预留：访问统计配置
// export interface AnalyticsConfig {
//   // ...
// }

