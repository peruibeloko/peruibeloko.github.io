<script>
// parse slug into [year, month, title]

// tenta buscar post no slug atual /ano/mes/titulo
// caso não consiga, tenta listar posts do /ano/mes
// caso não consiga, tenta listar meses do /ano
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
