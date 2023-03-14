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
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/image/pallets.jpg"
              class="img-fluid d-block w-100" alt="Pallets">
            </div>
            <div class="carousel-item active">
              <img src="../assets/image/empilhadeira.jpg"
              class="img-fluid d-block w-100" alt="Pallets">
            </div>
            <div class="carousel-item active">
              <img src="../assets/image/pallets.jpg"
              class="img-fluid d-block w-100" alt="Pallets">
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
    margin-top: 190px;
  }
</style>
