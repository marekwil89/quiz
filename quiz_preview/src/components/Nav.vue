<template>
  <md-toolbar class="md-accent" md-elevation="1">
    <!-- <h3 class="md-title" style="flex: 1">Title</h3> -->
    <router-link to="/"><md-button class="md-primary">Lista Quizów</md-button></router-link>
    <a href="http://80.211.200.144:3000"><md-button class="md-primary">Stwórz Quiz</md-button></a>
  </md-toolbar>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>

<style lang="scss" scoped>
  .router-link-active{
    text-decoration: none !important; 
    color: #ffffff !important;
  }
</style>