<template>
  <div class="nav-root">
    <div>主页</div>
    <div>测试</div>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    setPowerData() {
      this.testData = [
        {
          id :"AAAAA555555",
          name :"测试",
          number : parseInt(1000*Math.random()),
          time: new Date(),
          vaule: parseInt(1000*Math.random())
        }
      ];
      axios.post(this.url, this.testData).then(ref =>{
        console.log('返回数据', ref);
      })
    }
  },
  beforeDestroy() {
  }
}
</script>

<style scoped lang="scss">
.nav-root {
  display: flex;
  text-align: center;
  line-height: 24px;
  justify-content: space-between;
}
</style>
