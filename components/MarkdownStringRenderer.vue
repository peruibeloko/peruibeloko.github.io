<template>
  <MDC :value="content" unwrap="div p" :tag="tag"/>
</template>

<script setup lang="ts">
interface Props {
  content: string
  tag: string
}

const props = defineProps<Props>();
</script>
