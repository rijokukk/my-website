<!-- Layout for error -->
<template>
  <div class="error-page">
    <h1>Oho, tapahtui virhe!</h1>
    <p>Takaisin <a href="/">etusivulle</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
