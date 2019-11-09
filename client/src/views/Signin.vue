<template>
  <transition name="drawer">
    <LoginForm />
  </transition>
</template>

<script>
import LoginForm from '../components/LoginForm'

export default {
  components:{
    LoginForm
  }
}
</script>