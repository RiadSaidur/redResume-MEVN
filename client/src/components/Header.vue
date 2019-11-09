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
            <li><router-link to='/howto'>How To</router-link></li>
            <li><router-link to='/contacts'>Contact Us</router-link></li>
            <li><router-link to='/about'>About Us</router-link></li>
            <li v-show="authorized" @click="logout"><router-link to='/'>Log Out</router-link></li>
          </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { signOutUser } from '../services/user_services'

export default {
  name: 'Header',
  data(){
    return{
      showMenu: false
    }
  },
  computed: {
    ...mapState([
      'authorized'
    ])
  },
  methods: {
    ...mapActions(['toggleAuth']),
    click(){
      this.showMenu = !this.showMenu;
    },
    logout(){
      signOutUser();
      this.toggleAuth(false);
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

  @media screen and (max-width: 720px){
  nav{
    padding: 0rem 1rem;
  }
}
</style>