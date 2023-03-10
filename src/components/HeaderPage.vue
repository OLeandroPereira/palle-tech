<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container py-3">
      <router-link class="nav-link" to="/">
        <img src="../assets/logo.png" alt="logo Palle-tech">
      </router-link>
      <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar-items"
      aria-controls="navbar-items"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
      <i class="bi bi-list"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Empresa</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/formulario">Formulário</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cadastro">Cadastro</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/Sobre">Sobre nós</router-link>
          </li>
        </ul>
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
nav {
  height: 100px;
  background-color: rgba(0, 0, 0, 0.519);
  top: 0;
  width: 100%;
  z-index: 1;
}
*{
    margin: 0;
    padding: 0;
  }
a {
  font-size: 20px;
  text-decoration: none;
  margin-right: 20px;
  color: rgb(197, 192, 192);
}
nav a.nav-link:hover {
  color: orange;
}
</style>
