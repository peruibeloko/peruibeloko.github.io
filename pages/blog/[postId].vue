<template>
  <div id="post">
    <header>
      <NuxtLink to="/blog">Voltar</NuxtLink>
      <h1>{{ post!.title }}</h1>
    </header>
    <main>
      <ContentRenderer tag="article" :value="post!" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';

const route = useRoute();
const { data: post } = await useAsyncData(
  'post',
  queryCollection('blog').path(route.path).first
);

useSeoMeta({
  title: post.value?.title,
  author: 'Carlinhos',
});

const footnotes = ref({});
const updateFootnotes = (key: string, val: string) => {
  footnotes.value = {
    ...footnotes.value,
    [key]: val
  };
};

provide('footnotes', [footnotes, updateFootnotes]);
</script>

<style src="~/assets/css/post.css" />
