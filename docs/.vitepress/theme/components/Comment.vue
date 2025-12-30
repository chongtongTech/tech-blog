<script setup lang="ts">
import { useRoute } from 'vitepress'
import Giscus from '@giscus/vue'
import { useComment } from '../composables/useComment'

const route = useRoute()
const { commentConfig, commentTheme, showComments } = useComment()
</script>

<template>
  <section
    v-if="showComments"
    class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700"
  >
    <ClientOnly>
      <div class="space-y-4">
        <Giscus
          :key="route.path"
          id="comments"
          :repo="commentConfig.repo"
          :repo-id="commentConfig.repoId"
          :category="commentConfig.category"
          :category-id="commentConfig.categoryId"
          :mapping="commentConfig.mapping"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="bottom"
          :theme="commentTheme"
          :lang="commentConfig.lang"
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

