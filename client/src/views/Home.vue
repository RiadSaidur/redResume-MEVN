<template>
  <transition name="drawer">
    <div class="home">
      <div class="content">
        <h1>Create Resume on the go</h1>
        <section class="signin">
          <h2>Try redResume for free</h2>
          <router-link to='/signin'><button>Sign In</button></router-link>
        </section>
        <section>
          <h2>Don't have an account?</h2>
          <router-link to='/signup'><button>Sign Up</button></router-link>
        </section>
      </div>
      <img src="../assets/moon-figure.svg">
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex';
/* eslint-disable no-console */

export default {
  name: 'home',
  methods: {
    ...mapActions(['toggleAuth']),
    redirect(){
      if(localStorage.token){
        console.log(localStorage.getItem('token'));
        
        this.$router.push({name: 'resume'});
        this.toggleAuth();
      }
    }
  },
  mounted(){
    this.redirect();
  }
}
</script>

<style scoped>
.home{
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
img{
  margin-top: 7rem;
  pointer-events: none;
}
.content{
  margin-left: 2rem;
  margin-top: 7rem;
  color: black;
}
h1, .signin, .signup{
  margin-bottom: 3rem;
}
h2, button{
  margin-bottom: 1rem;
}
button{
  background-color: inherit;
  border: 2px solid #102D59;
  border-radius: 1000px;
  width: 10rem;
  height: 3rem;
  font-size: 20px;
  color: #102D59;
  font-weight: 500;
}
.signin button{
  background: #102D59;
  color: #fff;
}
@media screen and (max-width: 720px){
  img{
    display: none;
  }
}
</style>
