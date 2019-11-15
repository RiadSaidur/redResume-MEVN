<template>
  <div>
    <section class="lang section" v-for="(skill, idx) in skills" :key="idx">
      <ul class="ul">
        <li class="li">
          <input type="text"
          v-model="skills[idx]"
          class="p"
          placeholder="Add Skill"
          @blur="deleteItem(idx)"
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'skills',
  props: ['skills'],
  methods: {
    deleteItem(idx){
      if(!this.skills[idx].length){
        this.skills.splice(idx, 1);
      }
    }
  }
}
</script>

<style scoped>
section{
  margin: 0;
}
</style>