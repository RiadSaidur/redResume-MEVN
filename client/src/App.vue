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
  /* background-color: rgba(240, 248, 255, 0.384); */
  background: linear-gradient(153.52deg, #D2A6FF 8.55%, rgba(219, 184, 255, 0.796875) 31.42%, rgba(255, 255, 255, 0) 79.4%), #FFA8A6;
  min-height: 100vh;
}
button{
  cursor: pointer;
  background: none;
  border: none;
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
input, textarea{
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
@media print {
  .appbar{
    display: none;
  }
}
</style>