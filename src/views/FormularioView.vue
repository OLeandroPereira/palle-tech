<template>
  <div>
    <h1>This is an about page</h1>
    <HelloWorld />
    <div v-if="showLoading" class="loading">
      <div v-show="showLoading" class="overlay">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'FormularioView',
  components: {
    HelloWorld,
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
  .btn {
    color: #F35A04;
    background: rgb(229, 225, 225);
    border-radius: 0;
    padding: 0.3 0.8em;
    font-size: 1em;
    margin-top: 1em;
  }
</style>
