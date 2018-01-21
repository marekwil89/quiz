<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
  *{
    /* margin: 0; */
    box-sizing: border-box;
  }

  fieldset{
    border: none;
  }
</style>
