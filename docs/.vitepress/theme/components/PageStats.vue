<script setup lang="ts">
import { useRoute } from 'vitepress'
import { usePageStats } from '../composables/usePageStats'

const route = useRoute()
const { pageViews, uniqueVisitors, showStats } = usePageStats()
</script>

<template>
  <ClientOnly>
    <br/>
    <div
      v-if="showStats"
      :key="route.path"
      class="mt-16 mb-10 pt-6 pb-4 border-t border-gray-100 dark:border-gray-800 text-[11px] text-gray-400 dark:text-gray-500"
    >
      <span>阅读量 {{ pageViews.toLocaleString() }}</span>
      <span class="mx-2"> · </span>
      <span>访客 {{ uniqueVisitors.toLocaleString() }}</span>
    </div>
    <br/>
  </ClientOnly>
</template>

