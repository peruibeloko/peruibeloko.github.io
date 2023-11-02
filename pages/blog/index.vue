<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

const page = ref(1);
const size = ref(5);
const count = await queryContent("blog").count();

const query = reactive<QueryBuilderParams>({
  path: "blog",
  skip: (page.value - 1) * size.value,
  limit: size.value,
  sort: [{ date: -1 }]
});

watch([page, size], ([newPage, newSize]) => {
  query.skip = (newPage - 1) * newSize;
  query.limit = newSize;
});
</script>

<template>
  <div id="blog">
    <header>
      <h1>Blag</h1>
      <h2>
        Estatisticamente falando, escrevo sobre tecnologia com uma chance "não-zero" de falar
        besteira
      </h2>
    </header>
    <main>
      <ContentList :query="query">
        <template #default="{ list }">
          <ul class="post-list">
            <li v-for="post in list" :key="post._path">
              <time :datetime="post.date">{{
                `${new Date(post.date).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC"
                })}`
              }}</time>
              <a :href="post._path?.replace('blog', 'blog/post')">{{ post.title }}</a>
            </li>
          </ul>
        </template>
        <template #not-found>
          <p>Não tem nenhum post ainda!</p>
        </template>
      </ContentList>
      <BlogPagination
        :current-page="page"
        :page-size="size"
        :post-count="count"
        @prev="page--"
        @next="page++"
        @navigate="dest => (page = dest)"
      />
    </main>
  </div>
</template>

<style src="~/assets/css/blog.scss" />
