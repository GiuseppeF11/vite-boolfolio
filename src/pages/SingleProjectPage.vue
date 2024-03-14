<script>
import axios from 'axios';

export default {
  data() {
    return {
    }
  },

  created() {
    this.getProject();
  },
  methods: {
    getProject() {
      axios
          .get('http://127.0.0.1:8000/api/projects/' + this.$route.params.slug) // Come parametro della rotta avremo i singoli slug
          .then(response => {
            console.log(response.data.results);
            this.project = response.data.results;
          })
    },
  }
};
</script>

<template>

  <main>
    <h3 class="title">
      {{ project.title}}
    </h3>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card m-3 p-2 w-50 mx-auto">
            <div v-if="project.full_cover_img != null">
                <img :src="project.full_cover_img" :alt="project.title"> <!-- Grazie ad appends sul Model Project nel backend accediamo al percorso dell'immagine -->
            </div>
            <p>
              {{ project.description}}
            </p>
          </div>
      </div>
      </div>
    </div>
  </main>

</template>

<style scoped>
main {
  background-color: rgb(94, 118, 89);
  padding: 20px 0;
}

.title {
  background-color: rgb(57, 255, 156);
  box-shadow: 0px 0px 10px rgb(0, 0, 0);
  text-align: center;
  margin: 0 auto;
  width: 30vw;
  padding: 5px 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    animation: bounce 0.5s infinite alternate;
  }
}
@keyframes bounce {
  to { transform: scale(1.03); }
}

.card {
  background-color: rgb(101, 184, 0);
  box-shadow: 5px 5px 10px black;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  transition: ease 0.5s;
  
    &:hover {
      background-color: rgb(183, 255, 0);
      scale: 1.03;
    }
}
</style>
