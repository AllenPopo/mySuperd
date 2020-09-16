<template>
  <div id="app">
    <!-- <ul class="nav-ul">
      <li v-for="(value,key) in navList" :key="key" :class="key==n?'active':''" @click="n=key"  >
        {{value.name}}
      </li>        
    </ul> -->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
