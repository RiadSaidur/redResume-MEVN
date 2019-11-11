<template>
  <transition name="drawer">
    <ResumeForm />
  </transition>
</template>

<script>
import ResumeForm from '../components/ResumeForm'

export default {
  components:{
    ResumeForm
  }
}
</script>