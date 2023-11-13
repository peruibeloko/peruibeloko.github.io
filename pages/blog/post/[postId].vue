<script setup lang="ts">
const { currentRoute } = useRouter();
const { data } = await useAsyncData("blog_post", () =>
  queryContent(`/blog/${currentRoute.value.params.postId}`).findOne()
);

definePageMeta({
  name: 'Blog Post'
})
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
