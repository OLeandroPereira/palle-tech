<template>
  <nav class="navbar navbar-expand bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div>
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div class="ms-auto me-5">
        <nav class="navbar-links">
          <router-link to="/">Empresa</router-link>
          <router-link to="/formulario">Formulário</router-link>
          <router-link to="/cadastro">Cadastro</router-link>
          <router-link to="/about">About us</router-link>
        </nav>
        <router-view/>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderPage',
};
</script>

<style scoped>
  router-link {
    font-family: 'Nunito Sans';
  }
  a {
    font-size: 26px;
    font-weight: 50;
    text-decoration: none;
    margin-right: 20px;
  }
</style>
