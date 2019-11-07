<template>
  <nav>
    <router-link to='/'><h1>red | Resume</h1></router-link>
    <div class="menu">
      <button @click="{{alert('clicked')}}"><img src="../assets/hamburger.svg" alt="menu"></button>
    </div>
  </nav>
</template>

<style scoped>
  nav{
    position: fixed;
    top:0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    width:100%;
    box-shadow: lightgray 0px 2px 10px;
    padding: 0rem 2rem;
    /* background-color: azure; */
    background-color: #102D59;
    z-index: 2;
    color: azure;
  }
  /* button{
    border: 2px solid rgba(19, 9, 165, 0.911);
    border-radius: 1000px;
    width: 8rem;
    height: 2.5rem;
    font-size: 20px;
    font-weight: 500;
    background: rgb(19, 9, 165);
    color: #fff;
  } */
  img{
    pointer-events: none;
  }
  @media screen and (max-width: 720px){
  nav{
    padding: 0rem 1rem;
  }
}
</style>