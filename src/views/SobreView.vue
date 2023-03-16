<template>
  <div>
    <headerPage />
    <div v-if="showLoading" class="loading">
      <div v-show="showLoading" class="overlay">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';

export default {
  name: 'SobreView',
  components: {
    HeaderPage,
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
  img {
    margin-top: 100px;
  }
  .btn {
    color: #F35A04;
    background: rgb(229, 225, 225);
    border-radius: 0;
    padding: 0.3 0.8em;
    font-size: 1em;
    margin-top: 1em;
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
</style>
