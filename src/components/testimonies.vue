<template>
  <div class="testimonies">
      <h3>Отзывы</h3>
      <div class="carousel">
        <div class="carousel-inner">
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height="200px" width="250px">
          </div>
          <div class="carousel-item active">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height="250px" width="300px">
          </div>
          <div class="carousel-item">
            <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height="200px" width="250px">
          </div>
          <button class="carousel-control prev">&#10094;</button>
          <button class="carousel-control next">&#10095;</button>
        </div>
      </div>
    </div>
</template>
<style>
  .testimonies h3 {
    text-align: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.7em;
    font-weight: 400;
  }
  .carousel {
  position: relative;
  max-width: 30%;
  margin: 0 25vh;
  /* overflow: hidden; */
  }

  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-item {
    min-width: 100%;
    box-sizing: border-box;
  }

  .carousel-item img {
    display: block;
  }

  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }

  .carousel-control.prev {
    left: 20px;
  }
  .carousel-control.next {
    right: 10vw;
  }
</style>
