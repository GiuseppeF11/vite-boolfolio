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

    prevPage() {
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
    <h2 class="page-title">
      Progetti
    </h2>
    <div class="container">
      <div class="row row-cols-3">
        <div v-for="project in projects" :key="project.id" class="col">
          <div class="card m-3 p-2">
            <h4 class="fw-bold project-title">
              {{ project.id}}- {{ project.title}}
            </h4>
            <div v-if="project.full_cover_img != null">
                <img :src="project.full_cover_img" :alt="project.title"> <!-- Grazie ad appends sul Model Project nel backend accediamo al percorso dell'immagine -->
            </div>
            <p class="my-2 detail" v-if="project.type.title">
              <strong>Categorie: </strong>
              <span class="badge bg-secondary mx-1">{{ project.type.title}}</span>
            </p>
            <p class="my-2 detail" v-if="project.technologies.length > 0">
              <strong>
                Tecnologie:
              </strong>
              <span v-for="technology in project.technologies" class="badge bg-secondary mx-1">
                  {{ technology.title}}
              </span>
            </p>
						<router-link :to="{name:'projects.show', params: {slug:  project.slug}}" class="btn show-btn"> <!-- Per ogni post generato avrò la rotta che mi indirizza al suo specifico slug (parametro della rotta) -->
							<p class="m-0 fw-bold text-light ">Vai al progetto</p>
						</router-link>
          </div>
      </div>
      </div>
    </div>
    <div class="pages-nav row w-50 m-auto justify-content-center text-center ">
      <button class="col-auto btn page-btn  mx-2" @click="prevPage()">Prev</button>
      <button class="col-auto btn page-btn mx-2" @click="nextPage()">Next</button>
        <div>Pagina {{ currentPage }} di {{ lastPage }}</div>
    </div>
  </main>

</template>

<style scoped>
main {
  background-image: linear-gradient(90deg, rgb(68, 144, 190),rgb(251, 254, 241));
  padding: 20px 0;
  border-bottom: 2px solid grey;
}

.page-title {
  background-color: #D3E6E6;
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
  background-color: #CDE2E4;
  box-shadow: 5px 5px 10px black;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  transition: ease 0.5s;
  
    &:hover {
      background-color: #4993BF;
      scale: 1.03;
    }

    .project-title {
      min-height: 80px;
    }

    .detail {
      min-height: 60px;
    }

    .show-btn {
      background-color: #4892BF;
    }
}

.page-btn {
  background-color: #4892BF;
  font-weight: 700;
  color: white;
  &:hover {
    background-color: #7bbae0;
    
  }
}

img {
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}



</style>
