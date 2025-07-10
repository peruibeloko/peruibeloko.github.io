<template>
  <ContentRenderer :value="data!" :tag="tag ?? 'div'" />
</template>

<script setup lang="ts">
interface Props {
  tag?: string;
}

defineProps<Props>();
const route = useRoute();
const { data } = await useAsyncData(
  route.path,
  queryCollection('content').path(route.path).first
);
</script>
