<template>
  <article class="entry-card">
    <slot />
  </article>
</template>

<style lang="scss">
.entry-card {
  width: 30rem;
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--black);
  gap: 1rem;

  &:nth-child(odd) {
    transform: translateX(-40%);
  }

  &:nth-child(even) {
    transform: translateX(40%);
  }

  h2 {
    display: flex;
    align-items: center;
    padding-left: 0.5rem;

    font-size: var(--size__big);
    font-family: var(--display);
    border-left: 5px solid var(--main);

    a {
      font-weight: 600;
    }

    &::after {
      content: "(repo link)";
      font-size: small;
      margin-left: 0.5rem;
      opacity: 0;
      transition-duration: 200ms;
    }

    &:hover::after {
      opacity: 0.4;
    }
  }

  p {
    font-size: var(--size__base);
    font-family: var(--sans);
    line-height: var(--line-height);
    font-weight: 300;
    text-align: justify;
    hyphens: auto;
  }

  ul {
    align-self: flex-end;
    display: flex;
    margin-top: 0.25rem;

    li {
      list-style: none;

      a {
        cursor: pointer;
        font-size: var(--size__small);
        font-family: var(--sans);
        margin: 0 0.25rem;
        padding: 0.25rem 0.5rem;
        background-color: var(--black);
        color: var(--white);
        border-radius: 1rem;
        border: 1px solid var(--white);
        transition-duration: 200ms;
      }

      &:last-of-type a {
        margin-right: 0;
      }

      &:hover a {
        background-color: var(--white);
        color: var(--black);
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
