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

// 访问统计配置
export interface AnalyticsConfig {
  enabled: boolean
  measurementId: string
  debug?: boolean
}

// TODO: 将下面这些值替换为你的 Google Analytics 4 测量 ID
export const analyticsConfig: AnalyticsConfig = {
  enabled: true,
  measurementId: 'G-25QN2G3V7P', // 替换为你的 GA4 测量 ID
  debug: false
}

