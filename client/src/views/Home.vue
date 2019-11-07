<template>
  <div class="home">
    <img src="../assets/moon-figure.svg" alt="">
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
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style scoped>
.home{
  width: 100vw;
}
img{
  position: absolute;
  top: 15%;
  right: 4%;
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
  border: 2px solid rgba(19, 9, 165, 0.911);
  border-radius: 1000px;
  width: 10rem;
  height: 3rem;
  font-size: 20px;
  color: rgba(21, 12, 153, 0.911);
  font-weight: 500;
  word-spacing: .2rem;
  letter-spacing: .1rem;
}
.signin button{
  background: rgb(19, 9, 165);
  color: #fff;
}
@media screen and (max-width: 720px){
  img{
    display: none;
  }
}
</style>
