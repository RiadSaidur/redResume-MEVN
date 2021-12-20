<template>
  <transition name="drawer">
    <div class="container">
      <CTA @printResume='printResume' @save='save' class="cta"/>
      <div class="resume">
        <h1 class="title">RESUME</h1>
      
        <Personal :personal='personal' />
          
        <div class="subheader"><h2>Educational Background</h2><button @click="newEdu" class="cta">+</button></div>
        <Education :education='education' />

        <div class="subheader"><h2>Languages</h2><button @click="newLang" class="cta">+</button></div>
        <languages :languages='languages' />

        <div class="subheader"><h2>Skills</h2><button @click="newSkill" class="cta">+</button></div>
        <Skills :skills='skills' />

        <h2 class="subheader">Personal Infromation</h2>
        <Information :info='info' />
      </div>
    </div>
  </transition>
</template>

<script>
/* eslint-disable no-console */
import { mapActions } from 'vuex'
import { loadResume, updateResume } from '../services/profile_service'

import CTA from '../components/CTA'
import Personal from '../components/Personal'
import Education from '../components/Education'
import Languages from '../components/Languages'
import Skills from '../components/Skills'
import Information from '../components/Information'

export default {
  name: 'resume',
  components: {
    CTA,
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
    ...mapActions([
      'toggleAuth'
    ]),
    printResume(){
      window.print();
    },
    async refresh(){
      try {
        const resume = await loadResume();
        console.log(resume);
        if(resume.error){
          this.$router.push({name: 'home'});
          this.toggleAuth(false);
        }
        else if(resume){
          this.toggleAuth(true);
          
          this.personal = resume.personal;
          this.education = resume.education;
          this.languages = resume.languages;
          this.skills = resume.skills;
          this.info = resume.info;
        }
      } catch (error) {
        console.log(error);      
      }
    },
    async save(){
      const resume = {
        personal: this.personal,
        education: this.education,
        languages: this.languages,
        skills: this.skills,
        info: this.info
      }
      try {
        await updateResume(resume);
        this.refresh();
      } catch (error) {
        console.log(error);
      }
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
    },
  },
  async mounted(){
    await this.refresh();
  }
}
</script>

<style scoped>
.container{
  margin: 5rem auto 2rem auto;
  display: grid;
  grid-template-columns: 1fr 11fr;
}
.resume{
  margin: auto;
  width: 8.27in;
  padding: 2rem 1rem;
  border: 1px solid black;
  background-color: white;
}
.subheader{
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
  padding-bottom: .5rem;
}
.subheader > button{
  display: grid;
  margin-left: 1rem;
  padding: 0 .45rem;
  font-size: 1.5rem;
  font-weight: 600;
  background: none;
  border: 2px solid black;
  border-radius: 1000px;
  box-shadow: black 0px 0px 3px;
}
.title{
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid black;
  padding-bottom: .5rem;
}
@media print{
  .resume{
    border: none;
  }
  .container{
    margin-top: 0;
  }
  body .cta{
    display: none;
    font-size: 10rem;
  }
}
</style>