<template>
  <div>
    <h1>ERROR 404</h1>
    <h2>Please go <router-link to="/">Back</router-link></h2>
  </div>
</template>

<style scoped>
div {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 4rem;
}

div a {
  color: #23083f;
  border-bottom: 2px solid #23083f;
}
</style>