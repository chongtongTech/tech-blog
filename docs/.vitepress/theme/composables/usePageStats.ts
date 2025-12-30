import { ref, computed, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import {
  initAnalytics,
  trackPageView,
  trackUniqueVisitor,
  getPageStats
} from './useAnalytics'

function updateStats(pathname: string, pageViews: { value: number }, uniqueVisitors: { value: number }) {
  // 初始化 Analytics
  initAnalytics()

  // 跟踪页面访问和独立访客
  trackPageView(pathname)
  trackUniqueVisitor(pathname)

  // 获取并更新统计信息
  const stats = getPageStats(pathname)
  pageViews.value = stats.pageViews
  uniqueVisitors.value = stats.uniqueVisitors
}

export function usePageStats() {
  const { frontmatter } = useData()
  const route = useRoute()
  
  const pageViews = ref(0)
  const uniqueVisitors = ref(0)

  const showStats = computed(() => {
    const fm = frontmatter.value as Record<string, unknown>

    if (fm && fm.stats === false) return false
    if (fm && fm.layout === 'home') return false

    return true
  })

  onMounted(() => {
    if (!showStats.value) return
    updateStats(route.path, pageViews, uniqueVisitors)
  })

  // 监听路由变化
  watch(
    () => route.path,
    (newPath) => {
      if (!showStats.value) return
      updateStats(newPath, pageViews, uniqueVisitors)
    }
  )

  return {
    pageViews,
    uniqueVisitors,
    showStats
  }
}

