<template>
  <div id="app">
    <!-- 如果加上replace不会留下history记录 -->
    <!-- <router-link to="/home" tag="button" active-class="active">首页</router-link>
    <router-link to="/about" tag="button" active-class="active">关于</router-link>-->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/' + userId" tag="button">用户</router-link>
    <hr>
    <br>
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <hr />
    <router-view></router-view>
    <hr />
    <h2>我是APP中一些底部版权信息</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: 'heihei'
    }
  },
  methods: {
    homeClick() {
      //this.$router.push('/home')
      this.$router.replace('/home').catch(err => {})
    },
    aboutClick() {
      //this.$router.push('/about')
      this.$router.replace('/about').catch(err => {})
    }
  }
};
</script>

<style>
.active {
  color: red;
}
</style>
