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
        <p>Pode me chamar de Carlinhos!</p>
        <p>
          Sou apaixonado por computação teórica e espero poder inspirar essa mesma paixão em outros no futuro! Sou
          formado em Ciências da Computação pela UAM, mas já era interessado por programação antes mesmo da faculdade.
          Minhas áreas de interesse dentro da computação incluem Linguagens, Compiladores, Web e Programação Funcional.
        </p>
        <p>Também faço música, caso você se interesse o link é <a href="https://linktr.ee/dyn.mic">esse</a></p>
        <p>
          Falando em blog: Meu blog não é muito frequentemente atualizado, particularmente porque ainda não entrei no
          ritmo e a minha ferramenta de publicação ainda não é totalmente a prova de balas.
        </p>
      </article>

      <nav>
        <NuxtLink to="/portfolio" class="portfolio">Portfolio</NuxtLink>
        <NuxtLink to="/blog" class="blog">Blog</NuxtLink>
      </nav>
    </main>
  </div>
</template>

<style src="~/assets/css/home.scss" />
