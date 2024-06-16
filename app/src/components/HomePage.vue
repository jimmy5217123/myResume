<!-- src/components/Home.vue -->
<template>
  <div class="container">
    <div class="left-column">
      <h1>Welcome to My Resume</h1>
    </div>
    <div class="right-column">
      <router-link to="/resume">View Resume</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.container {
  text-align: center;
  padding: 50px 20px;
}
</style>
