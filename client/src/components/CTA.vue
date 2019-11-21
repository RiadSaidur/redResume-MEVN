<template>
  <div class="cta">
    <button @click="save"><img src="../assets/save.svg" alt="Save"></button>
    <button @click="printResume"><img src="../assets/print.svg" alt="Print"></button>
  </div>
</template>

<script>
export default {
  name: 'cta',
  methods: {
    printResume(){
      this.$emit('printResume');
    },
    save(){
      this.$emit('save');
    }
  }
}
</script>

<style scoped>
.cta{
  position: sticky;
  top: 5rem;
  display: grid;
  margin-left: .5rem;
  grid-template-rows: 70px 70px;
  height: 11rem;
  background-color: rgba(16, 45, 89, 0.39);
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1000px;
}
img{
  width: 50px;
}
</style>