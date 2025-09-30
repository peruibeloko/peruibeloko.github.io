<template>
  <div id="home">
    <main>
      <section>
        <h1>Carlos Mendonça</h1>
        <span>Programador, músico, aspirante a professor.</span>
      </section>

      <article>
        <ContentRenderer :value="data!" />
      </article>
    </main>
    <aside>
      <NuxtImg
        src="https://avatars.githubusercontent.com/u/3859329"
        alt="Foto de perfil"
      />
      <nav>
        <NuxtLink to="/projects" class="projects">Projetos</NuxtLink>
        <NuxtLink to="https://carlinhos.bearblog.dev" class="blog">Blog</NuxtLink>
        <NuxtLink to="/about" class="about">Sobre mim</NuxtLink>
      </nav>
    </aside>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Carlinhos'
});

const { data } = await useAsyncData(
  'home',
  queryCollection('content').path('/').first
);
</script>

<style src="~/assets/css/home.css" />
