<template>
  <div class="short-form-section">
      <h3>Рассчитайте стоимость санузла быстро <div class="underlined">и легко со скидкой <strong>5000 рублей</strong></div id="underlined"></h3>
      <div class="img-form">
        <div class="img">
          <img src="https://images.unsplash.com/photo-1596180737956-00cb917e382b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>
        <form>
          <label for="text">Площадь санузла</label>
          <input type="text" placeholder="м2">
          <label for="text">Имя</label>
          <input type="text" placeholder="Ваше имя">
          <label for="text">Телефон</label>
          <input type="text" placeholder="+7(___)___ __ __">
          <button>Рассчитать стоимость</button>
        </form>
      </div>
    </div>
</template>

<script>

</script>

<style>
  .short-form-section h3 {
    font-family: 'Cormorant Garamond';
    font-size: 3em;
    line-height: 0.9em;
    font-weight: 400;
    margin: 10vh 10vw;
  }
  .short-form-section h3 strong {
    color: #DBAF15;
  }
  .img-form {
    display: flex;
    justify-content: space-between;
    padding: 30px 200px 30px 0;
    background: linear-gradient(240deg, #F2E5D5 0%, #fff);
    width: 80vw;
    border-radius: 30px;
  }
  .img-form form {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 25%;
  }
  .img-form form input{
    padding: 15px 20px;
    border: none;
    border-radius: 5px;
  }
  .img-form form label{
    font-family: 'Montserrat';
    margin-top: 10px;
    border-radius: 5px;
  }
  .img-form form button{
    font-family: 'Montserrat';
    padding: 15px 20px;
    margin-top: 30px;
    font-size: 1.3em;
    color: #DBAF15;
    background-color: #fff;
    border: 2px solid #DBAF15;
    border-radius: 50px;
  }
  .img-form form button:hover{
    box-shadow: 0 0 10px 3px #DBAF15;
    cursor: pointer;
  }
  .img-form .img{
    background: linear-gradient(90deg, rgba(255, 254, 254, 0), rgba(255, 254, 254, 1), url(''));
    height: 40vh;
  }
  .img-form img{
    height: 40vh;
  }
  input {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2em;
  }

  @media only screen and (max-width:600px) {
    .short-form-section h3 {
      font-size: 2em;
    }
    .img {
      display: none;
    }
    .img-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px;
      border-radius: 0;
    }
    .img-form form {
      width: 100%;
    }
    .img-form form label{
      padding-bottom: 10px;
    }
  }
</style>
