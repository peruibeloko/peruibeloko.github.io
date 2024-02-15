<script setup>
useHead({
  title: "Sobre mim"
});

definePageMeta({
  name: "Sobre mim"
});
</script>

<template>
  <div id="about">
    <header>
      <h1>Sobre mim</h1>
      <NuxtLink to="/">Home</NuxtLink>
    </header>
    <main>
      <ContentDoc tag="article"/>
    </main>
  </div>
</template>

<style src="~/assets/css/about.scss" />
