<template>
  <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark" id="navbar">
    <div class="container">
      <router-link to="/" class="navbar-brand">
      <img src="../assets/image/logo3.png" alt="Palle-Tech" style="width: 90px;"/>
      </router-link>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-items"
        aria-controls="navbar-items"
        style="cursor:pointer"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span class="sr-only"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-center" id="navbar-items">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <router-link to="/" class="nav-link"
          aria-current="page" exact-active-class="active">Empresa<span
          class="underline"></span></router-link>
          <router-link to="/formulario"
          class="nav-link" exact-active-class="active">Formulário<span
          class="underline"></span></router-link>
          <router-link to="/cadastro"
          class="nav-link" exact-active-class="active">Cadastro<span
          class="underline"></span></router-link>
          <router-link
          class="nav-link" exact-active-class="active" to="#sobre-nos">Sobre nós<span
          class="underline"></span></router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import SobreView from '@/views/SobreView.vue';

export default {
  name: 'HeaderPage',
  component: {
    SobreView,
  },
  methods: {
    hideNavbar() {
      const navbar = document.getElementById('navbar-items');
      const navbarBtn = document.querySelector('.navbar-toggler');

      navbar.classList.remove('show');
      navbarBtn.classList.add('collapsed');
    },
  },
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

      link.addEventListener('click', () => {
        this.hideNavbar();
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
    text-transform: uppercase;
  }
  .nav-link:hover {
    color: rgba(229, 220, 220, 0.6);
  }
  .underline {
    display: block;
    height: 3px;
    background: linear-gradient(to right, #ff4d4d, #ff9800);
    transform: scaleX(0);
    transition: transform 0.3s ease-out, background-color 0.3s ease-out;
  }
  .sr-only {
    display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    top: 8px;
    cursor: pointer;
  }

  .sr-only::before,
  .sr-only::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    left: 0px;
  }

  .sr-only::before {
    top: 4px;
    transform: rotate(45deg);
  }

  .sr-only::after {
    top: 4px;
    transform: rotate(-45deg);
  }

  .navbar-toggler.collapsed .sr-only::before {
    transform: rotate(0);
  }

  .navbar-toggler.collapsed .sr-only::after {
    top: 0;
    transform: rotate(0);
  }

@media screen and (max-width: 767px) {
  .container {
    padding: 0px;
  }
  .underline {
    display: none;
  }
  .navbar .container {
    justify-content: space-around;
  }
}
</style>
