<script setup lang="ts">
import { computed } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import Giscus from '@giscus/vue'

const { Layout } = DefaultTheme

const { isDark, frontmatter } = useData()
const route = useRoute()

interface GiscusConfig {
  repo: `${string}/${string}`
  repoId: string
  category: string
  categoryId: string
  mapping: 'pathname'
  lang: string
}

// TODO: 将下面这些值替换为你在 giscus.app 上生成的真实配置
const giscusConfig: GiscusConfig = {
  repo: 'chongtongTech/tech-blog',
  repoId: 'R_kgDOQvEXiQ',
  category: 'Announcements',
  categoryId: 'DIC_kwDOQvEXic4C0VP5',
  mapping: 'pathname',
  lang: 'zh-CN'
}

const giscusTheme = computed(() => (isDark.value ? 'dark' : 'light'))

const showComments = computed(() => {
  const fm = frontmatter.value as Record<string, unknown>

  if (fm && fm.comments === false) return false
  if (fm && fm.layout === 'home') return false

  return true
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <section
        v-if="showComments"
        class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700"
      >
        <ClientOnly>
          <div class="space-y-4">
            <Giscus
              :key="route.path"
              id="comments"
              :repo="giscusConfig.repo"
              :repo-id="giscusConfig.repoId"
              :category="giscusConfig.category"
              :category-id="giscusConfig.categoryId"
              :mapping="giscusConfig.mapping"
              strict="0"
              reactions-enabled="1"
              emit-metadata="0"
              input-position="bottom"
              :theme="giscusTheme"
              :lang="giscusConfig.lang"
              loading="lazy"
            />
            <p
              class="mt-3 text-[11px] leading-relaxed text-gray-400 dark:text-gray-500"
            >
              本文评论基于
              <a
                href="https://github.com/chongtongTech/tech-blog/discussions"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[inherit] underline underline-offset-2 decoration-dotted font-normal"
              >
                GitHub Discussions
              </a>
              提供。
            </p>
          </div>
        </ClientOnly>
      </section>
    </template>
  </Layout>
</template>


