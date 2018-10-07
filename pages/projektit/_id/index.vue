<!-- Single project page -->
<template>
  <div class="single-project-page">
    <section class="project">
      <h1 class="project-title">{{ loadedProject.title }}</h1>
      <p>{{ loadedProject.content1 }}</p>
      <h2>Ohjelmointi</h2>
      <p>{{ loadedProject.content2 }}</p>
      <h2>Toteutus</h2>
      <p>{{ loadedProject.content3 }}</p>
    </section>
    <section class="project-link">
      <p v-if="loadedProject.link">Pääset tarkastelemaan sovellusta <a v-bind:href="loadedProject.link">tästä</a>.</p>
    </section>
    <div>
      <a v-bind:href="loadedProject.link"><img class="project-thumbnail" v-bind:src="loadedProject.screenshot" alt="Kuvakaappaus sovelluksesta."></a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData(context) {
    return axios.get('https://omat-sivut-85174.firebaseio.com/portfolio/' + context.params.id + '.json')
      .then(res => {
        return {
          loadedProject: res.data
        }
      })
      .catch(e => context.error(e))
  }
};
</script>


<style scoped>
.single-project-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.project {
  width: 100%;
}

@media (min-width: 768px) {
  .project {
    width: 600px;
    margin: auto;
  }
}

.project-title {
  margin: 0;
}

.project-link a {
  color: red;
  text-decoration: none;
}

.project-link a:hover,
.project-link a:active {
  color: salmon;
}

.project-thumbnail {
  width: 100%;
  max-width: 700px;
  background-position: center;
  background-size: cover;
}
</style>
