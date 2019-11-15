<template>
  <transition name="drawer">
    <div class="container">
      <div class="cta">
        <button @click="save">Save</button>
        <button @click="printResume">Print</button>
      </div>
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
    printResume(){
      // const doc = document.body.innerHTML;
      // const resume = document.querySelector('.resume').innerHTML;
      // document.body.innerHTML = resume;
      // window.print();
      // document.body.innerHTML = doc;

      // const resume = document.querySelector('.resume');
      // const newWindow = window.open();
      // newWindow.document.write(resume.innerHTML);
      // newWindow.document.close();
      // newWindow.focus();
      // newWindow.print();
      // newWindow.close();

      // const resume = document.querySelector('.resume').innerHTML;
      
      // document.body.innerHTML = resume;
      // window.print();

      // document = doc;

      document.querySelector('.appbar').style.display = 'none';
      document.querySelector('.cta').style.display = 'none';
      document.querySelector('.container').style.marginTop = 0;

      window.print();

      document.querySelector('.appbar').style.display = 'block';
      document.querySelector('.cta').style.display = 'block';
      document.querySelector('.container').style.marginTop = '5rem';
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
  //   
  // }
}
</script>

<style scoped>
.container{
  margin: 5rem auto 2rem auto;
}
.resume{
  margin: auto;
  width: 8.27in;
  background-color: aqua;
  padding: 2rem 1rem;
}
.subheader{
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
  padding-bottom: .5rem;
}
.subheader > button{
  margin-left: 1rem;
  padding: 0 .6rem;
  font-size: 2rem;
  font-weight: 600;
  background: none;
  border: 2px solid black;
  border-radius: 1000px;
  box-shadow: black 0px 0px 4px;
}
.title{
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid black;
  padding-bottom: .5rem;
}
</style>