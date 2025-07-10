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
      <PageContent />
    </main>
  </div>
</template>

<script setup>
useHead({
  title: 'Carlinhos'
});
</script>

<style src="~/assets/css/projects.css" />
