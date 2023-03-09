<template>
  <div class="produtos">
    <HeaderPage />
    <h1 class="display-4">Bem-vindo à empresa de Pallets</h1>
    <p class="lead">Nós fornecemos pallets de alta qualidade para atender às suas necessidades
      de transporte e armazenamento.</p>
    <hr class="my-4">
    <p>Confira nossos produtos abaixo e entre em contato para fazer seu pedido.</p>
    <button class="btn btn-primary btn-lg" @click="$router.push('/produtos')">Ver Produtos</button>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';

export default {
  components: { HeaderPage },
  name: 'CadastroPage',
};
</script>

<style>
/* Utilize classes do Bootstrap para estilizar o conteúdo */
</style>
