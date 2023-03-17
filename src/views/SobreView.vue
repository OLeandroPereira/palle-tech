<template>
  <div>
    <LoadingPage />
  </div>
</template>

<script>
import LoadingPage from '@/components/LoadingPage.vue';

export default {
  name: 'SobreView',
  components: {
    LoadingPage,
  },
};
</script>

<style scoped>
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
