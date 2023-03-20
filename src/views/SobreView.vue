<template>
  <section id="sobre-nos">
    <div class="container">
      <h2>Sobre nós</h2>
      <p>
        Nós somos uma empresa de pallets fundada em 14 de novembro de 2003.
        Com profissionais qualificados, exportamos há 15 anos para o mundo.
        Começamos em um quintal, no fundo de uma casa, alugando pallets.
        Ao longo dos anos, nos tornamos a maior empresa exportadora de pallets do Brasil.
        Temos estoque a pronta entrega e oferecemos frete gratuito para o estado de São Paulo.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SobreView',
};
</script>

<style scoped>
#sobre-nos {
  padding: 50px 0;
  background-color: #f9f9f9;
}
.container {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}
h2 {
  font-size: 32px;
  margin-bottom: 30px;
}
p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 30px;
}
</style>
