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
  background-color: cornflowerblue;
  min-height: 200px;
}
</style>
