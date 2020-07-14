<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/message" tag="button">消息</router-link>
    <p>我是首页内容开始，哈哈哈</p>
    <router-view></router-view>
    <p>我是首页内容结束，哈哈哈</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news"
    };
  },
  created() {
    console.log("home created");
  },
  destroyed() {
    console.log("home destroyed");
  },
  // 这两个函数，只有该组件被保持了状态使用keep-alive时，才是有效的
  activated() {
    console.log("home activated");
    this.$router.replace(this.path).catch(err => {});
  },
  deactivated() {
    console.log("home deactivated");
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    next()
  }
};
</script>

<style>
</style>
