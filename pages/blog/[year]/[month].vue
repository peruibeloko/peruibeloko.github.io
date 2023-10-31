<script setup>
definePageMeta({
  name: 'month-listing',
  path: '/blog/:year(\\d{4})/:month(0[1-9]|1[0-2])'
})
</script>
<template>
  Month listing for {{ $route.params.month }} of {{ $route.params.year }}
</template>