<template>
  <div>
    <div>
      <div class="banner mt-5">
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
            class="image-company w-75" alt="Pallets">
            <div class="carousel-caption">
              <h5>Profissionais qualificados</h5>
              <router-link class="btn" to="/formulario"
              @click="redirectToForm">Faça um orçamento</router-link>
              <div v-if="showLoading" class="loading">
                <div v-show="showLoading" class="overlay">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/image/estoque-externo-1.jpg"
            class="image-company w-75" alt="Pallets">
            <div class="carousel-caption">
              <h5>Maior empresa do Litoral Paulista</h5>
              <router-link class="btn" to="/formulario"
              @click="redirectToForm">Faça um orçamento</router-link>
              <div v-if="showLoading" class="loading">
                <div v-show="showLoading" class="overlay">
                  <div class="loader"></div>
                </div>
              </div>
            </div >
          </div>
          <div class="carousel-item">
            <img src="../assets/image/estoque-externo-2.jpg"
            class="image-company w-75" alt="Pallets">
            <div class="carousel-caption">
              <h5>Produtos a pronta entrega</h5>
              <router-link class="btn" to="/formulario"
              @click="redirectToForm">Faça um orçamento</router-link>
              <div v-if="showLoading" class="loading">
                <div v-show="showLoading" class="overlay">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/image/exportacao.jpg"
            class="image-company w-75" alt="Pallets">
            <div class="carousel-caption">
              <h5>Há mais de 15 anos exportando para o mundo</h5>
              <router-link class="btn" to="/formulario"
              @click="redirectToForm">Faça um orçamento</router-link>
              <div v-if="showLoading" class="loading">
                <div v-show="showLoading" class="overlay">
                  <div class="loader"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/image/caminhoes.jpg"
            class="image-company w-75" alt="Pallets">
            <div class="carousel-caption">
              <h5>Frete gratuíto para o estado de São Paulo</h5>
              <div class="btn-container"></div>
                <router-link class="btn" to="/formulario"
                @click="redirectToForm">Faça um orçamento</router-link>
                <div v-if="showLoading" class="loading">
                  <div v-show="showLoading" class="overlay">
                    <div class="loader"></div>
                  </div>
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
          <SobreView />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SobreView from './SobreView.vue';

export default {
  name: 'EmpresaView',
  components: {
    SobreView,
  },
  data() {
    return {
      showLoading: false,
    };
  },
  methods: {
    redirectToForm() {
      this.showLoading = true;
    },
  },
  beforeRouteLeave(to, from, next) {
    this.showLoading = true;
    setTimeout(() => {
      next();
    }, 700);
  },
};
</script>

<style scoped>
  .banner {
    text-align: center;
  }
  .image-company {
    margin-bottom: 2em;
  }
  .btn-container {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .btn {
    color: rgb(229, 225, 225);
    background: #F35A04;
    border-radius: 0;
    padding: 0.3 0.8em;
    font-size: 1em;
    margin-top: 1em;
    bottom: 10px;
    right: 10px;
  }
  .btn:hover {
    background: #bc4b0a;
  }
  .carousel-indicators {
    margin-bottom: 4em;
  }
  .carousel-caption {
    padding: 0px;
    bottom: 5.5em;
  }
  .carousel-caption h5 {
    font-size: 2.5em;
    text-shadow: #000 2px 2px;
  }
  .carousel-control-prev,
  .carousel-control-next {
    top: 50%;
    transform: translateY(-50%);
  }
  .carousel-control-prev,
  .carousel-control-next {
    height: 1em;
    width: 1em;
    font-size: 3em;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .container {
    justify-content: center;
    text-align: center;
    margin: auto;
  }
  h2 {
    font-size: 32px;
    margin-bottom: 30px;
  }
  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    .image-company {
      text-align: center;
      width: 100% !important;
    }
    .carousel-control-prev,
    .carousel-control-next {
      top: 60%;
      transform: translateY(-50%);
    }
    .carousel-caption h5 {
      font-size: 1.5em;
      text-shadow: #000 1px 1px;
    }
    .btn {
      color: rgb(229, 225, 225);
      background: #F35A04;
      border-radius: 0;
      padding: 0.1 0.2em;
      font-size: 0.8em;
      margin-top: 0.3em;
    }
    .loader {
      width: 80px;
      height: 80px;
    }
    .carousel-indicators {
      margin-bottom: 0.6em;
    }
    .carousel-control-prev,
    .carousel-control-next {
      height: 2em;
      width: 2em;
      font-size: 0.8em;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .carousel-caption {
      bottom: 2.5em;
    }
    h2 {
    font-size: 24px;
    margin-bottom: 20px;
    }
    p {
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 30px;
    }
  }
</style>
