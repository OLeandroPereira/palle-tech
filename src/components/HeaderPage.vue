<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light p-5" id="navbar">
    <a href="" class="navbar-brand">
      <img src="../assets/image/logo.png" alt="Palle-Tech" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar-items"
      aria-controls="navbar-items"
      style="cursor:pointer"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end mx-5" id="navbar-items">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">Empresa</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Formulário</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Cadastro</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Sobre nós</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderPage',
};
</script>

<style lang="scss"></style>
