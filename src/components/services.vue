<script>

</script>
<template>
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
</template>
<style>
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

  @media only screen and (max-width:600px) {
    .services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
