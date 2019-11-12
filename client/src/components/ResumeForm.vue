<template>
  <div class="container">
    <section>
      <h2>Personal</h2>
      <form @submit.prevent>
        <label for="name" class="inp">
          <input type="text" id="name" placeholder=" " v-model="resume.personal.name">
          <span class="label">Name</span>
          <span class="border"></span>
        </label>
        <label for="email" class="inp">
          <input type="email" id="email" placeholder=" " v-model="resume.personal.email">
          <span class="label">Email</span>
          <span class="border"></span>
        </label>
        <label for="mobile" class="inp">
          <input type="text" id="mobile" placeholder=" " v-model="resume.personal.mobile">
          <span class="label">Mobile</span>
          <span class="border"></span>
        </label>
        <label for="address" class="inp">
          <input type="text" id="address" placeholder=" " v-model="resume.personal.address">
          <span class="label">Address</span>
          <span class="border"></span>
        </label>
        <label for="father" class="inp">
          <input type="text" id="father" placeholder=" " v-model="resume.father">
          <span class="label">Father</span>
          <span class="border"></span>
        </label>
        <label for="mother" class="inp">
          <input type="text" id="mother" placeholder=" " v-model="resume.mother">
          <span class="label">Mother</span>
          <span class="border"></span>
        </label>
      </form>
    </section>
    <section>
      <h2>Education</h2>
      <form @submi.prevent v-for="(degree, idx) in resume.education" :key="idx">
        <h3>{{ degree.type }}</h3>
        <label :for="degree.type" class="inp">
          <input type="text" :id="degree.type" placeholder=" " v-model="resume.education[idx].type">
          <span class="label">Degree</span>
          <span class="border"></span>
        </label>
        <label :for="degree.year" class="inp">
          <input type="text" :id="degree.year" placeholder=" " v-model="resume.education[idx].year">
          <span class="label">Year</span>
          <span class="border"></span>
        </label>
        <label :for="degree.institute" class="inp">
          <input type="text" :id="degree.institute" placeholder=" " v-model="resume.education[idx].institute">
          <span class="label">Institute</span>
          <span class="border"></span>
        </label>
        <label :for="degree.gpa" class="inp">
          <input type="text" :id="degree.gpa" placeholder=" " v-model="resume.education[idx].gpa">
          <span class="label">GPA</span>
          <span class="border"></span>
        </label>
      </form>
    </section>
    <section>
      <h2>Skills</h2>
      <form @submit.prevent v-for="(skill, idx) in resume.skills" :key="idx">
        <label :for="idx" class="inp">
          <input type="text" :id="idx" placeholder=" " v-model="resume.skills[idx]">
          <span class="label"></span>
          <span class="border"></span>
        </label>
      </form>
    </section>
    <section>
      <h2>Languages</h2>
      <form @submit.prevent v-for="(language, idx) in resume.languages" :key="idx">
        <label :for="idx" class="inp">
          <input type="text" :id="idx" placeholder=" " v-model="resume.languages[idx]">
          <span class="label"></span>
          <span class="border"></span>
        </label>
      </form>
    </section>
    <section>
      <h2>Others</h2>
      <form @submit.prevent>
        <label for="father" class="inp">
          <input type="text" id="father" placeholder=" " v-model="resume.info.father">
          <span class="label">Father</span>
          <span class="border"></span>
        </label>
        <label for="mother" class="inp">
          <input type="text" id="mother" placeholder=" " v-model="resume.info.mother">
          <span class="label">Mother</span>
          <span class="border"></span>
        </label>
        <label for="status" class="inp">
          <input type="text" id="status" placeholder=" " v-model="resume.info.status">
          <span class="label">Status</span>
          <span class="border"></span>
        </label>
        <label for="hobby" class="inp">
          <input type="text" id="hobby" placeholder=" " v-model="resume.info.hobby">
          <span class="label">Hobby</span>
          <span class="border"></span>
        </label>
        <label for="religion" class="inp">
          <input type="text" id="religion" placeholder=" " v-model="resume.info.religion">
          <span class="label">Religion</span>
          <span class="border"></span>
        </label>
        <label for="blood" class="inp">
          <input type="text" id="blood" placeholder=" " v-model="resume.info.blood">
          <span class="label">Blood</span>
          <span class="border"></span>
        </label>
        <label for="nationality" class="inp">
          <input type="text" id="nationality" placeholder=" " v-model="resume.info.nationality">
          <span class="label">Nationality</span>
          <span class="border"></span>
        </label>
        <label for="permanent" class="inp">
          <input type="text" id="permanent" placeholder=" " v-model="resume.info.permanent">
          <span class="label">Permanent</span>
          <span class="border"></span>
        </label>
      </form>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { loadResume } from '../services/profile_service'

export default {
  name: 'ResumeForm',
  data(){
    return{
      resume: {
        personal:{
          name: '',
          address: '',
          email: '',
          mobile: '',
          dob: '',
          sex: ''
        },
        education: [{
          type: '',
          year: '',
          institute: '',
          gpa: ''
        }],
        info: {
          father: '',
          mother: '',
          status: '',
          hobby: '',
          religion: '',
          blood: '',
          nationality: '',
          permanent: ''
        },
        languages: [],
        skills: []
      }
    }
  },
  methods: {
    /* eslint-disable no-console */
    ...mapGetters([
      'getResume'
    ]),
    ...mapActions([
      'updateResume',
      'toggleAuth'
    ])
  },
  async created(){
    /* eslint-disable no-console */
    try {
      const loadedResume = await this.getResume();
      if(!loadedResume.personal.name){
        this.updateResume(loadResume());
      }
      this.resume = await this.getResume();
      this.toggleAuth(true);
      // console.log(resume);
    } catch (error) {
      this.toggleAuth(false);
      this.$router.push({name: 'home'});
      console.log(error);
    }
  }
}
</script>

<style scoped>
.container{
  margin: 5rem 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
  justify-content: space-around;
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
h2, h3{
  margin-bottom: 2rem;
  text-transform: uppercase;
}
@media screen and (max-width: 720px){
  .container{
    grid-template-columns: 1fr;
  }
}
</style>