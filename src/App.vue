<template>
  <div id="app">
    <header>
      <navbar />
    </header>
    <router-view/>
    <main>
      <banner/>
      <pitch v-motion-slide-visible-once-right />
      <shortForm />
      <services v-motion-pop-visible />
      <portfolio  />
      <calculator v-motion-pop-visible />
      <prices v-motion-slide-visible-once-right  />
      <description v-motion-slide-visible-once-left  />
      <testimonies v-motion-slide-visible-once-right  />
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
  </div>
</template>


<style scoped>

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

  @media only screen and (max-width: 600px) {
    footer {
      flex-direction: column;
    }
  }
</style>


<script setup>
import navbar from './components/navbar.vue';
import banner from './components/banner.vue';
import pitch from './components/pitch.vue';
import shortForm from './components/shortForm.vue';
import services from './components/services.vue';
import portfolio from './components/portfolio.vue';
import calculator from './components/calculator.vue';
import prices from './components/prices.vue';
import description from './components/description.vue';
import testimonies from './components/testimonies.vue';
import { RouterView } from 'vue-router';
import gsap from 'gsap'

function beforeEnter(el) {
  el.style.opacity = '0'
  el.style.transform = 'translateY(-100px)'
}
function enter(el, done) {
  gsap.to(el, {
    scrollTrigger: el,
    duration: 1,
    y: 0,
    opacity: 1,
    onComplete: done
  })
}
</script>
