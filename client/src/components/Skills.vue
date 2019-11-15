<template>
  <div>
    <section class="lang" v-for="(skill, idx) in skills" :key="skill">
      <ul>
        <li>
          <input type="text" v-model="skills[idx]" class="p">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'skills',
  props: ['skills'],
  methods: {
    
  }
}
</script>

<style scoped>

</style>