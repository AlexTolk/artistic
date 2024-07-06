<script>

</script>
<template>
  <div class="pitch">
      <h6 v-motion-slide-visible-left>Почему выбирают нас</h6>
      <h4>Мы работаем только в Санкт-Петербурге. Благодаря этому мы поддерживаем качество и не распыляемся</h4>
      <hr>
      <div class="pitch-points">
        <div class="point"><h5>Гарантия</h5><p>Реальная гарантия от <strong>60 месяцев</strong></p></div>
        <div class="point"><h5>Выгода</h5><p>Ремонт ванной от <strong>27 000 руб.</strong></p></div>
        <div class="point"><h5>Скорость</h5><p>Ванна под ключ от <strong>12 дней</strong></p></div>
        <div class="point"><h5>Опыт</h5><p>Успешно трудимся начиная с <strong>2007 года</strong></p></div>
      </div>
      <a href="">Оставить заявку→</a>
    </div>
</template>
<style>
  .pitch {
    height: 70vh;
    width: 80vw;
    margin: 0 auto;
    background-color: #F4E8DA;
    padding: 50px;
    border-radius: 0 0 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .pitch-points {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .pitch h6 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2em;
    font-weight: 400;
    color: #693030;
  }
  .pitch h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8em;
    font-weight: 500;
  }
  .point {
    margin: 0 20px;
    width: 200px;
  }
  .point h5 {
    font-size: 2em;
    font-weight: 400;
    margin-bottom: 0;
  }
  .point p {
    /* font-size: 1.2em; */
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
  }
  .pitch a {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2em;
    color: #DBAF15;
    text-decoration: none;
    padding-top: 10px;
    text-align: center;
  }

  @media only screen and (max-width:600px) {
    .pitch {
      padding: 38px;
    }
    .pitch h4 {
      font-size: 1.5em;
    }
    .pitch a {
      font-size: 0.8em;
    }
    .pitch-points {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    .point {
      margin: 0;
      width: 30vw;
    }
    .point h5 {
      font-size: 1.5em;
    }
    .point p {
      font-size: 0.8em;
    }
  }
</style>
