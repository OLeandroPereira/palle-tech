<template>
  <div>
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
  name: 'SobreView',
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
