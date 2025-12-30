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
      </div>
    </ClientOnly>
  </section>
</template>

