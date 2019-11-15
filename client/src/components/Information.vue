<template>
  <section class="info">
    <div>
      <h3>Father</h3> 
      <input type="text" v-model="info.father" class="p">
    </div>
    <div>
      <h3>Mother</h3> 
      <input type="text" v-model="info.mother" class="p">
    </div>
    <!-- <div>
      <h3>Date of Birth </h3> 
      <input type="text" v-model="personal.dob" class="p">
    </div> -->
    <div>
      <h3>Blood Group</h3> 
      <input type="text" v-model="info.blood" class="p">
    </div>
    <div>
      <h3>Natinality</h3> 
      <input type="text" v-model="info.nationality" class="p">
    </div>
    <div>
      <h3>Maritial Status</h3> 
      <input type="text" v-model="info.status" class="p">
    </div>
    <div>
      <h3>Permanent Address</h3> 
      <input type="text" v-model="info.permanent" class="p">
    </div>
  </section>
</template>

<script>
export default {
  name: 'infromation',
  props: ['info']
}
</script>

<style scoped>

</style>