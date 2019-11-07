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
button:focus{
  outline: 0;
}
a{
  text-decoration: none;
  color: inherit;
}
</style>