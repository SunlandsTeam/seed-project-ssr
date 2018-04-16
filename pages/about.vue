<template>
  <section class="container">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <br>
        <br>
        <h1 class="title">
          {{title}}
        </h1>
        <br>
        <hr>
        <br>
        <p class="subtitle">
          {{subtitle}}
        </p>
      </el-col>
    </el-row>
  </section>
</template>

<script>

  export default {
    data() {
      return {
        title: '关于我们',
        subtitle: '这是一个静态页面示例'
      }
    },
    components: {}
  }
</script>
