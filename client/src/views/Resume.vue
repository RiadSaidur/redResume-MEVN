<template>
  <transition name="drawer">
    <div class="container">
      <button @click="save">Save</button>
      <h1 class="title">RESUME</h1>
      
      <Personal :personal='personal' />
        
      <div class="subheader"><h2>Educational Background</h2><button @click="newEdu">add</button></div>
      <Education :education='education' />

      <div class="subheader"><h2>Languages</h2><button @click="newLang">add</button></div>
      <languages :languages='languages' />

      <div class="subheader"><h2>Skills</h2><button @click="newSkill">add</button></div>
      <Skills :skills='skills' />

      <h2 class="subheader">Personal Infromation</h2>
      <Information :info='info' />
    </div>
  </transition>
</template>

<script>
/* eslint-disable no-console */
import { mapGetters, mapActions } from 'vuex'
import { loadResume, updateResume } from '../services/profile_service'

import Personal from '../components/Personal'
import Education from '../components/Education'
import Languages from '../components/Languages'
import Skills from '../components/Skills'
import Information from '../components/Information'

export default {
  name: 'resume',
  components: {
    Personal,
    Education,
    Languages,
    Skills,
    Information
  },
  data(){
    return{
      personal: {
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
      languages: '',
      skills: ''
    }
  },
  methods: {
    ...mapGetters([
      'getResume'
    ]),
    ...mapActions([
      'updateResume',
      'toggleAuth'
    ]),
    async save(){
      const resume = {
        personal: this.personal,
        education: this.education,
        languages: this.languages,
        skills: this.skills,
        info: this.info
      }
      try {
        const updated = await updateResume(resume);
        this.refresh(updated);
      } catch (error) {
        console.log(error);
      }
    },
    refresh(resume){
      this.personal = resume.personal;
      this.education = resume.education;
      this.languages = resume.languages;
      this.skills = resume.skills;
      this.info = resume.info;
    },
    newSkill(){
      this.skills.push('');
    },
    newLang(){
      this.languages.push('');
    },
    newEdu(){
      const data = {
        type: '',
        year: '',
        institute: '',
        gpa: ''
      }
      this.education.push(data);
    }
  },
  async beforeCreate(){
    try {
      const resume = await loadResume();
      if(resume){
        this.updateResume(resume);
        this.refresh(resume);
      }
      console.log(resume);
      this.toggleAuth(true);
    } catch (error) {
      this.$router.push({name: 'signin'});
      console.log(error);
      this.toggleAuth(false);
    }
  },
  // mounted(){
  //   document.addEventListener('click', e => {
  //     if(e.altKey){
  //       document.querySelector('.appbar').style.display = 'block';
  //       document.querySelector('.container').style.marginTop = '5rem';  
  //     }
  //     else{
  //       document.querySelector('.appbar').style.display = 'none';
  //       document.querySelector('.container').style.marginTop = 0;
  //     }
  //   });
  // }
}
</script>

<style scoped>
.container{
  width: 8.27in;
  margin: 5rem auto 2rem auto;
  background-color: aqua;
  padding: 2rem 1rem;
}
.subheader{
  text-align: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
  padding-bottom: .5rem;
}
.title{
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid black;
  padding-bottom: .5rem;
}
</style>