<template>
  <div class="prices">
      <h3>Цены на услуги по ремонту ванных комнат</h3>
      <div class="prices-grid">
        <ul>
          <h3>Отделка стен</h3>
          <li><p>Шпатлевка стен</p> <p class="bold-price">от 200р. кв.м.</p></li>
          <li><p>Облицовка стен мозаикой</p> <p class="bold-price">от 800р. кв.м.</p></li>
          <li><p>Укладка плитки на стены</p> <p class="bold-price">от 450р. кв.м.</p></li>
          <li><p>Декоративная штукатурка</p> <p class="bold-price">от 400р. кв.м.</p></li>
          <li><p>Покраска стен</p> <p class="bold-price">от 200р. кв.м.</p></li>
          <li><p>Штукатурка стен</p> <p class="bold-price">от 300р. кв.м.</p></li>
        </ul>
        <ul>
          <h3>Отделка стен</h3>
          <li><p>Шпатлевка стен</p> <p class="bold-price">от 200р. кв.м.</p></li>
          <li><p>Облицовка стен мозаикой</p> <p class="bold-price">от 800р. кв.м.</p></li>
          <li><p>Укладка плитки на стены</p> <p class="bold-price">от 450р. кв.м.</p></li>
          <li><p>Декоративная штукатурка</p> <p class="bold-price">от 400р. кв.м.</p></li>
          <li><p>Покраска стен</p> <p class="bold-price">от 200р. кв.м.</p></li>
          <li><p>Штукатурка стен</p> <p class="bold-price">от 300р. кв.м.</p></li>
        </ul>
        <ul>
          <h3>Отделка стен</h3>
          <li><p>Шпатлевка стен</p> <p class="bold-price">от 200р. кв.м.</p></li>
          <li><p>Облицовка стен мозаикой</p> <p class="bold-price">от 800р. кв.м.</p></li>
          <li><p>Укладка плитки на стены</p> <p class="bold-price">от 450р. кв.м.</p></li>
          <li><p>Декоративная штукатурка</p> <p class="bold-price">от 400р. кв.м.</p></li>
          <li><p>Покраска стен</p> <p class="bold-price">от 200р. кв.м.</p></li>
          <li><p>Штукатурка стен</p> <p class="bold-price">от 300р. кв.м.</p></li>
        </ul>
        <ul>
          <h3>Отделка стен</h3>
          <li><p>Шпатлевка стен</p> <p class="bold-price">от 200р. кв.м.</p></li>
          <li><p>Облицовка стен мозаикой</p> <p class="bold-price">от 800р. кв.м.</p></li>
          <li><p>Укладка плитки на стены</p> <p class="bold-price">от 450р. кв.м.</p></li>
          <li><p>Декоративная штукатурка</p> <p class="bold-price">от 400р. кв.м.</p></li>
          <li><p>Покраска стен</p> <p class="bold-price">от 200р. кв.м.</p></li>
          <li><p>Штукатурка стен</p> <p class="bold-price">от 300р. кв.м.</p></li>
        </ul>
      </div>
    </div>
</template>
<style>
  .prices {
    text-align: center;
  }
  .prices h3 {
    font-family: 'Cormorant Garamond';
    font-size: 3em;
    line-height: 0.9em;
    font-weight: 400;
    margin: 15vh;
  }
  .prices .prices-grid {
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 15vw;
  }
  .prices-grid ul{
    list-style: none;
    margin: 0;
  }
  .prices-grid h3{
    font-family: 'Cormorant Garamond', serif;
    font-size: 2em;
    margin: 5vh;
  }
  .prices-grid ul li{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid black;
    font-family: 'Montserrat', sans-serif;
  }
  .prices-grid ul li .bold-price{
    font-weight: 500;
  }

  @media only screen and (max-width: 600px) {
    .prices .prices-grid {
      display: flex;
      flex-direction: column;
      margin: 0;
    }
    .prices h3 {
      margin: 20px 10px;
      font-size: 2em;
      text-align: start;
    }
    .prices .prices-grid ul {
      margin: 10px;
      padding: 0;
    }
  }
</style>
