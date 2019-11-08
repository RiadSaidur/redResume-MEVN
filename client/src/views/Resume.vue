<template>
  <div class="container">
    {{resumeX}}
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
      <label for="phone" class="inp">
        <input type="text" id="phone" placeholder=" " v-model="resume.phone">
        <span class="label">Phone</span>
        <span class="border"></span>
      </label>
      <label for="address" class="inp">
        <input type="text" id="address" placeholder=" " v-model="resume.address">
        <span class="label">Address</span>
        <span class="border"></span>
      </label>
      <label for="" class="inp">
        <input type="text" id="" placeholder=" " v-model="resume.email">
        <span class="label"></span>
        <span class="border"></span>
      </label>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getResume } from '../services/profile_service'

export default {
  name: 'resume',
  data(){
    return{
      resume:{
        name: null,
        address: null,
        email: null,
        mobile: null,
        education: null,
        skills: null,
        father: null,
        mother: null,
        dob: null,
        sex: null,
        religion: null,
        blood: null,
        nationality: null,
        status: null,
        hobby: null,
        permanent: null
      },
      resumeX: null
    }
  },
  methods: {
    ...mapGetters([
      'getResume'
    ]),
    ...mapActions([
      'updateResume'
    ])
  },
  async beforeCreate(){
    /* eslint-disable no-console */
    try {
      const resume = await getResume();
      this.updateResume(resume);
      this.resumeX = this.getResume();
      console.log(resume);
    } catch (error) {
      this.$router.push({name: 'signin'});
      console.log(error);
    }
  }
}
</script>

<style scoped>
.container{
  margin: 5rem 2rem 0rem 2rem;
}
form{
    display: flex;
    flex-direction: column;
  }
  .inp {
    position: relative;
    width: 280px;
    margin-bottom: 1rem;
  }
  .inp .label {
    position: absolute;
    top: 16px;
    left: 0;
    font-size: 16px;
    color: #9098a9;
    font-weight: 500;
    transform-origin: 0 0;
    transition: all 0.2s ease;
  }
  .inp .border {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: #07f;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: all 0.15s ease;
  }
  .inp input {
    -webkit-appearance: none;
    width: 100%;
    border: 0;
    font-family: inherit;
    padding: 12px 0;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 2px solid #c8ccd4;
    background: none;
    border-radius: 0;
    color: #223254;
    transition: all 0.15s ease;
  }
  .inp input:not(:placeholder-shown) + span {
    color: #5a667f;
    transform: translateY(-26px) scale(0.75);
  }
  .inp input:focus {
    background: none;
    outline: none;
  }
  .inp input:focus + span {
    color: #07f;
    transform: translateY(-26px) scale(0.75);
  }
  .inp input:focus + span + .border {
    transform: scaleX(1);
  }
</style>