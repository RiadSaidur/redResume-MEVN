<template>
  <section class="personal section">
    <input type="text" v-model="personal.name" class="h1" placeholder="Name">
    <input type="text" v-model="personal.email" class="p" placeholder="Email">
    <input type="text" v-model="personal.mobile" class="p" placeholder="Mobile">
    <input type="text" v-model="personal.address" class="p" placeholder="Address">
  </section>
</template>

<script>
export default {
  name: 'personal',
  props: ['personal'],
  methods: {

  }
}
</script>

<style scoped>
input{
  display: block;
  width: 100%;
}
.h1{
  border: none;
  background: none;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>