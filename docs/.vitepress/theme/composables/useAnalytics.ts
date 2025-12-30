import { analyticsConfig } from '../config'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

let isInitialized = false

/**
 * 初始化 Google Analytics
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return
  if (isInitialized) return
  if (!analyticsConfig.enabled) return
  if (!analyticsConfig.measurementId || !analyticsConfig.measurementId.startsWith('G-')) {
    if (analyticsConfig.debug) {
      console.warn('[Analytics] Measurement ID not configured')
    }
    return
  }

  isInitialized = true
  if (analyticsConfig.debug) {
    console.log('[Analytics] Initialized with measurement ID:', analyticsConfig.measurementId)
  }
}

/**
 * 生成或获取访客 ID
 */
function getVisitorId(): string {
  if (typeof window === 'undefined') return ''
  
  const key = 'analytics:visitorId'
  let visitorId = localStorage.getItem(key)
  
  if (!visitorId) {
    // 生成基于时间戳和随机数的访客 ID
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
    localStorage.setItem(key, visitorId)
  }
  
  return visitorId
}

/**
 * 跟踪页面访问
 */
export function trackPageView(pathname: string): void {
  if (typeof window === 'undefined') return
  if (!analyticsConfig.enabled) return
  
  initAnalytics()

  // 发送到 Google Analytics
  if (window.gtag && analyticsConfig.measurementId && analyticsConfig.measurementId.startsWith('G-')) {
    window.gtag('event', 'page_view', {
      page_path: pathname
    })
  }

  // 更新本地 PV 计数
  const pvKey = `analytics:pv:${pathname}`
  const currentPv = parseInt(localStorage.getItem(pvKey) || '0', 10)
  localStorage.setItem(pvKey, String(currentPv + 1))

  if (analyticsConfig.debug) {
    console.log('[Analytics] Page view tracked:', pathname, 'PV:', currentPv + 1)
  }
}

/**
 * 跟踪独立访客
 */
export function trackUniqueVisitor(pathname: string): void {
  if (typeof window === 'undefined') return
  if (!analyticsConfig.enabled) return

  const visitorId = getVisitorId()
  const visitorsKey = `analytics:visitors:${pathname}`
  
  // 获取该页面的访客列表
  const visitorsData = localStorage.getItem(visitorsKey)
  let visitors: string[] = []
  
  if (visitorsData) {
    try {
      visitors = JSON.parse(visitorsData)
    } catch {
      visitors = []
    }
  }

  // 如果当前访客尚未被计入，则增加 UV
  if (!visitors.includes(visitorId)) {
    visitors.push(visitorId)
    localStorage.setItem(visitorsKey, JSON.stringify(visitors))
    
    if (analyticsConfig.debug) {
      console.log('[Analytics] Unique visitor tracked:', pathname, 'UV:', visitors.length)
    }
  }
}

/**
 * 获取页面统计信息
 */
export function getPageStats(pathname: string): {
  pageViews: number
  uniqueVisitors: number
} {
  if (typeof window === 'undefined') {
    return { pageViews: 0, uniqueVisitors: 0 }
  }

  const pvKey = `analytics:pv:${pathname}`
  const visitorsKey = `analytics:visitors:${pathname}`

  const pageViews = parseInt(localStorage.getItem(pvKey) || '0', 10)
  
  const visitorsData = localStorage.getItem(visitorsKey)
  let uniqueVisitors = 0
  if (visitorsData) {
    try {
      const visitors: string[] = JSON.parse(visitorsData)
      uniqueVisitors = visitors.length
    } catch {
      uniqueVisitors = 0
    }
  }

  return { pageViews, uniqueVisitors }
}

