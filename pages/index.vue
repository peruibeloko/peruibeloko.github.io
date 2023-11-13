<script setup>
useHead({
  title: "Carlinhos"
});

definePageMeta({
  name: "Homepage"
});
</script>

<template>
  <div id="home">
    <main>
      <section>
        <h1>Carlos Mendonça</h1>
        <span>Programador, músico, aspirante a professor.</span>
      </section>

      <article>
        <ContentDoc />
      </article>
    </main>
    <aside>
      
      <NuxtImg src="https://avatars.githubusercontent.com/u/3859329" alt="Foto de perfil" />

      <nav>
        <NuxtLink to="/portfolio" class="portfolio">Portfolio</NuxtLink>
        <NuxtLink to="/blog" class="blog">Blog</NuxtLink>
      </nav>
    </aside>
  </div>
</template>

<style src="~/assets/css/home.scss" />
