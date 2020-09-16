<template>
  <div class="hello">
    <h1>{{ testData[0].name }}</h1>
    <h1>{{ testData[0].number }}</h1>
    <button @click="isSend(true)">发送</button>
    <button @click="isSend(false)">暂停</button>
  </div>
</template>

<script>
// import { postTestData } from '@/api/importExport';
import axios from 'axios';

export default {
  name: 'home',
  data () {
    return {
      timer: '',
      url: 'https://api.powerbi.com/beta/1e4168a5-9bd1-4faa-9620-e6b1a9468474/datasets/8286908f-305c-4033-82bf-7534a7b533a2/rows?redirectedFromSignup=1&key=lKdqs5i9sNGyCFUAd%2FE%2B7oGXWSWcdehRNAvl9FTOG94s78zXhDo%2FKZ%2FPa4%2BbMxbq8pfrPgxeakWoInWs0SRPNw%3D%3D',
      testData: [
        {
          id :"AAAAA555555",
          name :"测试",
          number :9800,
          time: new Date(), //.Format('yyyy-MM-dd hh:mm:ss')
          vaule: parseInt(1000*Math.random())
        }
      ]
    }
  },
  created () {
    this.timer = setInterval(this.setPowerData, 2000);
  },
  methods: {
    isSend(issend) {
      if(issend) {
        this.timer = setInterval(this.setPowerData, 2000);
      } else {
        clearInterval(this.timer);
      }
    },
    setPowerData() {
      this.testData = [
        {
          id :"AAAAA555555",
          name :"Power BI 数据集",
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
    clearInterval(this.timer);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
