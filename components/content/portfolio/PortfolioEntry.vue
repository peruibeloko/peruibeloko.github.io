<template>
  <article class="entry-card">
    <slot />
  </article>
</template>

<style lang="scss">
.entry-card {
  width: 25rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid var(--gray);
  border-radius: 1rem;
  background-color: var(--black);
  gap: 1rem;

  &:nth-child(odd) {
    transform: translateX(-30%);
  }

  &:nth-child(even) {
    transform: translateX(30%);
  }

  h2 {
    display: flex;
    align-items: center;
    padding-left: 0.5rem;

    font-size: 1.25rem;
    font-family: var(--slab);
    font-weight: normal;
    border-left: 5px solid var(--main);

    &::after {
      position: relative;
      top: -15%;
      left: 0.25rem;
      content: "🔗";
      font-size: small;
      opacity: 0.3;
      transition-duration: 200ms;
    }

    &:hover::after {
      opacity: 1;
    }
  }

  p {
    font-size: 0.75rem;
    font-family: var(--sans);
    line-height: 1.3rem;
    margin: 0 1rem;
  }

  ul {
    align-self: flex-end;
    display: flex;

    li {
      list-style: none;

      a {
        cursor: pointer;
        font-size: 0.5rem;
        font-family: var(--sans);
        margin: 0 0.25rem;
        padding: 0.25rem 0.5rem;
        background-color: var(--black);
        color: var(--white);
        border-radius: 1rem;
        border: 1px solid var(--white);
        transition-duration: 200ms;
      }

      &:hover a {
        background-color: var(--white);
        color: var(--black);
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
    border-right: none;
    border-radius: 0;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    ul li a {
      font-size: 0.65rem;
    }

    &:nth-child(odd),
    &:nth-child(even) {
      transform: none;
    }
  }
}
</style>
