<template>
  <div class="swiper-container">
    <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange">
      <swiper-slide v-for="(image, index) in images" >
        <img :src=image.src alt="">
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
        { src: 'https://images.unsplash.com/photo-1515161318750-781d6122e367?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D', caption: 'Bitch 1' },
        { src: 'https://images.unsplash.com/photo-1583900985737-6d0495555783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D', caption: 'Bitch 2' },
        { src: 'https://images.unsplash.com/photo-1557244056-ac3033d17d9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D', caption: 'Bitch 3' },
        { src: 'https://images.unsplash.com/photo-1574539602047-548bf9557352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2V4eSUyMGdpcmx8ZW58MHx8MHx8fDA%3D', caption: 'Bitch 4' },
        { src: 'https://images.unsplash.com/photo-1525672716948-1f0bb9c49883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNleHklMjBnaXJsfGVufDB8fDB8fHww', caption: 'Bitch 5' },
        { src: 'https://images.unsplash.com/photo-1568819317551-31051b37f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNleHklMjBnaXJsfGVufDB8fDB8fHww', caption: 'Bitch 6' },
        { src: 'https://images.unsplash.com/photo-1565294124524-200bb738cdb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNleHklMjBnaXJsfGVufDB8fDB8fHww', caption: 'Bitch 7' },
        { src: 'https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNleHklMjBnaXJsfGVufDB8fDB8fHww', caption: 'Bitch 8' },
        { src: 'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlraW5pJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D', caption: 'Bitch 9' },
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
    margin: 0 10vh;
  }
  .swiper {
    width: 60vw;
    height: 60vh;
    overflow: hidden;
  }
  .swiper img {
    height: 100%
  }
</style>
