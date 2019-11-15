<template>
  <div>
    <section class="lang section" v-for="(lang, idx) in languages" :key="idx">
      <ul class="ul">
        <li class="li">
          <input type="text" v-model="languages[idx]" class="p" placeholder="Add Language">
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
    
  }
}
</script>

<style scoped>
section{
  margin: 0;
}
</style>