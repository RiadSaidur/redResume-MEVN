<template>
  <transition name="drawer">
    <div class="container">
      <h1 class="title">RESUME</h1>

      <section class="personal">
        <h1>{{resumeX.personal.name}}</h1>
        <p>{{resumeX.personal.email}}</p>
        <p>{{resumeX.personal.mobile}}</p>
        <p>{{resumeX.personal.address}}</p>
      </section>

      <h2>Educational Background</h2>
      <section class="edu" v-for="degree in resumeX.education" :key="degree.type">
        <div class="degree">
          <h3>Year {{degree.year}}</h3>
          <div class="edu_details">
            <div class="institute">
              <h3>{{degree.type}}:</h3> <p>{{degree.institute}}</p>
            </div>
            <div class="gpa">
              <h3>GPA:</h3> <p>{{degree.gpa}}</p>
            </div>
          </div>
        </div>
      </section>

      <h2>Languages</h2>
      <section class="lang" v-for="lang in resumeX.languages" :key="lang">
        <ul>
          <li><p>{{lang}}</p></li>
        </ul>
      </section>

      <h2>Skills</h2>
      <section class="lang" v-for="skill in resumeX.skills" :key="skill">
        <ul>
          <li><p>{{skill}}</p></li>
        </ul>
      </section>

      <h2>Personal Infromation</h2>
      <section class="info">
        <div><h3>Father</h3> <p>{{resumeX.info.father}}</p></div>
        <div><h3>Mother</h3> <p>{{resumeX.info.mother}}</p></div>
        <div><h3>Date of Birth </h3> <p>{{resumeX.personal.dob}}</p></div>
        <div><h3>Blood Group</h3> <p>{{resumeX.info.blood}}</p></div>
        <div><h3>Natinality</h3> <p>{{resumeX.info.nationality}}</p></div>
        <div><h3>Maritial Status</h3> <p>{{resumeX.info.status}}</p></div>
        <div><h3>Permanent Address</h3> <p>{{resumeX.info.permanent}}</p></div>
      </section>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { loadResume } from '../services/profile_service'

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
    /* eslint-disable no-console */
    ...mapGetters([
      'getResume'
    ]),
    ...mapActions([
      'updateResume',
      'toggleAuth'
    ])
  },
  async beforeCreate(){
    /* eslint-disable no-console */
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
  }
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
h2{
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
</style>