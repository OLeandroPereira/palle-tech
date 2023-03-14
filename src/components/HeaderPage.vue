<template>
  <nav class="navbar navbar-expand-md fixed-top bg-dark" id="navbar">
    <div class="container py-3">
      <router-link to="/" class="navbar-brand">
      <img src="../assets/image/logo3.png" alt="Palle-Tech" style="width: 150px;"/>
      </router-link>
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

      <div class="collapse navbar-collapse justify-content-end" id="navbar-items">
        <ul class="navbar-nav">
          <router-link to="/" class="nav-link"
          aria-current="page" exact-active-class="active">Empresa<span
          class="underline"></span></router-link>
          <router-link to="/formulario"
          class="nav-link" exact-active-class="active">Formulário<span
          class="underline"></span></router-link>
          <router-link to="/cadastro"
          class="nav-link" exact-active-class="active">Cadastro<span
          class="underline"></span></router-link>
          <router-link to="/sobre"
          class="nav-link" exact-active-class="active">Sobre nós<span
          class="underline"></span></router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderPage',
  mounted() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      const underline = link.querySelector('.underline');

      link.addEventListener('mouseover', () => {
        underline.style.transform = 'scaleX(1)';
      });

      link.addEventListener('mouseout', () => {
        underline.style.transform = 'scaleX(0)';
      });
    });
  },
};
</script>

<style scoped>
  .navbar {
    border-bottom: 1px solid #F35A04;
  }
  .navbar-toggler {
    background-color: #F35A04;
  }
  .nav-link {
    color: #F35A04;
  }
  .nav-link:hover {
    color: #FFF9;
  }
  .nav-link.active {
    background: #FFF9;
  }
  .underline {
  display: block;
  height: 3px;
  background: linear-gradient(to right, #ff4d4d, #ff9800);
  transform: scaleX(0);
  transition: transform 0.3s ease-out, background-color 0.3s ease-out;
}
@media screen and (max-width: 767px) {
  .underline {
    display: none;
  }
}
</style>
