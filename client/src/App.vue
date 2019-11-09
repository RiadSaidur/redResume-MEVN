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
.drawer-enter-active{
  transition: opacity 500ms ease;
}
.drawer-leave-active{
  transition: opacity 500ms ease;
}
.drawer-enter, .drawer-leave-to{
  opacity: 0;
}
</style>