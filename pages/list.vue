<template>
  <section class="container">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <br>
        <br>
        <h1 class="title">
          列表页面
        </h1>
        <br>
        <hr>
        <br>
        <p style="margin-bottom: 10px;">以下数据是模拟的异步请求：</p>
        <ul style="line-height: 32px;">
          <li v-for="item in list" :key="item.name">
            <p>
              <a :href="item.url">{{item.name}}</a>
            </p>
          </li>
        </ul>
      </el-col>
    </el-row>
  </section>
</template>

<script>
  import axios from 'axios';

export default {
  data() {
    return {
      list:[],
    }
  },
  asyncData ({req, params}) {
    return axios.get('/data.json').then((res)=> {
      console.log(res.data);
      const test = res.data.links
      return {
        list:test
      };
    });
  },
}
</script>
