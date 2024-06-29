<script>
  export default {
    name: 'Portfolio',
    data() {
      return {
        cards: [
          {title: 'Ремонт санузла в стиле лофт', topImgs: ['https://images.unsplash.com/photo-1595579987159-32ca7b85e0e2?q=80&w=360&auto=format&fit=cover', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=360&auto=format&fit=contain'], bottomImgs: ['https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format'], surface: '4.2', duration: '15'},
          {title: 'Ремонт ванной комнаты и санузла', topImgs: ['https://images.unsplash.com/photo-1553444835-65ddad82cd2d?q=80&w=360&auto=format&fit=content', 'https://images.unsplash.com/photo-1586798271654-0471bb1b0517?q=80&w=360&auto=format&fit=crop'], bottomImgs: ['https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format'], surface: '4.2', duration: '15'},
          {title: 'Ремонт ванной комнаты и санузла', topImgs: ['https://images.unsplash.com/photo-1518201660989-894b770d6e3c?q=80&w=360&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=360&auto=format'], bottomImgs: ['https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format'], surface: '4.2', duration: '15'},
          {title: 'Ремонт ванной комнаты и санузла', topImgs: ['https://images.unsplash.com/photo-1574088151430-76c8239f290b?q=80&w=360&auto=format&fit=crop', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=360&auto=format'], bottomImgs: ['https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format'], surface: '4.2', duration: '15'},
          {title: 'Ремонт ванной комнаты и санузла', topImgs: ['https://images.unsplash.com/photo-1553444835-65ddad82cd2d?q=80&w=360&auto=format&fit=content', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=360&auto=format'], bottomImgs: ['https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format'], surface: '4.2', duration: '15'},
          {title: 'Ремонт ванной комнаты и санузла', topImgs: ['https://images.unsplash.com/photo-1553444835-65ddad82cd2d?q=80&w=360&auto=format&fit=content', 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=360&auto=format'], bottomImgs: ['https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format', 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=360&auto=format'], surface: '4.2', duration: '15'}
        ]
      }
    }
  }
</script>
<template>
  <div class="portfolio">
      <h3>Примеры работ</h3>
      <div class="grid-container">
        <div class="card-big" v-for="(card, index) in cards" :key="index">
          <div class="pics-grid">
            <div class="top-imgs">
              <div class="img" :style="{
                backgroundImage: 'url(' + card.topImgs[0] + ')'} " style="background-size: cover;"><p>До</p></div>
              <div class="img" :style="{
                backgroundImage: 'url(' + card.topImgs[1] + ')'}" style="background-size: cover;"><p>После</p></div>
            </div>
            <div class="bottom-imgs">
              <div class="img" :style="{
                backgroundImage: 'url(' + card.bottomImgs[0] + ')'}" style="background-size: cover;"></div>
              <div class="img" :style="{
                backgroundImage: 'url(' + card.bottomImgs[1] + ')'}" style="background-size: cover;"></div>
              <div class="img" :style="{
                backgroundImage: 'url(' + card.bottomImgs[2] + ')'}" style="background-size: cover;"></div>
            </div>
          </div>
          <div class="card-content">
            <h5> {{ card.title }} </h5>
            <div class="info">
              <p><strong>4.2m2</strong> <br>площадь санузла</p>
              <p><strong>15 дней</strong> <br>сроки ремонта</p>
            </div>
            <iframe width="250" height="180" src="https://www.youtube.com/embed/3PCsTfEbda0?si=B4j0B0LCKUI5lHL6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <a href="">Подробнее</a>
          </div>
        </div>
      </div>
    </div>
</template>
<style>
  .portfolio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .portfolio h3 {
    font-family: 'Cormorant Garamond';
    font-size: 3em;
    line-height: 0.9em;
    font-weight: 400;
    margin: 15vh;
    }
  .portfolio .grid-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 0 5vw;
  }
  .card-big {
    display: flex;
    flex-direction: row;
    padding: 25px;
    border-radius: 25px;
    box-shadow: 0 0 10px 2px rgb(112, 101, 101);
    height: 50vh;
  }
  .card-big .pics-grid{
    display: grid;
    grid-template-rows: 4fr 2fr;
  }
  .card-big .pics-grid .top-imgs{
    display: flex;
    margin-right: 20px;
  }
  .card-big .pics-grid .top-imgs .img{
    width: 10vw;
    height: 30vh;
    margin: 0 2px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .card-big .pics-grid .top-imgs .img p {
    text-align: center;
    font-family: 'Montserrat';
    color:white;
    background-color: #D3B99F;
    padding: 5px 0;
    width: 100%;
  }
  .card-big .pics-grid .top-imgs .img:nth-child(2){
    border-radius: 0 20px 20px 0;
  }
  .card-big .pics-grid .top-imgs .img:nth-child(1){
    border-radius: 20px 0 0 20px;
  }
  .card-big .pics-grid .bottom-imgs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-right: 20px;
  }
  .card-big .pics-grid .bottom-imgs .img{
    /* background-color: #693030; */
    border-radius: 20px;
  }
  .card-big .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: baseline;
  }
  .card-big .card-content h5{
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2em;
    font-weight: 500;
    margin: 0 0 30px 0;
  }
  .card-big .card-content .info {
    display: flex;
    margin-bottom: 30px;
  }
  .card-big .card-content .info p{
    margin: 0 5px;
    font-family: 'Montserrat';
    font-size: 0.9em;
  }
  .card-big .card-content  a{
    font-family: 'Montserrat';
    padding: 10px 12px;
    margin-top: 20px;
    width: 50%;
    text-align: center;
    font-size: 0.9em;
    color: #DBAF15;
    background-color: #fff;
    border: 2px solid #DBAF15;
    box-shadow: 0 0 10px 3px #DBAF15;
    border-radius: 50px;
  }
  @media only screen and (max-width: 600px) {
    .portfolio .grid-container {
      display: grid;
      grid-template-columns: 1fr;
      margin: 0 5vw;
    }
    .portfolio h3 {
      font-size: 2em;
      margin: 100px 10px 20px 10px;
    }
    .card-big {
      flex-direction: column;
      align-items: center;
      height: 80vh;
      width: 100vw;
      padding: 25px 0;
      border-radius: 0;
    }
    .card-big .pics-grid .top-imgs{
      margin: 0;
    }
    .card-big .pics-grid .top-imgs .img {
    width: 45vw;
    height: 25vh;
    margin: 2px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    }
    .card-big .pics-grid .bottom-imgs{
     margin: 10px 0;
    }
    .card-big .pics-grid .bottom-imgs .img{
     display: block;
    }
  }
</style>
