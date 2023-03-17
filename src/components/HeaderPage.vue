<template>
  <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark" id="navbar">
    <div class="container">
      <router-link to="/" class="navbar-brand">
      <img src="../assets/image/logo3.png" alt="Palle-Tech" style="width: 90px;"/>
      </router-link>
      <button
        class="navbar-toggler collapsed mobile-menu-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-items"
        aria-controls="navbar-items"
        style="cursor:pointer"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span class="sr-only"></span>
      <span class="navbar-toggler-icon"></span>
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
  .navbar-toggler-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: relative;
  top: 3px;
  cursor: pointer;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: #000;
  position: absolute;
  left: 0;
}

.navbar-toggler-icon::before {
  top: -6px;
  transform: rotate(45deg);
}

.navbar-toggler-icon::after {
  top: 6px;
  transform: rotate(-45deg);
}

.navbar-toggler.collapsed .navbar-toggler-icon::before {
  top: 0;
  transform: rotate(0);
}

.navbar-toggler.collapsed .navbar-toggler-icon::after {
  top: 0;
  transform: rotate(0);
}

@media screen and (max-width: 767px) {
  .underline {
    display: none;
  }
}
</style>
