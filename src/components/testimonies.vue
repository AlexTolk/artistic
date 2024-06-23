<template>
  <div class="swiper-container">
    <h3>Отзывы</h3>
    <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :breakpoints="{
      '@0.00': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange">
      <swiper-slide v-for="(image, index) in images" >
        <img :src=image.src alt=""><caption> {{ image.caption }}</caption>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
          images: [
          { src: 'https://images.unsplash.com/photo-1616537937163-387d3f079de8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'От Мизаила Сергеевича' },
          { src: 'https://plus.unsplash.com/premium_photo-1679121588089-2f25bce9e1ee?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'От Нины Петровны' },
          { src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'От Марины Романовны' },
          { src: 'https://images.unsplash.com/photo-1604014237256-11d475e2a2d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'От Прокопа Укроповича' },
          { src: 'https://images.unsplash.com/photo-1576698483491-8c43f0862543?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'От Герасима Тургеневича' },
          { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', caption: 'От Акакия Акакиевича' },
          { src: 'https://unsplash.com/photos/white-ceramic-sink-with-faucet-RfXkG1qm1RI', caption: 'От Базыра Сада-Батуевича' }
        ]
      }
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>
<style>
  .swiper-container {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h3 {
    font-family: 'Cormorant Garamond';
    font-size: 3em;
    line-height: 0.9em;
    font-weight: 400;
    margin: 15vh;
  }
  .swiper {
    width: 90vw;
    height: 60vh;
    overflow: hidden;
  }
  .swiper img {
    height: 90%;
    width: 100%;
    object-fit: cover;
    border-radius: 50px;
    position: relative;
  }
  caption {
    background-color: #D3B99F;
    width: 100%;
    position: absolute;
    bottom: 40px;
    padding: 40px 0;
    border-radius: 0 0 50px 50px;
    font-family: 'Montserrat';
    font-size: 1.2em;
    color: #fff;
  }

  @media only screen and (max-width: 600px) {
    .swiper {
    width: 70vw;
    height: 40vh;
    overflow: hidden;
    }

    caption {
    background-color: #D3B99F;
    width: 100%;
    position: absolute;
    bottom: 30px;
    padding: 40px 0;
    border-radius: 0 0 50px 50px;
    font-family: 'Montserrat';
    font-size: 1.2em;
    color: #fff;
    }
  }
</style>
