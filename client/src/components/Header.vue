<template>
  <div>
    <nav>
      <router-link to='/'><h1>red | Resume</h1></router-link>
      <div class="menu">
        <button @click="click"><img src="../assets/hamburger.svg" alt="menu"></button>
      </div>
    </nav>
    <transition name="drawer">
      <div class='container menuItems' v-show="showMenu">
          <ul>
            <li><a href="#">How to</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">About</a></li>
          </ul>
      </div>
    </transition>
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
    background-color: #102D59;
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
  .menuItems{
    display: inherit;
    position: relative;
    color: aliceblue;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  .drawer-enter-active, .drawer-leave-active{
    transition: opacity 500ms;
  }

  .drawer-enter, .drawer-leave-to{
    opacity: 0;
  }

  @keyframes drawer_in{
    0%{
      transform: translateY(-50px);
      opacity: 0;
    }
    100%{
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes drawer_out{
    0%{
      transform: translateY(0px);
      opacity: 1;
    }
    99%{
      transform: translateY(-100px);
      opacity: 0;
      
    }
    100%{
      display: none;
    }
  }

  @media screen and (max-width: 720px){
  nav{
    padding: 0rem 1rem;
  }
}
</style>