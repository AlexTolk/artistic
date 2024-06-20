<script>
  import {ref} from 'vue'
  export default {
    name: 'PriceCalculator',
    props: {

    },
    data() {
      return {
        price: 0,
        typePrice: 0,
        surface: 0
      }
    },
    methods: {
      calculatePrice() {
        let basePrice = parseInt(this.typePrice) || 0;
        let surfacePrice = this.surface * 50;

        this.price = basePrice + surfacePrice;

      },
      handleTypeChange(event) {
        this.typePrice = event.target.value;
        this.calculatePrice();
      },
      handleSurfaceChange(event) {
        this.surface = event.target.value;
        this.calculatePrice();
      },
    }
  }
</script>
<template>
  <div class="calculator">
    <h3>Рассчитайте стоимость ремонта</h3>
    <div class="calculator-container">
      <div class="radio-buttons">
        <h4>Тип санузла:</h4>
        <form>
          <label for="combined">Совмещенный</label>
          <input type="radio" name="type" id="combined" value="100" v-model="typePrice" @change="handleTypeChange">
          <label for="split">Раздельный</label>
          <input type="radio" name="type" id="split" value="200" v-model="typePrice" @change="handleTypeChange">
          <label for="bathroom">Ванная комната</label>
          <input type="radio" name="type" id="bathroom" value="300" v-model="typePrice" @change="handleTypeChange">
          <label for="surface" id="sur">Площадь:</label >
          <input type="number" v-model="surface" @change="handleTypeChange">
        </form>
      </div>
      <div class="dropdowns">
        <div class="dropdown-item">
          <label for="">Материал отделки стен</label>
          <select name="walls" id="wall-select">
            <option value="tiles1">Плитка 1</option>
            <option value="tiles2">Плитка 2</option>
            <option value="tiles3">Плитка 3</option>
            <option value="tiles4">Плитка 4</option>
          </select>
        </div class="dropdown-item">
        <div class="dropdown-item">
          <label for="">Материал отделки пола</label>
          <select name="floors" id="floor-select">
            <option value="tiles1">Плитка 1</option>
            <option value="tiles2">Плитка 2</option>
            <option value="tiles3">Плитка 3</option>
            <option value="tiles4">Плитка 4</option>
          </select>
        </div class="dropdown-item">
        <div class="dropdown-item">
          <label for="">Материал отделки потолка</label>
          <select name="ceiling" id="ceiling-select">
            <option value="tiles1">Плитка 1</option>
            <option value="tiles2">Плитка 2</option>
            <option value="tiles3">Плитка 3</option>
            <option value="tiles4">Плитка 4</option>
          </select>
        </div class="dropdown-item">
      </div>
      <div class="extra">
        <h4>Дополнительные услуги</h4>
        <div class="extra-lists">
          <ul>
            <li><label for="toilet">Подвесной унитаз</label><input type="checkbox" name="extra" id="toilet"></li>
            <li><label for="shower">Душевая кабина</label><input type="checkbox" name="extra" id="shower"></li>
            <li><label for="bidet">Гигиенический душ (биде)</label><input type="checkbox" name="extra" id="bidet"></li>
            <li><label for="shelf">Конструкция из ГКП (ниши/полки)</label><input type="checkbox" name="extra" id="shelf"></li>
          </ul>
          <ul>
            <li><label for="heated-floor">Теплый пол</label><input type="checkbox" name="extra" id="heated-floor"></li>
            <li><label for="drain">Люк "неведимка" под плитку</label><input type="checkbox" name="extra" id="drain"></li>
            <li><label for="heater">Водонагреватель</label><input type="checkbox" name="extra" id="heater"></li>
          </ul>
        </div>
      </div>
      <h3> Цена: {{ price }}</h3>
      <div class="calc-form">
        <h3>Осталось заполнить форму</h3>
        <div class="calc-form-content">
          <p>Вы узнаете стоимость ремонта и получите скидку 10%</p>
          <input type="text" name="name" id="name">
          <input type="tel" name="" id="phone">
          <button>Рассчитать стоимость</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .calculator{
    margin: 10vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .calculator h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8em;
    font-weight: 500;
  }

  .calculator .radio-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .calculator .radio-buttons h4 {
    font-family: 'Montserrat', sans-serif;

  }
  .calculator .radio-buttons form input{
    padding: 10px;
    margin: 0 10px;
    background: #d0b194b7;
    border: none;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
  }
  .calculator .radio-buttons form label{
    padding: 0 5px;
    margin: 0 10px;
    font-family: 'Montserrat', sans-serif;
  }
  .calculator .dropdowns {
    display: flex;
    justify-content: space-around;
    align-content: center;
    margin: 5vh 0;
  }
  .calculator  .dropdowns .dropdown-item {
    display: flex;
    flex-direction: column;
  }
  .calculator .dropdowns .dropdown-item label{
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }

  .calculator .dropdowns .dropdown-item select{
    font-family: 'Montserrat', sans-serif;
    margin-top: 3vh;
    font-weight: 300;
    padding: 10px 0;
    background: #d0b194b7;
    border: none;
    border-radius: 10px;
  }
  .calculator .extra ul {
    list-style: none;
  }
  .calculator .extra {
    margin: 0 15vh;
  }
  .calculator .extra h4 {
    font-family: 'Montserrat', sans-serif;
  }
  .calculator .extra-lists {
    display: flex;
  }
  .calculator .extra-lists ul li{
    padding: 5px;
    font-family: 'Montserrat';
  }
  .calculator .extra-lists ul li label{
    margin-right: 10px;
  }
  .calculator .extra-lists ul li input{
    transform: scale(2)
  }
  .calculator .calc-form {
    margin: 5vh auto;
    background-color: #F6EDE3;
    padding: 10vh 5vw;
    border-radius: 20px;
  }
  .calculator .calc-form h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8em;
    font-weight: 500;
    margin: 0 0 20px 0;
  }
  .calculator .calc-form .calc-form-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .calculator .calc-form .calc-form-content p {
    font-family: 'Montserrat', sans-serif;
    margin-right: 10px;
    width: 25%;
    flex-wrap: wrap;
  }
  .calculator .calc-form .calc-form-content input {
    margin: 0 15px;
    border-radius: 10px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2em;
    padding: 15px 0;
  }
  .calculator .calc-form .calc-form-content button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2em;
    color: #DBAF15;
    background-color: #fff;
    border: 3px solid #DBAF15;
    border-radius: 10px;
    /* box-shadow: 0 0 10px 1px #DBAF15; */
    padding: 15px 5px;
  }
  .calculator .calc-form .calc-form-content button:hover {
    box-shadow: 0 0 10px 1px #DBAF15;
    cursor: pointer;
  }
</style>
