<template>
  <div>
    <HeaderPage />
    <h1>This is an about page</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'FormularioView',
  components: {
    HeaderPage,
    HelloWorld,
  },
};
</script>
