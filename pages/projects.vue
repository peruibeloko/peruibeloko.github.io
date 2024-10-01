<template>
  <div id="projects">
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <h1>Projetos</h1>
      <p>Esses são meus projetos pessoais que acumulei ao longo do tempo. Alguns ativos, alguns terminados, alguns abandonados. Os nomes são links.</p>
    </header>
    <main>
      <Entry v-for="project in projectList" v-bind="project" />
    </main>
  </div>
</template>
<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  techs: string[];
}

const entries = await queryContent('projects').findOne();

const projectList = entries.body as unknown as Project[];
</script>
<style src="~/assets/css/projects.css" />
