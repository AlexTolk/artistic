<template>
  <nav>
    <div class="logo">
      <img src="https://cdn-icons-png.flaticon.com/512/184/184128.png" alt="Logo">
      <div class="logo-text">
        <h4>ARTISTIC</h4>
        <p>ремонт ванных комнат</p>
      </div>
    </div>
    <ul v-if="!mobileMenu">
      <li>Главная</li>
      <li>Цены</li>
      <li>Калькулятор ремонта</li>
      <li>Примеры работ</li>
      <li>Новости</li>
      <li>Отзывы</li>
    </ul>
    <p><strong>+8(950) 019 - 19 - 19</strong></p>
    <div class="burger-menu" v-if="!mobileMenu" @click="toggleMobileMenu">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" alt="Menu" height="30px">
    </div>
    <div class="burger-menu" v-if="mobileMenu" @click="toggleMobileMenu">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cross_icon_%28white%29.svg/2048px-Cross_icon_%28white%29.svg.png" alt="Menu" height="20px">
    </div>
  </nav>
  <ul v-if="mobileMenu" class="mobile-menu">
    <li>Главная</li>
    <li>Цены</li>
    <li>Калькулятор ремонта</li>
    <li>Примеры работ</li>
    <li>Новости</li>
    <li>Отзывы</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        mobileMenu: false
      };
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenu = !this.mobileMenu;
      }
    }
  };
</script>



<style scoped>
  nav {
    width: 100vw;
    display: flex;
    flex-direction: row;
    background-color: rgba(208,177,147, 0.8);
    align-items: center;
    justify-content: space-around;
    color: #fff;
    padding: 10px 20px;
  }
  nav .logo img {
    height: 8vh;
  }
  nav .logo {
    display: flex;
    align-items: center;
  }
  nav .logo .logo-text h4 {
    margin: 10px 0 0 5px;
    font-family: 'Montserrat', sans-serif;
  }
  nav .logo .logo-text p {
    margin: 5px 0 0 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.6em;
  }
  nav ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  nav ul li {
    padding: 0 10px;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
  }
  nav ul li:hover {
    border-bottom: 1px solid brown;
  }
  nav p {
    font-family: 'Montserrat', sans-serif;
  }
  nav .burger-menu {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    nav {
      justify-content: space-evenly;
      padding: 0;
    }
    nav ul {
      display: none;
    }
    nav p {
      font-size: 0.8em;
    }
    nav .logo img {
      height: 30px;
    }
    nav .logo .logo-text h4 {
      font-size: 0.8em;
    }
    nav .logo .logo-text p {
      margin: 5px;
    }
    nav .burger-menu {
      display: block;
      cursor: pointer;
    }
    .mobile-menu {
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 80vh;
      background-color: rgba(208,177,147, 0.8);
    }
    .mobile-menu li {
      padding: 10px 20px;
      border-bottom: 1px solid brown;
      font-family: 'Montserrat', sans-serif;
      cursor: pointer;
    }
  }
</style>
