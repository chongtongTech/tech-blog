<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Comment from './components/Comment.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comment />
    </template>
  </Layout>
</template>


