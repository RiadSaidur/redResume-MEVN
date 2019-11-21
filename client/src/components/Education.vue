<template>
  <div>
    <section class="edu section" v-for="(degree, idx) in education" :key="idx">
      <div class="degree">
        <input type="text" v-model="degree.year" class="h3" placeholder="Year" @blur='deleteItem(idx)'>
        <div class="edu_details">
          <div class="institute">
            <input type="text" v-model="degree.type" class="h3" placeholder="Degree" @blur='deleteItem(idx)'>
            <input type="text" v-model="degree.institute" class="p" placeholder="Institute" @blur='deleteItem(idx)'>
          </div>
          <div class="gpa">
            <h3>GPA:</h3> 
            <input type="text" v-model="degree.gpa" class="p" placeholder="GPA" @blur='deleteItem(idx)'>
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
    deleteItem(idx){
      if(!this.education[idx].year && !this.education[idx].type && !this.education[idx].institute && !this.education[idx].gpa){
        this.education.splice(idx, 1);
      }
    }
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