<template>
  <transition name="drawer">
   <RegisterFrom />
  </transition>
</template>

<script>
import RegisterFrom from '../components/RegisterFrom'

export default {
  components:{
    RegisterFrom
  }
}
</script>