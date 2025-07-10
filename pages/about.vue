<template>
  <div id="about">
    <header>
      <NuxtLink to="/">Voltar</NuxtLink>
      <h1>Sobre mim</h1>
    </header>
    <main>
      <ContentRenderer :value="data!" tag="article" />
    </main>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(
  'about',
  queryCollection('content').path('/about').first
);
</script>

<style src="~/assets/css/about.css" />
