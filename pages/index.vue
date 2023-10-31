<template>
  <div id="home">
    <header>

      <section>
        <h1>Carlos Mendonça</h1>
        <span>Programador, músico, aspirante a professor.</span>
      </section>

      <img src="https://avatars.githubusercontent.com/u/3859329" alt="Foto de perfil" />

    </header>
    <main>
    
      <article>
        <ContentDoc />
      </article>

      <nav>
        <NuxtLink to="/portfolio" class="portfolio">Portfolio</NuxtLink>
        <NuxtLink to="/blog" class="blog">Blog</NuxtLink>
      </nav>
    
    </main>
  </div>
</template>

<style src="~/assets/css/home.scss" />
