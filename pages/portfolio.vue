<template>
  <div id="portfolio">
    <header>
      <NuxtLink to="/">Home</NuxtLink>
      <h1>Portfolio</h1>
    </header>
    <main>
      <PortfolioEntry v-for="project in projectList" v-bind="project" />
    </main>
  </div>
</template>

<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  techs: string[];
}

const entries = await queryContent('portfolio').findOne();

const projectList = entries.body as unknown as Project[];
</script>

<style src="~/assets/css/portfolio.css" />
