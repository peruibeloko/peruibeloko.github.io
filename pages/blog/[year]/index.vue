<script setup>
definePageMeta({
  name: 'year-listing',
  path: '/blog/:year(\\d{4})'
})
</script>
<template>
  Year listing for {{ $route.params.year }}
</template>