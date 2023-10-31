<script>
// TODO
// 1. incluir título
// 2. listagem por ano
// 3. listagem por mês + paginação
</script>
<template>
  <div id="post">
    <header>
      <h1>JavaScript — Presente, Passado e Futuro</h1>
    </header>
    <main>
      <ContentDoc />
    </main>
    <hr />
    <footer>
      <button type="button" @click="$router.back()">Voltar</button>
    </footer>
  </div>
</template>

<style src="~/assets/css/post.scss" />
