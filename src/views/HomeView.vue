<template>
  <div class="home">
    <HeaderPage class="float-right"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import HeaderPage from '@/components/HeaderPage.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    HeaderPage,
  },
};
</script>

<style>
</style>
