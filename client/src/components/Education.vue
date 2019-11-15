<template>
  <div>
    <section class="edu" v-for="degree in education" :key="degree.type">
      <div class="degree">
        <input type="text" v-model="degree.year" class="h3">
        <!-- <h3>Year {{degree.year}}</h3> -->
        <div class="edu_details">
          <div class="institute">
            <input type="text" v-model="degree.type" class="h3">
            <input type="text" v-model="degree.institute" class="p">
            <!-- <h3>{{degree.type}}:</h3> <p>{{degree.institute}}</p> -->
          </div>
          <div class="gpa">
            <h3>GPA:</h3> 
            <!-- <p>{{degree.gpa}}</p> -->
            <input type="text" v-model="degree.gpa" class="p">
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

</style>