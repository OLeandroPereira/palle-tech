<template>
  <section id="sobre-nos">
    <div class="container">
      <div class="row">
        <div class="description col-12 col-lg-6">
          <div class="company-info col-12 col-lg-6">
            <h2>Sobre nós</h2>
            <p>
              O senhor Antônio é um empreendedor apaixonado por madeiras e
              vislumbrou o potencial no mercado de pallets. Com sua expertise
              no ramo, fundou a Palle-Tech e trabalhou incessantemente para
              expandir a empresa e torná-la uma referência no setor. Os valores
              da empresa incluem qualidade, ética e excelência no atendimento,
              e são transmitidos pela cultura organizacional. A presença do senhor
              Antônio é sentida em cada pallet produzido e na satisfação de cada
              cliente atendido.
            </p>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <img src="../assets/image/fundador-palle-tech.jpg"
            class="img-fluid"
            alt="Fundador-Palle-Tech"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SobreView',
};
</script>

<style scoped>
  section #sobre-nos {
  text-align: center;
}
.description {
  color: rgb(119, 111, 111);
}
.container {
  text-align: left;
  box-shadow: #c7bebe 2px 2px 2px 2px;
  padding: 10px;
  display: flex;
  background: rgba(221, 211, 211, 0.152);
}
.company-info {
  margin: 30px auto 0px;
  width: 50%;
  text-align: justify;
}
h2 {
  font-size: 32px;
  margin-bottom: 30px;
  color: #F35A04;
}
p {
  font-size: 18px;
  line-height: 1.5;
}
@media (max-width: 960px) {
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  .company-info {
    justify-content: center;
    width: 75%;
  }
}
</style>
