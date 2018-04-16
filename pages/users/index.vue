<template>
  <section class="container">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <br>
        <br>
        <h1 class="title">
          用户示例
        </h1>
        <br>
        <hr>
        <br>
        <h2 class="subtitle">
          变动的用户编号{{$route.params.id}}
        </h2>
      </el-col>
    </el-row>
  </section>
</template>

<script>

  export default {
    components: {

    }
  }
</script>
