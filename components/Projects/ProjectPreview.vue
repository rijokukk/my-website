<!-- A single project preview -->
<template>
  <nuxt-link :to="projectLink" class="project-preview">
    <article>
      <div
        class="project-thumbnail"
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"></div>
      <div class="project-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    }
  },
  computed: {
    projectLink() {
      return '/projektit/' + this.id
    }
  }
}
</script>


<style scoped>
.project-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .project-preview {
    width: 400px;
    margin: 10px;
  }
}

@media (max-width: 850px) {
  .project-preview {
    width: 300px;
    margin: 10px;
  }
}

.project-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.project-content {
  padding: 10px;
  text-align: center;
}

a:hover .project-content,
a:active .project-content {
  background-color: #ccc;
}
</style>
