<template>
  <div id="resume">
    <header>
      <img src="~/assets/img/profile.jpg" alt="Foto de perfil" />
      <h1>Carlos Mendonça</h1>
      <address>
        <span>26 anos</span>
        <span>Mooca, São Paulo</span>
        <a href="tel:11998366412">(11) 99836-6412</a>
        <a href="mailto:eumesmo@carlinhos.dev.br">eumesmo@carlinhos.dev.br</a>
        <a href="https://github.com/peruibeloko">GitHub</a>
        <a href="https://www.linkedin.com/in/carlospellizzari/">LinkedIn</a>
      </address>
      <ContentRenderer :value="objetivos!" />
    </header>
    <main>
      <ContentRenderer :value="resume!" tag="article" />
    </main>
    <footer>
      <span
        >Essa página tem uma versão em PDF! Só imprimir usando
        <code>Ctrl + P</code></span
      >
      <NuxtLink to="/about">Voltar</NuxtLink>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { data: objetivos } = await useAsyncData(
  'objetivos',
  queryCollection('content').path('/objetivos').first
);

const { data: resume } = await useAsyncData(
  'resume',
  queryCollection('content').path('/resume').first
);

useSeoMeta({
  title: 'Currículo'
});
</script>

<style src="~/assets/css/resume.css" />
