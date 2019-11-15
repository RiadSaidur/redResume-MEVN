<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components:{
    Header
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: rgba(240, 248, 255, 0.384);
}
button{
  cursor: pointer;
}
button:focus{
  outline: 0;
}
a{
  text-decoration: none;
  color: inherit;
}
li{
  list-style: none;
}
input{
  width: 100%;
  padding: .2rem .5rem;
}
.drawer-enter-active{
  transition: opacity 400ms ease;
}
.drawer-leave-active{
  transition-delay: 500ms;
  transition: opacity 400ms ease;
}
.drawer-enter, .drawer-leave-to{
  opacity: 0;
}
.p{
  border: none;
  background: none;
  font-size: 1rem;
}
.li{
  list-style: circle;
  font-weight: 500;
  text-transform: capitalize;
}
.section{
  margin-bottom: 2rem;
  padding: 0rem 2rem;
}
.ul{
  padding-left: 2rem;
}
</style>