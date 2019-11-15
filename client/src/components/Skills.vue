<template>
  <div>
    <section class="lang section" v-for="(skill, idx) in skills" :key="idx">
      <ul class="ul">
        <li class="li">
          <input type="text" v-model="skills[idx]" class="p" placeholder="Add Skill">
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
section{
  margin: 0;
}
</style>