<script>
import axios from 'axios';

export default {
  data() {
    return {
      projects: [],
      currentPage: 1,
      lastPage: 1,
    }
  },

  created() {
    this.getProjects(this.currentPage);
  },
  methods: {
    getProjects(page) {
      axios
          .get('http://127.0.0.1:8000/api/projects', {
            params: {
              page: page
            }
          })
          .then(response => {
              console.log(response.data.results.data);
              this.projects = response.data.results.data;
              this.currentPage = response.data.results.current_page;
              this.lastPage = response.data.results.last_page;
          })
    },

    prewPage() {
      if (this.currentPage > 1) {
        this.getProjects(this.currentPage - 1);
      }
    },

    nextPage() {
      if (this.currentPage < this.lastPage) {
        this.getProjects(this.currentPage + 1);
      }
    },
  }
};
</script>

<template>

  <main>
    <h1 class="title">
      Progetti
    </h1>
    <div class="container">
      <div class="row row-cols-3">
        <div v-for="project in projects" :key="project.id" class="col">
          <div class="card m-3 p-2">
            <h3>
              {{ project.id}}) {{ project.title}}
            </h3>
            <div v-if="project.full_cover_img != null">
                <img :src="project.full_cover_img" :alt="project.title"> <!-- Grazie ad appends sul Model Project nel backend accediamo al percorso dell'immagine -->
            </div>
            <p>
              {{ project.description}}
            </p>
            <p>
              <strong>Categorie: </strong>
              <div>{{ project.type.title}}</div>
            </p>
            <p v-if="project.technologies.length > 0">
              <strong>
                Tecnologie:
              </strong>
              <ul v-for="technology in project.technologies">
                  <li>{{ technology.title}}</li>
              </ul>
            </p>
						<router-link :to="{name:'projects.show', params: {slug:  project.slug}}" class="btn btn-secondary">
							Vedi progetto
						</router-link>
          </div>
      </div>
      </div>
    </div>
    <div class="pages-nav row w-50 m-auto justify-content-center text-center ">
      <button class="col-auto btn btn-success mx-2" @click="prewPage()">Prew</button>
      <button class="col-auto btn btn-success mx-2" @click="nextPage()">Next</button>
        <div>Pagina {{ currentPage }} di {{ lastPage }}</div>
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
