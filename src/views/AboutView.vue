<template>
  <div class="about">
    <HeaderPage />
    <h1>This is an about page</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import HeaderPage from '@/components/HeaderPage.vue';

export default {
  name: 'AboutView',
  components: {
    HelloWorld,
    HeaderPage,
  },
};
</script>
