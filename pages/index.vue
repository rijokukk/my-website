<!-- Home page -->
<template>
  <div class="home-page">
    <section class="intro">
      <h1>Tervetuloa sivuilleni!</h1>
    </section>
    <div class="content">
      <p>Nimeni on Riku Kukkaniemi ja olen urani alkuvaiheilla oleva ohjelmistokehittäjä. Avainsanoja osaamisestani ovat 
        JavaScript, jQuery, Vue.js, Nuxt.js, React.js, Node.js, RESTful API, CSS, Bootstrap, Java, Python, C# ja Flask.</p>
      <p>Tämä sivusto toimii portfoliona, jossa pääset tutustumaan enemmän minun 
        <nuxt-link to="/mina">osaamiseeni</nuxt-link> ja toteuttamiini 
        <nuxt-link to="/projektit">projekteihin</nuxt-link>.</p>
        <p>Yhteydenotot <a href="mailto:riku.j.kukkaniemi@student.jyu.fi">riku.j.kukkaniemi@student.jyu.fi</a>.</p>
    </div>
    <section class="projects">
          <h3>Tiimissä toteutetut projektit:</h3>
          <ProjectList :projects ="loadedTeamProjects" />
          <h3>Yksin toteutetut projektit:</h3>
          <ProjectList :projects ="loadedSoloProjects" />
        </section>
  </div>
</template>

<script>
import ProjectList from "@/components/Projects/ProjectList";
import axios from "axios";

export default {
  components: {
    ProjectList
  },
  computed: {
    loadedTeamProjects() {
      return this.$store.getters.loadedTeamProjects;
    },
    loadedSoloProjects() {
      return this.$store.getters.loadedSoloProjects;
    }
  }
};
</script>

<style scoped>
.intro {
  height: 100px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 5%;
  left: 25%;
  width: 50%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
  text-align: center;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

h3 {
  padding-top: 30px;
}

.content {
  padding: 30px 30px 0px 30px;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
}

.content a {
  color: red;
  text-decoration: none;
}

.content a:hover,
.content a:active {
  color: salmon;
}

.projects {
  text-align: center;
}

@media (min-width: 768px) {
  .content {
    width: 800px;
    margin: auto;
  }
}

@media (min-width: 768px) {
  .projects {
    width: 1000px;
    margin: auto;
  }
}
</style>
