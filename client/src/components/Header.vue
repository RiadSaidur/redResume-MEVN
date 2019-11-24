<template>
  <div class="appbar">
    <nav>
      <router-link to='/'><h1>red | Resume</h1></router-link>
      <div class="menu">
        <button @click="toggleNav"><img src="../assets/hamburger.svg" alt="menu"></button>
      </div>
    </nav>
    <transition name="drawer">
      <div class='container menuItems' v-if="showMenu">
          <ul @click="toggleNav">
            <div v-if="authorized" class="authorize">
              <li><router-link to='/update'>Update</router-link></li>
              <li><router-link to='/resume'>Resume</router-link></li>
              <li  @click="logout"><router-link to='/'>Log Out</router-link></li>
            </div>
            <div v-if="!authorized" class="authorize">
              <li><router-link to='/contacts'>Contact Us</router-link></li>
              <li><router-link to='/about'>About Us</router-link></li>
            </div>
            <li><router-link to='/howto'>How To</router-link></li>
          </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

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
    toggleNav(){
      this.showMenu = !this.showMenu;
    },
    logout(){
      localStorage.removeItem('token');  
      this.toggleAuth(false);
      this.$router.push({name: 'home'});
    }
  }
}
</script>

<style scoped>
  .appbar{
    position: fixed;
    top:0;
    width:100%;
    z-index: 2;
    background-color: #D2A6FF;
  }
  .container{
    padding: 0rem 2rem 2rem 2rem;
    width: 100vw;
    box-shadow: #000 0px 2px 10px;
    z-index: 1;
  }
  .container li {
    display: flex;
    text-align: right;
    padding-right: 1rem;
    font-size: 1.3rem;
  }
  .container li a{
    width: 100vw;
  }
  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    box-shadow: #000 0px 2px 10px;
    padding: 0rem 2rem;
    border: 0.5px solid rgba(0, 0, 0, 0.31);
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
  .authorize{
    border-bottom: aliceblue 1px solid;
    padding: 1rem 0;
  }

  @media screen and (max-width: 720px){
  nav{
    padding: 0rem 1rem;
  }
}
</style>