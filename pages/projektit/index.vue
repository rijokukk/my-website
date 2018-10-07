<!-- Projektit page -->
<template>
  <div class="project-page">
    <section class="intro">
       <h1>Projektit</h1>
    </section>
    <div class="content">
      <h2>Klikkaa projektia saadaksesi lisätietoa</h2>
      <h3>Tiimissä toteutetut projektit:</h3>
      <ProjectList :projects="loadedTeamProjects" />
      <h3>Yksin toteutetut projektit:</h3>
      <ProjectList :projects="loadedSoloProjects" />
    </div>
  </div>
</template>

<script>
import ProjectList from "@/components/Projects/ProjectList";

export default {
  components: {
    ProjectList
  },
  computed: {
    loadedTeamProjects() {
      return this.$store.getters.loadedTeamProjects
    },
    loadedSoloProjects() {
      return this.$store.getters.loadedSoloProjects
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
  left: 10%;
  width: 80%;
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

h3 {
  padding-top: 30px;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.project-page {
  text-align: center;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .project-page {
    width: 1000px;
    margin: auto;
  }
}

</style>
