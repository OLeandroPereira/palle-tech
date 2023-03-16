<template>
  <div id="app">
    <div :class="{ loading: isLoading }">
      <div class="spinner"></div>
      <p>Carregando...</p>
    </div>
    <nav>
      <HeaderPage />
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    fetchData() {
      console.log('teste');
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 900);
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #afafc0;
}

a {
  color: #3b83cc;

  &.router-link-exact-active {
    color: #d1d1dd;
  }
}
.loading {
  position: relative;
}
.loading .spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
