<template>
  <div class="container">
    <img src="../assets/user.svg" alt="">
    <form @submit.prevent>
      <label for="email" class="inp">
        <input type="email" id="email" placeholder=" " v-model="user.email">
        <span class="label">Email</span>
        <span class="border"></span>
      </label>
      <label for="password" class="inp">
        <input type="password" id="password" placeholder=" " v-model="user.password">
        <span class="label">Password</span>
        <span class="border"></span>
      </label>
      <div class="btns">
        <button @click="signin">Sign In</button>
      </div>
    </form>
    <router-link to='/'>Forgot Password?</router-link>
    <p>Don't have an account? <router-link to='/signup'>Sign up</router-link> </p>
  </div>
</template>

<script>
import { signUser } from '../services/user_services'
import { mapActions } from 'vuex';

export default {
  name: 'LoginForm',
  data(){
    return{
      user: {
        password: null,
        email: null
      }
    }
  },
  methods: {
    ...mapActions([
      'updateUser'
    ]),
    async signin(){
      /* eslint-disable no-console */
      const { error } = await signUser(this.user);
      this.user.password = null;
      if(error) console.log(error);
      else {
        this.updateUser(this.user.email);
        this.$router.push({name: 'resume'});
      }
    }
  }
}
</script>

<style scoped>
  .container{
    margin: 5rem 2rem 0rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form{
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  img{
    pointer-events: none;
  }
  .inp {
    position: relative;
    width: 280px;
    margin-bottom: 1rem;
  }
  .inp .label {
    position: absolute;
    top: 16px;
    left: 0;
    font-size: 16px;
    color: black;
    font-weight: 500;
    transform-origin: 0 0;
    transition: all 0.2s ease;
  }
  .inp .border {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: black;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all 0.15s ease;
  }
  .inp input {
    -webkit-appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 12px 0;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid #000000;
    background: none;
    border-radius: 0;
    color: #223254;
    transition: all 0.15s ease;
  }
  .inp input:not(:placeholder-shown) + span {
    color: #5a667f;
    transform: translateY(-26px) scale(0.75);
  }
  .inp input:focus {
    background: none;
    outline: none;
  }
  .inp input:focus + span {
    color: #07f;
    transform: translateY(-26px) scale(0.75);
  }
  .inp input:focus + span + .border {
    transform: scaleX(1);
  }
  button{
    background: rgba(148, 148, 148, 0.57);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1000px;
    width: 6rem;
    height: 2rem;
    font-size: 16px;
    color: rgba(21, 12, 153, 0.911);
    font-weight: 600;
  }
  p{
    margin-top: 1rem;
  }
  a{
    color: rgb(184, 15, 49);
  }
  .btns{
    margin: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>