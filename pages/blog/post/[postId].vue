<script setup lang="ts">
import { provide } from "vue";

const { currentRoute } = useRouter();
const { data } = await useAsyncData("blog_post", () =>
  queryContent(`/blog/${currentRoute.value.params.postId}`).findOne()
);

definePageMeta({
  name: "Blog Post"
});

const footnotes = ref({});
const updateFootnotes = (key: string, val: string) => {
  footnotes.value = {
    ...footnotes.value,
    [key]: val
  };
};

provide("footnotes", [footnotes, updateFootnotes]);
</script>
<template>
  <div id="post">
    <header>
      <h1>{{ data?.title }}</h1>
      <NuxtLink to="/blog">Voltar</NuxtLink>
    </header>
    <main>
      <ContentDoc tag="article" :path="`/blog/${currentRoute.params.postId}`" />
    </main>
  </div>
</template>

<style src="~/assets/css/post.scss" />
