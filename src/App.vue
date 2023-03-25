<template>
  <div id="app">
    <LoadingPage />
    <nav>
      <HeaderPage />
    </nav>
    <div v-if="showLoading" class="loading">
      <div v-show="showLoading" class="overlay">
        <div class="loader"></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';

export default {
  components: {
    HeaderPage,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #afafc0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: #3b83cc;

  &.router-link-exact-active {
    color: #d1d1dd;
  }
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
  @media screen and (max-width: 767px) {
    .loader {
      width: 80px;
      height: 80px;
    }
  }
</style>
