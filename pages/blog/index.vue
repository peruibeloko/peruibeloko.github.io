<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";

// listagem dos últimos posts, oferece paginação e lê query parameters

const query: QueryBuilderParams = {
  path: "/blog",
  sort: [
    {
      date: -1,
    },
  ],
  limit: 5,
};
</script>

<template>
  <div id="blog">
    <header>
      <h1>Blag</h1>
      <h2>
        Eu escrevo sobre tópicos sortidos. Desconfie de tudo, não duvide de
        nada.
      </h2>
    </header>
    <main>
      <ContentList :query="query">
        <template #default="{ list }">
          <ul class="post-list">
            <li v-for="post in list" :key="post._path">
              <a :href="post._path">{{ post.title }}</a>
              <time :datetime="post.date">{{
                `${new Date(post.date).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}`
              }}</time>
            </li>
          </ul>
        </template>
        <template #not-found>
          <p>Não tem nenhum post ainda!</p>
        </template>
      </ContentList>
    </main>
  </div>
</template>

<style src="~/assets/css/blog.scss" />
