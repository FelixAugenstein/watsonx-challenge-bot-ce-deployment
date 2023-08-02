<template>

  <router-view />

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;1,700&display=swap');
#app {
  font-family: 'IBM Plex Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  font-weight: 300;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
h1, h2, h3 {
  font-weight: 300;
}
body{
  margin: 0;
  padding: 0;
  background-image: url('../public/watsonx-background.jpg');
  background-position: center center;
  background-size: cover;
}
</style>
