<script setup>
definePageMeta({
  name: "About"
});
</script>

<template>
  <div id="about">
    <header>
      <NuxtLink to="/">Voltar</NuxtLink>
      <h1>Sobre mim</h1>
    </header>
    <main>
      <ContentDoc tag="article" />
    </main>
  </div>
</template>

<style src="~/assets/css/about.css" />
