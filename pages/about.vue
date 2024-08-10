<script setup>
definePageMeta({
  name: "About"
});
</script>

<template>
  <div id="about">
    <header>
      <h1>Sobre mim</h1>
      <NuxtLink to="/">Home</NuxtLink>
    </header>
    <main>
      <ContentDoc tag="article" />
    </main>
  </div>
</template>

<style src="~/assets/css/about.css" />
