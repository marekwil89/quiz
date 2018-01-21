<template>
    <md-toolbar class="md-accent" md-elevation="1">
      <!-- <h3 class="md-title" style="flex: 1">Title</h3> -->
      <router-link to="/"><md-button class="md-accent">Lista Quizów</md-button></router-link>
    </md-toolbar>
</template>

<script>
    export default {
        name: 'Nav'
    }
</script>

<style lang="scss" scoped>
  .router-link-active{
    background: lighten($color: #64dd17, $amount: 20%);
  }
</style>