<template>
  <section class="personal">
    <input type="text" v-model="personal.name" class="h1">
    <input type="text" v-model="personal.email" class="p">
    <input type="text" v-model="personal.mobile" class="p">
    <input type="text" v-model="personal.address" class="p">
  </section>
</template>

<script>
export default {
  name: 'personal',
  props: ['personal']
}
</script>

<style scoped>

</style>