<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-none d-md-block">
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
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
  position: fixed;
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
