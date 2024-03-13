<script>
export default {
  data() {
    return {
      message: 'HEADER'
    }
  }
};
</script>

<template>

  <header>
    <h1>
      {{ message }}
    </h1>
  </header>

</template>

<style scoped>
h1 {
  background-color: cadetblue;
}
</style>
