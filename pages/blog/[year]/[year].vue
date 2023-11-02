<script setup lang="ts">
definePageMeta({
  name: "year-listing",
  path: "/blog/:year(\\d{4})",
});

const route = useRoute();
const { page = 1, size = 5 } = route.query as unknown as {
  page: number;
  size: number;
};

const query = queryContent("blog")
  .where({
    date: {
      $regex: `${route.params.year}-\\d{2}-\\d{2}`,
    },
  })
  .skip((page - 1) * size)
  .limit(size)
  .sort({ date: -1 }).params();
</script>
<template>
  Posts feitos em {{ $route.params.year }}
  <ContentList :query="query">
    <template #default="{ list }">
      <ul class="post-list">
        <li v-for="post in list" :key="post._path">
          <a :href="post._path?.replace('blog', 'blog/post')">{{
            post.title
          }}</a>
          <time :datetime="post.date">{{
            `${new Date(post.date).toLocaleDateString("pt-BR", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "UTC",
            })}`
          }}</time>
        </li>
      </ul>
    </template>
    <template #not-found>
      <p>Nenhum post nesse período</p>
    </template>
  </ContentList>
</template>
