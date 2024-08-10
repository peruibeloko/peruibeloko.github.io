<script setup>
definePageMeta({
  name: "Resume"
});
</script>

<template>
  <div id="about">
    <header>
      <h1>Currículo</h1>
      <NuxtLink to="/">Home</NuxtLink>
    </header>
    <main>
      <ContentDoc tag="article" />
    </main>
  </div>
</template>

<style src="~/assets/css/resume.css" />
