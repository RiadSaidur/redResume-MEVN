<template>
  <div>
    <nav>
      <router-link to='/'><h1>red | Resume</h1></router-link>
      <div class="menu">
        <button @click="click"><img src="../assets/hamburger.svg" alt="menu"></button>
      </div>
    </nav>
    <div class='container' :class="{menuItems: showMenu, hidden: !showMenu}">
        <ul>
          <li><h1>Demo</h1></li>
          <li><h1>Contact</h1></li>
          <li><h1>About Us</h1></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return{
      showMenu: false
    }
  },
  methods: {
    click(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style scoped>
  .container{
    padding: 5rem 0rem 2rem 2rem;
    width: 100vw;
  }
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
  button{
    border: none;
    background: none;
  }
  img{
    pointer-events: none;
  }
  .hidden{
    display: none;
  }
  .menuItems{
    display: block;
    position: relative;
  }
  @media screen and (max-width: 720px){
  nav{
    padding: 0rem 1rem;
  }
}
</style>