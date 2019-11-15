<template>
  <div>
    <section class="lang section" v-for="(lang, idx) in languages" :key="idx">
      <ul class="ul">
        <li class="li">
          <input type="text"
          v-model="languages[idx]"
          class="p"
          placeholder="Add Language"
          @blur="deleteItem(idx)"
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'languages',
  props: ['languages'],
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