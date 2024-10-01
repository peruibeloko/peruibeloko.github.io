<template>
  <article class="entry-card">
    <MarkdownStringRenderer :content="title" tag="h2" />
    <MarkdownStringRenderer :content="description" tag="p" />
  </article>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  techs: string[];
}

defineProps<Props>();
</script>

<style>
.entry-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: var(--size__1);
  gap: var(--size__1);

  h2 {
    text-align: start !important;
    text-decoration-thickness: 2px;
    margin-top: 0;
    display: flex;
    align-items: center;
    
    a {
      font-size: var(--font-size__1);
    }
  }

  p {
    hyphens: none;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;

    &:nth-child(odd),
    &:nth-child(even) {
      transform: none;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      margin: 0;
    }

    ul li a {
      font-size: 0.65rem;
    }
  }
}
</style>
