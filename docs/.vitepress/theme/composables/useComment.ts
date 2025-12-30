import { computed } from 'vue'
import { useData } from 'vitepress'
import { commentConfig } from '../config'

export function useComment() {
  const { isDark, frontmatter } = useData()

  const commentTheme = computed(() => (isDark.value ? 'dark' : 'light'))

  const showComments = computed(() => {
    const fm = frontmatter.value as Record<string, unknown>

    if (fm && fm.comments === false) return false
    if (fm && fm.layout === 'home') return false

    return true
  })

  return {
    commentConfig,
    commentTheme,
    showComments
  }
}
