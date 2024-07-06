<script>
  export default {
    data() {
      return {
        services: [
          { description: 'Ремонт санузлов под ключ', url: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?q=80&w=360&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { description: 'Закупка и доставка товаров', url: 'https://images.unsplash.com/photo-1611491064644-a9ff17219a53?q=80&w=360&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
          { description: 'Демонтажные работы', url: 'https://images.unsplash.com/photo-1505855796860-aa05646cbf1f?q=80&w=360&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { description: 'Разводка электропроводки', url: 'https://images.unsplash.com/photo-1557516300-46e218a6961f?q=80&w=240&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { description: 'Укладка плитки на стены и пол', url: 'https://plus.unsplash.com/premium_photo-1683121304531-8d12ffd0c8f5?q=80&w=360&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { description: 'Разводка труб', url: 'https://images.unsplash.com/photo-1616661317985-aeb2a13016d6?q=80&w=360&auto=format&&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { description: 'Отделка стен', url: 'https://images.unsplash.com/photo-1509624776920-0fac24a9dfda?q=80&w=360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { description: 'Выравнивание полов', url: 'https://plus.unsplash.com/premium_photo-1682597000932-d7041f42f669?q=80&w=360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { description: 'Отделка потолка', url: 'https://images.unsplash.com/photo-1517414628894-83d47b22f233?q=80&w=360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { description: 'Дизайн-проект', url: 'https://plus.unsplash.com/premium_photo-1683133689118-c0cee7fd9820?q=80&w=360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { description: 'Установка бытовой техники', url: 'https://images.unsplash.com/photo-1595514535316-b8c85bf9bbf9?q=80&w=360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { description: 'Установка сантехники', url: 'https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?q=80&w=360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ]
      }
    }
  }
</script>
<template>
  <div class="services">
    <h3>Виды работ</h3>
    <div class="services-grid">
      <div class="card" v-motion-roll v-for="(service, index) in services" :style="{
            backgroundImage: 'url(' + service.url + ')'}">
          <p>{{ service.description }}</p>
      </div>
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
    object-fit: cover;
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
      gap: 20px;
      grid-template-columns: 1fr 1fr;
      margin: 0 10px;
    }
    .services h3{
      width: fit-content;
      margin: 80px auto;
      font-size: 2em;
      padding-bottom: 10px;
      border-bottom: 1px solid black;
    }
    .services-grid .card {
      height: 140px;
      width: 165px;
      box-shadow: 2px 3px 10px 2px rgb(81, 79, 79);
    }
    .services-grid .card p {
      font-size: 1em;
    }
  }
</style>
