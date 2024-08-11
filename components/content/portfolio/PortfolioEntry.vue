<template>
  <article class="entry-card">
    <MarkdownStringRenderer :content="title" tag="h2" />
    <MarkdownStringRenderer :content="description" tag="p" />
    <ul>
      <MarkdownStringRenderer v-for="tech of techs" :content="tech" tag="li" />
    </ul>
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
  width: 40rem;
  display: flex;
  flex-direction: column;
  margin-top: var(--size__1);
  padding: var(--size__2);
  border-radius: var(--size__1);
  border: 5px solid var(--color__800);
  gap: var(--size__1);

  h2 {
    margin-top: 0;
    display: flex;
    align-items: center;

    &::after {
      content: '(repo link)';
      font-size: var(--font-size__05);
      margin-left: var(--size__05);
      opacity: 0;
      transition-duration: 200ms;
    }

    &:hover::after {
      opacity: 0.4;
    }
  }

  ul {
    align-self: flex-end;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
      list-style: none;

      a {
        cursor: pointer;
        font-size: var(--font-size__05);
        font-family: var(--font__body);
        margin: 0 0.25rem;
        padding: 0.25rem 0.5rem;
        background-color: transparent;
        color: var(--color__text);
        border-radius: 1rem;
        border: 1px solid var(--color__text);
        transition-duration: 200ms;
        text-decoration: none;
      }

      &:last-of-type a {
        margin-right: 0;
      }

      &:hover a {
        background-color: var(--color__text);
        color: var(--color__background);
      }
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: auto;
    margin-top: 4rem;

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
