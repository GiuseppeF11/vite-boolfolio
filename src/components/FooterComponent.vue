<script>
export default {
  data() {
    return {
      message: 'FOOTER'
    }
  }
};
</script>

<template>

  <footer>
    <h1>
      {{ message }}
    </h1>
  </footer>

</template>

<style scoped>
footer {
  background-image: linear-gradient(90deg, rgb(68, 144, 190),rgb(251, 254, 241));
  padding: 10px 0;
  min-height: 10vh;
}
</style>
