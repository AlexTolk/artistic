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
    <div class="banner">
      <h1>ARTISTIC</h1>
      <h4>Бережный и аккуратный ремонт для вашей ванной</h4>
    </div>
    <div class="pitch">
      <h6>Почему выбирают нас</h6>
      <h4>Мы работаем только в Санкт-Петербурге. Благодаря этому мы поддерживаем качество и не распыляемся</h4>
      <hr>
      <div class="pitch-points">
        <div class="point"><h5>Гарантия</h5><p>Реальная гарантия от <strong>60 месяцев</strong></p></div>
        <div class="point"><h5>Выгода</h5><p>Ремонт ванной от <strong>27 000 руб.</strong></p></div>
        <div class="point"><h5>Скорость</h5><p>Ванна под ключ от <strong>12 дней</strong></p></div>
        <div class="point"><h5>Опыт</h5><p>Успешно трудимся начиная с <strong>2007 года</strong></p></div>
      </div>
      <a href="">Оставить заявку</a>
    </div>
    <div class="short-form-section">
      <h3>Рассчитайте стоимость санузла быстро <div class="underlined">и легко со скидкой <strong>5000 рублей</strong></div id="underlined"></h3>
      <div class="img-form">
        <div class="img">
          <img src="https://images.unsplash.com/photo-1596180737956-00cb917e382b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>
        <form>
          <label for="text">Площадь санузла</label>
          <input type="text">
          <label for="text">Имя</label>
          <input type="text">
          <label for="text">Телефон</label>
          <input type="text">
          <button>Рассчитать стоимость</button>
        </form>
      </div>
    </div>
    <div class="services">
      <h3>Виды работ</h3>
      <div class="services-grid">
        <div class="card"><p>Ремонт санузлов под ключ</p></div>
        <div class="card"><p>Закупка и доставка товаров</p></div>
        <div class="card"><p>Демонтажные работы</p></div>
        <div class="card"><p>Разводка электропроводки</p></div>
        <div class="card"><p>Укладка плитки на стены и пол</p></div>
        <div class="card"><p>Разводка труб</p></div>
        <div class="card"><p>Отделка стен</p></div>
        <div class="card"><p>Выравнивание полов</p></div>
        <div class="card"><p>Отделка потолка</p></div>
        <div class="card"><p>Дизайн-проект</p></div>
        <div class="card"><p>Установка бытовой техники</p></div>
        <div class="card"><p>Установка сантехники</p></div>
      </div>
    </div>
  </main>
  <footer></footer>
</template>
<script></script>
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
  }
  .banner {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(22, 16, 16, 0.55) 90.62%), url('https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    color: #fff;
  }
  .banner h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5em;
  }
  .banner h4 {
    font-family: 'Cormorant Garamond';
    font-size: 2.5em;
    margin-top: 0;
  }
  .pitch {
    height: 70vh;
    width: 80vw;
    margin: 0 auto;
    background-color: #F4E8DA;
    padding: 50px;
    border-radius: 0 0 20px 20px;
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
  }
  .short-form-section h3 {
    font-family: 'Cormorant Garamond';
    font-size: 3em;
    line-height: 0.9em;
    font-weight: 400;
    margin: 10vh 10vw;
  }
  .short-form-section h3 strong {
    color: #DBAF15;
  }
  /* .underlined {
    text-decoration: underline;
  } */
  .img-form {
    display: flex;
    justify-content: space-between;
    padding: 30px 200px 30px 0;
    background: linear-gradient(240deg, #F2E5D5 0%, #fff);
    width: 80vw;
    border-radius: 30px;
  }
  .img-form form {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 25%;
  }
  .img-form form input{
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
  }
  .img-form form label{
    font-family: 'Montserrat';
    margin-top: 10px;
    border-radius: 5px;
  }
  .img-form form button{
    font-family: 'Montserrat';
    padding: 15px 20px;
    margin-top: 30px;
    font-size: 1.3em;
    color: #DBAF15;
    background-color: #fff;
    border: 2px solid #DBAF15;
    box-shadow: 0 0 10px 3px #DBAF15;
    border-radius: 50px;
  }
  .img-form .img{
    background: linear-gradient(90deg, rgba(255, 254, 254, 0), rgba(255, 254, 254, 1), url(''));
    height: 40vh;
  }
  .img-form img{
    height: 40vh;
  }
  .services {
    text-align: center;
  }
  .services h3 {
    font-family: 'Cormorant Garamond';
    font-size: 3em;
    line-height: 0.9em;
    font-weight: 400;
    margin: 15vh;
  }
  .services-grid {
    margin: 0 10vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .card {
    height: 30vh;
    background: url('https://www.bankrate.com/2020/02/01085835/How-much.jpg?auto=webp&optimize=high&crop=16:9');
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
  }
  .card p {
    background-color: #d0b194b7;
    width: 100%;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2em;
    padding: 10px 0;
  }
</style>
