<template>
  <form>
    <label for="name" class="inp">
      <input type="text" id="name" placeholder=" " v-model="resume.name">
      <span class="label">Name</span>
      <span class="border"></span>
    </label>
    <label for="email" class="inp">
      <input type="email" id="email" placeholder=" " v-model="resume.email">
      <span class="label">Email</span>
      <span class="border"></span>
    </label>
    <label for="mobile" class="inp">
      <input type="text" id="mobile" placeholder=" " v-model="resume.phone">
      <span class="label">Mobile</span>
      <span class="border"></span>
    </label>
    <label for="address" class="inp">
      <input type="text" id="address" placeholder=" " v-model="resume.address">
      <span class="label">Address</span>
      <span class="border"></span>
    </label>

    <label for="education" class="inp">
      <input type="text" id="education" placeholder=" " v-model="resume.email">
      <span class="label">Education</span>
      <span class="border"></span>
    </label>
    
    <label for="skills" class="inp">
      <input type="text" id="skills" placeholder=" " v-model="resume.email">
      <span class="label">Skills</span>
      <span class="border"></span>
    </label>

    <label for="father" class="inp">
      <input type="text" id="father" placeholder=" " v-model="resume.email">
      <span class="label">Father</span>
      <span class="border"></span>
    </label>
    <label for="mother" class="inp">
      <input type="text" id="mother" placeholder=" " v-model="resume.email">
      <span class="label">Mother</span>
      <span class="border"></span>
    </label>
  </form>
</template>