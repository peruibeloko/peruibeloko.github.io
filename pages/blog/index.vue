<template>
  <div id="blog">
    <header>
      <div>
        <NuxtLink to="/">Voltar</NuxtLink>
        <h1>Blag</h1>
      </div>
      <p>
        Estatisticamente falando, escrevo sobre tecnologia com uma chance
        "não-zero" de falar besteira
      </p>
    </header>
    <main>
      <ul class="post-list" v-if="posts">
        <li v-for="post in posts" :key="post.path">
          <time :datetime="post.meta.date">{{
            `${new Date(post.meta.date as string).toLocaleString('pt-BR', {
              dateStyle: 'short',
              timeStyle: 'short'
            })}`
          }}</time>
          <a :href="post.path">{{ post.title }}</a>
        </li>
      </ul>

      <p v-else>Não tem nenhum post ainda!</p>

      <BlogPagination
        :current-page="page"
        :page-size="size"
        :post-count="count"
        @prev="page--"
        @next="page++"
        @navigate="(dest: number) => (page = dest)"
        @size="(newSize: number) => (size = newSize)"
      />
    </main>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Blag'
});

const page = ref(1);
const size = ref(5);

watch(size, () => (page.value = 1));

const query = reactive({
  path: 'blog',
  skip: (page.value - 1) * size.value,
  limit: size.value,
  sort: [{ date: -1 }]
});

watch([page, size], ([newPage, newSize]) => {
  query.skip = (newPage - 1) * newSize;
  query.limit = newSize;
});

const blogCollection = queryCollection('blog');
const count = await blogCollection.count();
const { data: posts } = await useAsyncData(
  'posts',
  blogCollection
    .select('title', 'path', 'meta')
    .skip(query.skip)
    .limit(query.limit).all
);
</script>
<style src="~/assets/css/blog.css" />
