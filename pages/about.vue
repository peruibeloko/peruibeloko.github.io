<script setup>
definePageMeta({
  name: "About"
});
</script>

<template>
  <div id="post">
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <h1>Sobre mim</h1>
    </header>
    <main>
      <ContentDoc tag="article" />
    </main>
  </div>
</template>

<style src="~/assets/css/post.css" />
