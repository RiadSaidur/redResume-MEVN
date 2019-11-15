<template>
  <div>
    <section class="lang" v-for="(lang, idx) in languages" :key="lang">
      <ul>
        <li>
          <input type="text" v-model="languages[idx]" class="p">
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

</style>