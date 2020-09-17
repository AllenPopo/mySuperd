<template>
<div class="nav-root">
    <div class="nav-item" v-for="(value,key) in navList" :key="key" :class="value.index==activeIndex?'active':''" @click="clickNav(value)">
    {{value.name}}
    </div>
</div>
</template>

<script>
export default {
  name: 'Nav',
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
          path: '/test'
        }
      ]
    }
  },
  methods: {
    clickNav(val) {
      this.activeIndex = val.index;
      this.$router.push({ path: val.path });
    }
  }
}
</script>

<style scoped lang='css'>
.nav-root {
  display: flex;
  text-align: center;
  line-height: 24px;
  justify-content: start;

}
  .nav-item {
    /* margin: 0 8px; */
    padding: 4px 8px;
    background-color: gray;
  }
  .active {
    background-color: #f40;
  }
</style>
