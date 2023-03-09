<template>
  <div class="about">
    <HeaderPage />
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';

export default {
  name: 'AboutView',
  components: {
    HeaderPage,
  },
};
</script>
