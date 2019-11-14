<template>
  <transition name="drawer">
    <div class="container">
      <button @click="save">Save</button>
      <h1 class="title">RESUME</h1>

      <section class="personal">
        <input type="text" v-model="resumeX.personal.name" class="h1">
        
        <input type="text" v-model="resumeX.personal.email" class="p">
        <input type="text" v-model="resumeX.personal.mobile" class="p">
        <input type="text" v-model="resumeX.personal.address" class="p">
        <!-- <h1>{{resumeX.personal.name}}</h1>
        <p>{{resumeX.personal.email}}</p>
        <p>{{resumeX.personal.mobile}}</p>
        <p>{{resumeX.personal.address}}</p> -->
      </section>

      <div class="subheader"><h2>Educational Background</h2><button>add</button></div>
      <section class="edu" v-for="degree in resumeX.education" :key="degree.type">
        <div class="degree">
          <input type="text" v-model="degree.year" class="h3">
          <!-- <h3>Year {{degree.year}}</h3> -->
          <div class="edu_details">
            <div class="institute">
              <input type="text" v-model="degree.type" class="h3">
              <input type="text" v-model="degree.institute" class="p">
              <!-- <h3>{{degree.type}}:</h3> <p>{{degree.institute}}</p> -->
            </div>
            <div class="gpa">
              <h3>GPA:</h3> 
              <!-- <p>{{degree.gpa}}</p> -->
              <input type="text" v-model="degree.gpa" class="p">
            </div>
          </div>
        </div>
      </section>

      <!-- <h2>Languages</h2> -->
      <div class="subheader"><h2>Languages</h2><button>add</button></div>
      <section class="lang" v-for="(lang, idx) in resumeX.languages" :key="lang">
        <ul>
          <li>
            <!-- <p>{{lang}}</p> -->
            <input type="text" v-model="resumeX.languages[idx]" class="p">
          </li>
        </ul>
      </section>

      <!-- <h2>Skills</h2> -->
      <div class="subheader"><h2>Skills</h2><button>add</button></div>
      <section class="lang" v-for="(skill, idx) in resumeX.skills" :key="skill">
        <ul>
          <li>
            <!-- <p>{{skill}}</p> -->
            <input type="text" v-model="resumeX.skills[idx]" class="p">
          </li>
        </ul>
      </section>

      <!-- <h2>Personal Infromation</h2> -->
      <div class="subheader"><h2>Personal Infromation</h2><button>add</button></div>
      <section class="info">
        <div>
          <h3>Father</h3> 
          <!-- <p>{{resumeX.info.father}}</p> -->
          <input type="text" v-model="resumeX.info.father" class="p">
        </div>
        <div>
          <h3>Mother</h3> 
          <!-- <p>{{resumeX.info.mother}}</p> -->
          <input type="text" v-model="resumeX.info.mother" class="p">
        </div>
        <div>
          <h3>Date of Birth </h3> 
          <!-- <p>{{resumeX.personal.dob}}</p> -->
          <input type="text" v-model="resumeX.personal.dob" class="p">
        </div>
        <div>
          <h3>Blood Group</h3> 
          <!-- <p>{{resumeX.info.blood}}</p> -->
          <input type="text" v-model="resumeX.info.blood" class="p">
        </div>
        <div>
          <h3>Natinality</h3> 
          <!-- <p>{{resumeX.info.nationality}}</p> -->
          <input type="text" v-model="resumeX.info.nationality" class="p">
        </div>
        <div>
          <h3>Maritial Status</h3> 
          <!-- <p>{{resumeX.info.status}}</p> -->
          <input type="text" v-model="resumeX.info.status" class="p">
        </div>
        <div>
          <h3>Permanent Address</h3> 
          <!-- <p>{{resumeX.info.permanent}}</p> -->
          <input type="text" v-model="resumeX.info.permanent" class="p">
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
/* eslint-disable no-console */
import { mapGetters, mapActions } from 'vuex'
import { loadResume, updateResume } from '../services/profile_service'

export default {
  name: 'resume',
  data(){
    return{
      resumeX: {
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
      const updated = await updateResume(this.resumeX);
      this.resume = updated;
    }
  },
  async beforeCreate(){
    try {
      const resume = await loadResume();
      if(resume){
        this.updateResume(resume);
        this.resumeX = this.getResume();
      }
      this.toggleAuth(true);
      console.log(resume);
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
section{
  margin-bottom: 2rem;
  padding: 0rem 2rem;
}
ul{
  padding-left: 2rem;
}
li{
  list-style: circle;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 0rem;
}
.title{
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid black;
  padding-bottom: .5rem;
}
.degree{
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.institute{
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
}
.institute > h3{
  text-transform: uppercase;
}
.gpa{
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
}
.info > div{
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
}
.info p{
  margin-left: 1rem;
}

.name{
  border: none;
  background: none;
  font-size: 1.5rem;
  font-weight: 600;
}
</style>