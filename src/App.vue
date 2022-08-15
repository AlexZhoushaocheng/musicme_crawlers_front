<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
// import MainSearchVue from './components/MainSearch.vue';

import HomeVue from './components/Home.vue';
</script>

<template>
<div>
<img alt="Vue logo" src="./assets/logo.png" height="80"/>
</div>
  
  <!-- <a-image height="80px" src="./src/assets/logo.png"></a-image> -->
  <HomeVue></HomeVue>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
