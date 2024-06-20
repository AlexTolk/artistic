<template>
  <header>
    <nav>
      <div class="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/184/184128.png" alt="">
      </div>
      <ul>
        <li>Главная</li>
        <li>Цены</li>
        <li>Калькулятор ремонта</li>
        <li>Примеры работ</li>
        <li>Новости</li>
        <li>Отзывы</li>
        <li><strong>+8(950) 019 - 19 - 19</strong></li>
      </ul>
    </nav>
  </header>
  <main>
    <banner />
    <pitch />
    <shortForm />
    <services />
    <portfolio />
    <calculator />
    <prices />
    <description />
    <testimonies />
  </main>
  <footer>
    <div class="logo">
      <h4>ARTISTIC</h4>
      <p>Ремонт ванных комнат</p>
    </div>
    <div class="main-info">
      <h4>ГЛАВНАЯ</h4>
      <p>РЕМОНТ ВАННЫХ КОМНАТ</p>
      <p>НАШИ УСЛУГИ</p>
      <p>ФОТО РАБОТ</p>
      <p>ВИДЕО РАБОТ</p>
    </div>
    <div class="help">
      <h4>ПОМОЩЬ</h4>
        <p>ЦЕНЫ</p>
        <p>БЕСПЛАТНЫЙ ЗАМЕР</p>
        <p>КОНТАКТЫ</p>
    </div>
    <div class="contact">
      <div class="address">
        <h4>НАШ АДРЕС</h4>
        <p>Ремонт санузлов в Санкт-Петербурге</p>
        <p>08:00 - 20:00 Без выходных</p>
      </div>
      <div class="media">
        <h4>МЫ В СОЦСЕТЯХ</h4>
        <ul>
          <li>🥸</li>
          <li>🥸</li>
          <li>🥸</li>
          <li>🥸</li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script setup>

  import banner from './components/banner.vue';
  import pitch from './components/pitch.vue';
  import shortForm from './components/shortForm.vue';
  import services from './components/services.vue';
  import portfolio from './components/portfolio.vue';
  import calculator from './components/calculator.vue';
  import prices from './components/prices.vue';
  import description from './components/description.vue';
  import testimonies from './components/testimonies.vue';



</script>
<style scoped>
  nav {
    width: 100vw;
    display: flex;
    flex-direction: row;
    background-color: rgba(208,177,147, 0.8);
    align-items: center;
    justify-content: center;
    color: #fff
  }
  nav .logo img{
    height: 8vh;
  }
  nav ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
  nav ul li {
    padding: 0 10px;
    font-family: 'Montserrat', sans-serif;
  }
  nav ul li:hover {
    border-bottom: 1px solid brown;
    cursor: pointer;
  }
  footer {
    display: flex;
    margin-top: 20vh;
    padding: 0 10vw;
    justify-content: space-around;
    font-family: 'Montserrat', sans-serif;
    background-color: #FDFBF8;
  }
  footer .logo h4{
    margin-bottom: 10px;
  }
  footer .logo p{
    margin-top: 0;
  }
  footer .media ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin-top: 0;
    font-size: 1.5em;
  }
</style>
