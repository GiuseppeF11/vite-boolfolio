<script>
export default {
  data() {
    return {
    }
  }
};
</script>

<template>

  <header>
    <div class="container">
      <div class="row ">
        <div class="col ">
            <h1>Portfolio - Peppe</h1>
        </div>
        <div class="col d-flex justify-content-end ">
          <router-link :to="{name: 'home'}" class="btn btn-info m-1">
            Home
          </router-link>
          <router-link :to="{name: 'projects.index'}" class="btn btn-info m-1">
            Projects
          </router-link>
        </div>
      </div>
    </div>
  </header>

</template>

<style scoped>
header {
  background-color: cadetblue;
}
</style>
