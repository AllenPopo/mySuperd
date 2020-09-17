<template>
  <div id="app">
    <nav-title></nav-title>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    'nav-title': Nav
  }
}
</script>

<style>
#app {
  font-family: 'PingFang SC','Segoe UI',Tahoma,Helvetica,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height:100%;
}
body{
  padding: 0;
  margin: 0;
}
</style>
