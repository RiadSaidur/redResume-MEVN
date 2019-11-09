<template>
  <transition name="drawer">
    <div class="container">
      <h1 class="title">RESUME</h1>

      <section class="personal">
        <h1>{{resumeX.name}}</h1>
        <p>{{resumeX.email}}</p>
        <p>{{resumeX.mobile}}</p>
        <p>{{resumeX.address}}</p>
      </section>

      <h2>Educational Background</h2>
      <section class="edu" v-for="(degree, idx) in resumeX.education" :key="idx">
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
      <section class="lang" v-for="(lang, idx) in resumeX.skills" :key="idx">
        <ul>
          <li><p>{{lang}}</p></li>
        </ul>
      </section>

      <h2>Personal Infromation</h2>
      <section class="info">
        <div><h3>Father</h3> <p>{{resumeX.father}}</p></div>
        <div><h3>Mother</h3> <p>{{resumeX.mother}}</p></div>
        <div><h3>Date of Birth </h3> <p>{{resumeX.dob}}</p></div>
        <div><h3>Blood Group</h3> <p>{{resumeX.blood}}</p></div>
        <div><h3>Natinality</h3> <p>{{resumeX.nationality}}</p></div>
        <div><h3>Maritial Status</h3> <p>{{resumeX.status}}</p></div>
        <div><h3>Permanent Address</h3> <p>{{resumeX.permanent}}</p></div>
      </section>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getResume } from '../services/profile_service'

export default {
  name: 'resume',
  data(){
    return{
      resumeX: null
    }
  },
  methods: {
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
      const resume = await getResume();
      this.updateResume(resume);
      this.resumeX = this.getResume();
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