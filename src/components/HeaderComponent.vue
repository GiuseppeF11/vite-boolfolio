<script>
export default {
  data() {
    return {
      links: [
        {
          routeName: 'home',
          label: 'Home',
        },
        {
          routeName: 'projects.index',
          label: 'Projects',
        },
        {
          routeName: 'contacts.index',
          label: 'Contacts',
        },
      ]
    }
  }
};
</script>

<template>

  <header>
    <div class="container">
      <div class="row ">
        <div class="col ">
            <h1 class="logo">Portfolio - Peppe</h1>
        </div>
        <div class="col d-flex justify-content-end">
          <router-link :to="{name: link.routeName}" class="btn page-btn m-1" v-for="link in links"> 
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </div>
  </header>

</template>

<style scoped>
header {
  background-image: linear-gradient(90deg, rgb(68, 144, 190),rgb(251, 254, 241));
  border-bottom: 2px solid grey;
  padding: 10px 0;
  min-height: 10vh;
}

.logo {
  color: white;
  background-color: #4892BF;
  display: inline-block;
  border-radius: 10px;
  border: 2px solid black;
  padding: 0 10px;
}
</style>
