<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Comment from './components/Comment.vue'
import PageStats from './components/PageStats.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <PageStats />
      <Comment />
    </template>
  </Layout>
</template>


