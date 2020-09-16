<template>
  <div id="app">
    <div class="nav-root">
      <div class="nav-item" v-for="(value,key) in navList" :key="key" :class="value.index==activeIndex?'active':''" @click="clickNav(value)">
        {{value.name}}
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      activeIndex: 0,
      navList: [
        {
          name: '首页',
          index: 0,
          path: '/'
        },
        {
          name: '测试',
          index: 1,
          path: 'test'
        }
      ]
    }
  },
  methods: {
    clickNav(val) {
      this.activeIndex = val.index;
      router.push({ path: val.path });
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
#app .nav-root {
  display: flex;
  text-align: center;
  line-height: 24px;
  justify-content: start;
}
#app .nav-root .nav-item {
  /* margin: 0 8px; */
  padding: 4px 8px;
  background-color: gray;
}

#app .nav-root .active {
  background-color: #f40;
}
</style>
