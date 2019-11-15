<template>
  <div>
    <section class="edu section" v-for="(degree, idx) in education" :key="idx">
      <div class="degree">
        <input type="text" v-model="degree.year" class="h3" placeholder="Year">
        <div class="edu_details">
          <div class="institute">
            <input type="text" v-model="degree.type" class="h3" placeholder="Degree">
            <input type="text" v-model="degree.institute" class="p" placeholder="Institute">
          </div>
          <div class="gpa">
            <h3>GPA:</h3> 
            <input type="text" v-model="degree.gpa" class="p" placeholder="GPA">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'education',
  props: ['education'],
  methods: {
    
  }
}
</script>

<style scoped>
h3{
  padding: .2rem .5rem;
  font-size: 1.2rem;
  font-weight: 800;
}
.degree{
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.institute{
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
}
.gpa{
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
}
.h3{
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  background: none;
}
</style>