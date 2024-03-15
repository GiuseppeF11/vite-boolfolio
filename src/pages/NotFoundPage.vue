<script>
export default {
  data() {
    return {
    }
  },

  created() {
  },
};
</script>

<template>

  <main class="d-flex flex-column  justify-content-center align-items-center ">
    <h1 class="text-dark">
      ERROR 404 | NOT FOUND
    </h1>
    <div>
      <router-link :to="{name: 'home'}" class="btn btn-dark m-1">
        Torna alla Home
      </router-link>
    </div>
  </main>

</template>

<style scoped>
main {
  min-height: 80vh;
  background-color: rgb(57, 78, 87);
}
</style>
