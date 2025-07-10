<template>
  <div id="projects">
    <header>
      <NuxtLink to="/">Voltar</NuxtLink>
      <h1>Projetos</h1>
      <div>
        <p>Esses são projetos pessoais que acumulei ao longo do tempo.</p>
        <p>Alguns ativos, alguns terminados, alguns abandonados.</p>
        <p>Os nomes são links.</p>
      </div>
    </header>
    <main>
      <ContentRenderer :value="data!" />
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Carlinhos'
});

const { data } = await useAsyncData(
  'projects',
  queryCollection('content').path('/projects').first
);
</script>

<style src="~/assets/css/projects.css" />
