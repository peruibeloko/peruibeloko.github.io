<script setup lang="ts">
import { transformContent } from '@nuxt/content/transformers';

const props = defineProps({
  content: {
    type: String,
    required: true,
    default: ''
  }
});
const parsedMarkdown = await transformContent('content.md', props.content);
</script>

<template>
  <ContentRenderer :value="parsedMarkdown" v-bind="$attrs" />
</template>
