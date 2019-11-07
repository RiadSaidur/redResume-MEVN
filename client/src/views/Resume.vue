<template>
  <div class="container">
    resume
  </div>
</template>

<script>
import { getResume } from '../services/profile_service'

export default {
  async created(){
    /* eslint-disable no-console */
    const resume = await getResume();
    console.log(resume);
  }
}
</script>

<style scoped>
.container{
  margin: 5rem 2rem 0rem 2rem;
}
</style>