<script>
  export default {
    name: 'Calculator',
    data() {
      return {
        price: 0,
        typePrice: 0,
        surface: 0,
        extraServices: {
          toilet: false,
          shower: false,
          bidet: false,
          shelf: false,
          heatedFloor: false,
          drain: false,
          heater: false,
        },
        extraServicePrices: {
          toilet: 100,
          shower: 200,
          bidet: 150,
          shelf: 120,
          heatedFloor: 250,
          drain: 80,
          heater: 300,
        },
        wallMaterial: '',
        floorMaterial: '',
        ceilingMaterial: '',
        materialPrices: {
          tiles1: 50,
          tiles2: 70,
          tiles3: 90,
          tiles4: 110,
        },
        form: {
          name: '',
          phone: ''
        },
        errors: {
          typePrice: '',
          surface: '',
          wallMaterial: '',
          floorMaterial: '',
          ceilingMaterial: '',
          name: '',
          phone: ''
        }
      };
    },
    computed: {
      isTypePriceValid() {
        return this.typePrice > 0;
      },
      isSurfaceValid() {
        return this.surface > 0;
      },
      isWallMaterialValid() {
        return this.wallMaterial !== '';
      },
      isFloorMaterialValid() {
        return this.floorMaterial !== '';
      },
      isCeilingMaterialValid() {
        return this.ceilingMaterial !== '';
      },
      isNameValid() {
        const nameRegex = /^[A-Za-z\s]{3,}$/;
        return nameRegex.test(this.form.name.trim());
      },
      isPhoneValid() {
        const phoneRegex = /\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
        return phoneRegex.test(this.form.phone);
      },
      isFormValid() {
        return this.isTypePriceValid && this.isSurfaceValid && this.isWallMaterialValid &&
               this.isFloorMaterialValid && this.isCeilingMaterialValid && this.isNameValid &&
               this.isPhoneValid;
      },
      validationErrors() {
        const errors = {};
        if (!this.isTypePriceValid) {
          errors.typePrice = 'Выберите тип';
        }
        if (!this.isSurfaceValid) {
          errors.surface = 'Введите площадь';
        }
        if (!this.isWallMaterialValid) {
          errors.wallMaterial = 'Введите материал стены';
        }
        if (!this.isFloorMaterialValid) {
          errors.floorMaterial = 'введте материал пола';
        }
        if (!this.isCeilingMaterialValid) {
          errors.ceilingMaterial = 'Введите материал потолка';
        }
        if (!this.isNameValid) {
          errors.name = 'Введите имя (от 2 символов)';
        }
        if (!this.isPhoneValid) {
          errors.phone = 'номер телефона обязателен';
        }
        return errors;
      }
    },
    methods: {
      calculatePrice() {
        if (!this.isFormValid) {
          this.errors = this.validationErrors;
          return;
        }

        let basePrice = parseInt(this.typePrice) || 0;
        let surfacePrice = this.surface * 50; // Assuming each square meter costs 50 units

        let extraPrice = Object.keys(this.extraServices).reduce((sum, service) => {
          return sum + (this.extraServices[service] ? this.extraServicePrices[service] : 0);
        }, 0);

        let wallPrice = this.materialPrices[this.wallMaterial] * this.surface;
        let floorPrice = this.materialPrices[this.floorMaterial] * this.surface;
        let ceilingPrice = this.materialPrices[this.ceilingMaterial] * this.surface;

        this.price = basePrice + surfacePrice + extraPrice + wallPrice + floorPrice + ceilingPrice;
      },
      toggleService(service) {
        this.extraServices[service] = !this.extraServices[service];
        this.calculatePrice();
      },
      handleTypeChange(event) {
        this.typePrice = event.target.value;
        this.calculatePrice();
      },
      handleSurfaceChange(event) {
        this.surface = event.target.value;
        this.calculatePrice();
      },
      handleDropdownChange(event, materialType) {
        this[materialType] = event.target.value;
        this.calculatePrice();
      },
      handleCheckboxChange(service) {
        this.extraServices[service] = !this.extraServices[service];
        this.calculatePrice();
      },
      validateForm() {
        this.errors = this.validationErrors;
      },
      handleFormSubmit(event) {
        event.preventDefault();
        this.validateForm();
        if (this.isFormValid) {
          alert('Форма отправлена! ' + this.price);
        }
      }
    },
    watch: {
      typePrice() {
        this.calculatePrice();
      },
      surface() {
        this.calculatePrice();
      },
      extraServices() {
        this.calculatePrice();
      }
    }
  }
</script>

<template>
  <div class="calculator">
    <h3>Рассчитайте стоимость ремонта</h3>
    <div class="calculator-container">
      <form @submit="handleFormSubmit">
        <div class="radio-buttons">
          <h4>Тип санузла:</h4>
          <label for="combined">Совмещенный
            <input type="radio" name="type" id="combined" value="100" v-model="typePrice" @change="handleTypeChange">
          </label>
          <label for="split">Раздельный
            <input type="radio" name="type" id="split" value="200" v-model="typePrice" @change="handleTypeChange">
          </label>
          <label for="bathroom">Ванная комната
            <input type="radio" name="type" id="bathroom" value="300" v-model="typePrice" @change="handleTypeChange">
          </label>
          <label for="surface" id="sur"><strong>Площадь:</strong>
            <input type="number" v-model="surface" @input="handleSurfaceChange">
          </label>
        </div>
        <span v-if="errors.typePrice" class="error" style="margin: 0 0 0 25vw">{{ errors.typePrice }}</span>
        <span v-if="errors.surface" class="error" style="margin: 0 0 0 65vw">{{ errors.surface }}</span>
        <div class="dropdowns">
          <div class="dropdown-item">
            <label for="wall-select">Материал отделки стен</label>
            <div v-if="errors.wallMaterial" class="error">{{ errors.wallMaterial }}</div>
            <select name="walls" id="wall-select" v-model="wallMaterial" @change="handleDropdownChange($event, 'wallMaterial')">
              <option value=""></option>
              <option value="tiles1">Плитка 1</option>
              <option value="tiles2">Плитка 2</option>
              <option value="tiles3">Плитка 3</option>
              <option value="tiles4">Плитка 4</option>
            </select>
          </div>
          <div class="dropdown-item">
            <label for="floor-select">Материал отделки пола</label>
            <div v-if="errors.floorMaterial" class="error">{{ errors.floorMaterial }}</div>
            <select name="floors" id="floor-select" v-model="floorMaterial" @change="handleDropdownChange($event, 'floorMaterial')">
              <option value=""></option>
              <option value="tiles1">Плитка 1</option>
              <option value="tiles2">Плитка 2</option>
              <option value="tiles3">Плитка 3</option>
              <option value="tiles4">Плитка 4</option>
            </select>
          </div>
          <div class="dropdown-item">
            <label for="ceiling-select">Материал отделки потолка</label>
            <div v-if="errors.ceilingMaterial" class="error">{{ errors.ceilingMaterial }}</div>
            <select name="ceiling" id="ceiling-select" v-model="ceilingMaterial" @change="handleDropdownChange($event, 'ceilingMaterial')">
              <option value=""></option>
              <option value="tiles1">Плитка 1</option>
              <option value="tiles2">Плитка 2</option>
              <option value="tiles3">Плитка 3</option>
              <option value="tiles4">Плитка 4</option>
            </select>
          </div>
        </div>
        <div class="extra">
          <h4>Дополнительные услуги</h4>
          <div class="extra-lists">
            <ul>
              <li><input type="checkbox" name="extra" id="toilet" v-model="extraServices.toilet" @change="handleCheckboxChange('toilet')"><label for="toilet">Подвесной унитаз</label></li>
              <li><input type="checkbox" name="extra" id="shower" v-model="extraServices.shower" @change="handleCheckboxChange('shower')"><label for="shower">Душевая кабина</label></li>
              <li><input type="checkbox" name="extra" id="bidet" v-model="extraServices.bidet" @change="handleCheckboxChange('bidet')"><label for="bidet">Гигиенический душ</label></li>
              <li><input type="checkbox" name="extra" id="shelf" v-model="extraServices.shelf" @change="handleCheckboxChange('shelf')"><label for="shelf">Полка для ванны</label></li>
            </ul>
            <ul>
              <li><input type="checkbox" name="extra" id="heatedFloor" v-model="extraServices.heatedFloor" @change="handleCheckboxChange('heatedFloor')"><label for="heatedFloor">Теплый пол</label></li>
              <li><input type="checkbox" name="extra" id="drain" v-model="extraServices.drain" @change="handleCheckboxChange('drain')"><label for="drain">Люк "неведимка" под плитку</label></li>
              <li><input type="checkbox" name="extra" id="heater" v-model="extraServices.heater" @change="handleCheckboxChange('heater')"><label for="heater">Водонагреватель</label></li>
            </ul>
          </div>
        </div>
        <div class="calc-form">
          <h3>Осталось заполнить форму</h3>
          <div class="calc-form-content">
            <p>Вы узнаете стоимость ремонта и получите скидку 10%</p>
            <div class="input-error">
              <input type="text" minlength="2" name="name" id="name" v-model="form.name" placeholder="Ваше имя">
              <span v-if="errors.name" class="error">{{ errors.name }}</span>
            </div>
            <div class="input-error">
              <input type="tel" name="phone" id="phone" v-model="form.phone" placeholder="Номер телефона">
              <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
            </div>
            <button :disabled="!isFormValid">Рассчитать стоимость</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
  span {
    text-wrap: wrap;
    max-width: 300px;
  }
  .calculator {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .calculator h3 {
    margin: 50px auto;
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
  .calculator .radio-buttons input {
    padding: 10px;
    margin: 0 10px;
    background: #d0b194b7;
    border: none;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
  }
  .calculator .radio-buttons label {
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
  .calculator .dropdowns .dropdown-item {
    display: flex;
    flex-direction: column;
  }
  .calculator .dropdowns .dropdown-item label {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }

  .calculator .dropdowns .dropdown-item select {
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
  .calculator .extra-lists ul li {
    padding: 5px;
    font-family: 'Montserrat';
  }
  .calculator .extra-lists ul li label {
    margin-left: 10px;
  }
  .calculator .extra-lists ul li input {
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

  .error {
    color: red;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9em;
  }
  .input-error {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  /* mobile view */

  @media only screen and (max-width:600px) {

    .calculator h3 {
      margin: 5vh 5vw;
      font-size: 2em;
    }
    .calculator-container {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      max-width: 100vw;
      margin-left: 10px;
    }
    .calculator .radio-buttons {
      flex-direction: column;
      align-items: baseline;
    }
    .calculator .radio-buttons form {
      display: flex;
      flex-direction: column;
    }
    .calculator .radio-buttons form label {
     margin: 10px 0;
    }
    .dropdowns {
      flex-direction: column;
      max-width: 90vw;
    }
    .calculator .dropdowns .dropdown-item select {
      margin-top: 10px;
      margin-bottom: 20px;
    }
    .extra-lists {
      flex-direction: column;
    }
    .calc-form {
      padding: 0;
      margin: 0;
      max-width: 100vw;
    }
    .calculator .calc-form h3 {
      font-size: 1.5em;
    }
    .calculator .calc-form .calc-form-content {
      display: flex;
      flex-direction: column;
      max-width: 80vw;
    }
    .calculator .extra {
      margin: 0;
    }
    .calculator .extra h4 {
      font-family: 'Montserrat', sans-serif;
      margin: 0;
      text-align: center;
    }
    .calculator .extra-lists {
      display: flex;
      justify-content: space-between;
    }
    .calculator .extra-lists ul {
      padding: 0;
    }
    .calculator .extra-lists ul li {
      font-family: 'Montserrat';
    }
    .calculator .extra-lists ul li label {
      margin-left: 10px;
    }
    .calculator .extra-lists ul li input {
      transform: scale(2)
    }
    .calculator .calc-form {
      margin: 20px 0;
      width: 100vw;
      border-radius: 0;
      padding: 20px 15px;
    }
    .calculator .calc-form h3 {
      margin-bottom: 10px;
    }
    .calculator .calc-form .calc-form-content p {
      width: 100%;
    }
    .calculator .calc-form .calc-form-content input {
      margin: 15px 0;
      border-radius: 10px;
      border: none;
      font-family: 'Montserrat', sans-serif;
      font-size: 1.2em;
      padding: 10px 0;
    }
    .calculator .calc-form .calc-form-content button {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.2em;
      color: #DBAF15;
      background-color: #fff;
      border: 3px solid #DBAF15;
      border-radius: 20px;
      /* box-shadow: 0 0 10px 1px #DBAF15; */
      padding: 10px 5px;
    }
  }
</style>
