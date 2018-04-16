<template>
  <section>
    <div class="logo">
      <app-logo/>
    </div>
    <div class="container">
      <div>
        <h1 class="title">
          seed
        </h1>
        <h2 class="subtitle">
          Nuxt.js with element-ui project
        </h2>
        <div class="links">
          <router-link to="/about" class="button--grey">静态页面</router-link>
          <router-link :to="'/users/'+ Math.floor(Math.random()*10+1)" class="button--grey">动态页面</router-link>
          <router-link to="/list" class="button--grey">异步请求</router-link>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>
.container {
  min-height: calc(100vh - 320px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}
.logo{
  background: #67c23a;
  width: 100%;
  text-align: center;
  padding-top: 100px;
  height: 320px;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
