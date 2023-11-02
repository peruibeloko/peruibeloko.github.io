<script setup lang="ts">
const { currentRoute } = useRouter();
const { data } = await useAsyncData("blog_post", () =>
  queryContent(`/blog/${currentRoute.value.params.postId}`).findOne()
);
</script>
<template>
  <div id="post">
    <header>
      <h1>{{ data?.title }}</h1>
    </header>
    <main>
      <ContentDoc tag="article" :path="`/blog/${currentRoute.params.postId}`" />
    </main>
    <hr />
    <footer>
      <button type="button" @click="$router.back()">Voltar</button>
    </footer>
  </div>
</template>

<style src="~/assets/css/post.scss" />
