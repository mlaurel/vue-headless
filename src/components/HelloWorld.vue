<template>
  <div class="hello">
    <div v-for="proj in projects">
      <h1>{{ proj.title.rendered }}</h1>
      <!-- <img  :src="proj.better_featured_image.source_url"> -->
    <!-- <h1>{{ msg }}</h1> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      projects: []
    }
  },
  created: function() {
    this.$http.get('wp/v2/projects').then(response => {
      // console.log(response);
      for (let project in response.data) {
        this.projects.push(response.data[project]);
      }
    }), error => {
      alert(error);
    }
  }
  // props: {
    // msg: String, 
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 80vw;
}
</style>
