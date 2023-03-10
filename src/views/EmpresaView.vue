<template>
  <div>
    <div class="bg-image"></div>
    <HeaderPage />
    <img alt="Vue logo" src="../assets/image/empilhadeira.jpg"
    style="width: 50%; object-fit:contain; float: left;">
    <div class="container">
      <h2>Logística eficiente com profissionais qualificados para entregas seguras e rápidas"</h2>
      <p>
        Nós da <span>Palle-Tech</span> acreditamos que a entrega rápida e
        segura é essencial para o sucesso dos nossos clientes. Por isso,
        contamos com profissionais qualificados e experientes em logística,
        que trabalham com dedicação para garantir que seus equipamentos cheguem ao
        destino final no prazo estipulado e em perfeito estado.
        </p>
    </div>
    <div class="content">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <HeaderPage />
    <img alt="Vue logo" src="../assets/image/empilhadeira.jpg"
    style="width: 100%; height: 100%; object-fit: cover;">
    <div class="content">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HeaderPage from '@/components/HeaderPage.vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'EmpresaView',
  components: {
    HeaderPage,
    HelloWorld,
  },
};
</script>

<style scoped>
.bg-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/image/pallets.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
}

.bg-image::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.container {
  width: 50%;
  float: right;
  padding: 150px 100px;
}

.content {
  position: relative;
  z-index: 1;
  padding-top: 70%;
}
h2 {
  color: orange;
}
p {
  font-weight: 100;
  line-height: 1.8;
  padding: 30px;
  font-size: 24px;
  color: rgb(238, 227, 227);
}
span {
  color: orange;
}
</style>
