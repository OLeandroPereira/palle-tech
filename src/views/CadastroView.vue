<template>
  <div>
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
              class="img-fluid" alt="Pallets">
              <div class="carousel-caption">
                <h5>Profissionais qualificados</h5>
                <router-link class="btn btn-info" to="/formulario"
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
              class="img-fluid" alt="Pallets">
              <div class="carousel-caption">
                <h5>Maior empresa do Litoral Paulista</h5>
                <router-link class="btn btn-info" to="/formulario"
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
              class="img-fluid" alt="Pallets">
              <div class="carousel-caption">
                <h5>Produtos a pronta entrega</h5>
                <router-link class="btn btn-info" to="/formulario"
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
              class="img-fluid" alt="Pallets">
              <div class="carousel-caption">
                <h5>Há mais de 15 anos exportando para o mundo</h5>
                <router-link class="btn btn-info" to="/formulario"
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
              class="img-fluid" alt="Pallets">
              <div class="carousel-caption">
                <h5>Frete gratuíto para o estado de São Paulo</h5>
                <router-link class="btn btn-info" to="/formulario"
                @click="redirectToForm">Faça um orçamento</router-link>
                <div v-if="showLoading" class="loading">
                  <div v-show="showLoading" class="overlay">
                    <div class="loader"></div>
                  </div>
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
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CadastroView',
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
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }

  /* CSS do loader */
  .loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 768px) {
    .carousel-control-prev,
    .carousel-control-next {
      top: 60%;
      transform: translateY(-50%);
    }
    .carousel-caption h5 {
      font-size: 1em;
      text-shadow: #000 1px 1px;
    }
    .btn {
      color: #F35A04;
      background: rgb(229, 225, 225);
      border-radius: 0;
      padding: 0.3 0.8em;
      font-size: 0.6em;
      margin-top: 0.6em;
    }
    .container {
      padding: 0;
    }
    .loader {
      width: 80px;
      height: 80px;
    }
  }
</style>
