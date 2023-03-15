<template>
  <div>
    <div>
    <HeaderPage />
    </div>
    <div class="container">
      <div class="banner">
        <div id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
        >
          <div class="carousel-indicators d-none d-md-block">
            <button type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0" class="active"
              aria-current="true"
              aria-label="Slide 1"
            >
            </button>
            <button type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
            </button>
            <button type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
            </button>
            <button type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            >
            </button>
            <button type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            >
            </button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/image/empilhadeira.jpg"
              class="img-fluid d-block w-100" alt="Pallets">
              <div class="carousel-caption">
                <h5>Profissionais qualificados</h5>
                <router-link class="btn btn-info" to="/formulario">Faça um orçamento</router-link>
              </div>
            </div>
            <div class="carousel-item active">
              <img src="../assets/image/estoque-externo-1.jpg"
              class="img-fluid d-block w-100" alt="Pallets">
              <div class="carousel-caption">
                <h5>Maior empresa do Litoral Paulista</h5>
                <router-link class="btn btn-info" to="/formulario">Faça um orçamento</router-link>
              </div>
            </div>
            <div class="carousel-item active">
              <img src="../assets/image/estoque-externo-2.jpg"
              class="img-fluid d-block w-100" alt="Pallets">
              <div class="carousel-caption">
                <h5>Produtos a pronta entrega</h5>
                <router-link class="btn btn-info" to="/formulario">Faça um orçamento</router-link>
              </div>
            </div>
            <div class="carousel-item active">
              <img src="../assets/image/exportacao.jpg"
              class="img-fluid d-block w-100" alt="Pallets">
              <div class="carousel-caption">
                <h5>Há mais de 15 anos exportando para o mundo</h5>
                <router-link class="btn btn-white"
                to="/formulario">Faça um orçamento</router-link>
              </div>
            </div>
            <div class="carousel-item active">
              <img src="../assets/image/caminhoes.jpg"
              class="img-fluid d-block w-100" alt="Pallets">
              <div class="carousel-caption">
                <h5>Frete gratuíto para o estado de São Paulo</h5>
                <router-link class="btn btn-white"
                to="/formulario">Faça um orçamento</router-link>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"
            aria-hidden="true"
            >
          </span>
            <span class="visually-hidden"
            >
            Previous
          </span>
          </button>
          <button class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"
            aria-hidden="true"
            >
          </span>
            <span class="visually-hidden"
            >
            Next
          </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';

export default {
  name: 'EmpresaView',
  components: {
    HeaderPage,
  },
};
</script>

<style scoped>
  .img-fluid {
    margin-top: 170px;
  }
  .btn {
    color: #F35A04;
    background: rgb(229, 225, 225);
    border-radius: 0;
    padding: 0.3 0.8em;
    font-size: 1em;
    margin-top: 1em;
  }
  .btn:hover {
    background: #F35A04;
  }
  .carousel-caption {
    bottom: 3em;
  }
  .carousel-caption h5 {
    font-size: 2.5em;
    text-shadow: #000 2px 2px
  }
  .carousel-control-prev,
  .carousel-control-next-icon {
    color: #111;
    font-size: 6em;
  }
</style>
