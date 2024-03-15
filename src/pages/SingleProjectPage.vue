<script>
import axios from 'axios';

export default {
  data() {
    return {
      project: null
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
            console.log(response.data);

            if (response.data.success) {
              this.project = response.data.results;
            }
            else {
              this.$router.push({name:'not-found'});
            }
          })
    },
  }
};
</script>

<template>

  <main v-if="project != null">
    <h3 class="page-title">
      {{project.title}}
    </h3>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card m-3 p-2 w-50 mx-auto">
            <div v-if="project.full_cover_img != null">
                <img :src="project.full_cover_img" :alt="project.title"> <!-- Grazie ad appends sul Model Project nel backend accediamo al percorso dell'immagine -->
            </div>
            <p v-if="project.description">
              {{ project.description}}
            </p>
            <p>
            </p>
          </div>
      </div>
      </div>
    </div>
    <div class="d-flex justify-content-center ">
      <router-link :to="{name: 'projects.index'}" class="btn page-btn">
        <p class="m-0 fw-bold text-light ">Torna ai progetti</p>
      </router-link>
    </div>
  </main>

</template>

<style scoped>
main {
  background-image: linear-gradient(90deg, rgb(68, 144, 190),rgb(251, 254, 241));
  padding: 20px 0;
  border-bottom: 2px solid grey;
  min-height: 80vh;
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
