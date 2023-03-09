<template>
  <div class="home">
    <HeaderPage />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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

<style>
</style>
