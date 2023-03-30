<template>
  <section class="row section-sobre" to="sobre-nos">
    <div class="container">
      <div class="row">
        <div class="description col-12 col-lg-6">
          <div class="company-info col-11 col-lg-9
            animate__animated animate__fadeInLeftBig"
            >
            <h2>Sobre nós</h2>
            <p>
              A Palle-Tech é uma empresa fundada pelo empreendedor Antônio,
              que é apaixonado por madeiras e identificou um grande potencial
              no mercado de pallets. Com vasta expertise no ramo, ele trabalhou
              incansavelmente para expandir o negócio e transformá-lo em uma
              referência no setor. Os valores fundamentais da empresa são
              qualidade, ética e excelência no atendimento, e são transmitidos
              por meio de sua cultura organizacional.
            </p>
          </div>
        </div>
        <div class="company-img col-12 col-lg-6  mb-sm-1
        animate__animated animate__fadeInRightBig">
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
.container {
  width: 75%;
}
.description {
  color: rgb(119, 111, 111);
}
.container {
  text-align: left;
  box-shadow: #c7bebe 2px 2px 2px 2px;
  display: flex;
  background: rgba(221, 211, 211, 0.152);
  margin-bottom: 20px;
}
.company-info {
  margin: 30px auto 0px;
  text-align: justify;
}
.company-img {
  margin: 10px auto 10px;
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
  .section-sobre {
    margin: 0px;
    padding: 0px;
  }
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: left;
    box-shadow: none;
    padding: 0px;
    margin: 0px;
    background-image: url('../assets/image/fundador-palle-tech.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.697);
    z-index: 1;
  }
  .description {
    padding: 0px;
  }
  .img-fluid {
    display: none;
  }
  h2 {
    position: relative;
    font-size: 24px;
    margin-bottom: 30px;
    color: #F35A04;
    z-index: 2;
  }
  p {
    position: relative;
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 0px;
    color: rgb(229, 225, 225);
    z-index: 2;
  }
  .company-info {
    justify-content: center;
    width: 80%;
  }
}
</style>
