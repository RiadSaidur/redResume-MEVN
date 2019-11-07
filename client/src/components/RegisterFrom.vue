<template>
  <div class="container">
    <form @submit.prevent>
      <label for="name" class="inp">
        <input type="text" id="name" placeholder=" " v-model="user.name">
        <span class="label">Name</span>
        <span class="border"></span>
      </label>
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
      <label for="passwordrepeat" class="inp">
        <input type="password" id="passwordrepeat" placeholder=" " v-model="user.repeat_password">
        <span class="label">Repeat Password</span>
        <span class="border"></span>
      </label>
      <button @click="register">Register</button>
    </form>
    <p>Already have an account? <router-link to='/signin'>Sign In</router-link> </p>
  </div>
</template>

<script>
import { regUser, signUser } from '../services/user_services'

export default {
  data(){
    return{
      user: {
        name: null,
        email: null,
        password: null,
        repeat_password: null
      }
    }
  },
  methods:{
    async register(){
      /* eslint-disable no-console */
      if(this.user.password != this.user.repeat_password) return alert('Passwords needs to match');
      const { _id, error } = await regUser(this.user);
      if(error) console.log(error);
      else{
        console.log(_id);
        const { token, error } = await signUser({email: this.user.email, password: this.user.password});
        if(error) console.log(error);
        else console.log(token);
      }
      this.user.password = null;
      this.user.repeat_password = null;
      this.$router.push({name: 'resume'});
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
    color: #9098a9;
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
    background: #07f;
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
    border-bottom: 2px solid #c8ccd4;
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
    background: white;
    border: 2px solid rgba(19, 9, 165, 0.911);
    border-radius: 1000px;
    width: 6rem;
    height: 2rem;
    margin-top: 1rem;
    font-size: 16px;
    color: rgba(21, 12, 153, 0.911);
    font-weight: 600;
  }
  p{
    margin-top: 1rem;
  }
  a{
    color: rgba(21, 12, 153, 0.911);
  }
</style>