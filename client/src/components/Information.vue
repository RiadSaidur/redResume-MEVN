<template>
  <section class="info">
    <div>
      <h3>Father</h3> 
      <input type="text" v-model="info.father" class="p" placeholder="Father's Name">
    </div>
    <div>
      <h3>Mother</h3> 
      <input type="text" v-model="info.mother" class="p" placeholder="Mother's Name">
    </div>
    <div>
      <h3>Blood Group</h3> 
      <input type="text" v-model="info.blood" class="p" placeholder="Blood Group">
    </div>
    <div>
      <h3>Natinality</h3> 
      <input type="text" v-model="info.nationality" class="p" placeholder="Nationality">
    </div>
    <div>
      <h3>Maritial Status</h3> 
      <input type="text" v-model="info.status" class="p" placeholder="Maritial Status">
    </div>
    <div>
      <h3>Permanent Address</h3> 
      <input type="text" v-model="info.permanent" class="p" placeholder="Permanent Address">
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
.info{
  margin-left: 2rem;
}
.info > div{
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
}
.info .p{
  margin-left: 1rem;
}
</style>