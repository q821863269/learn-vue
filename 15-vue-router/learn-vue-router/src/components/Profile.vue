<template>
  <div>
      <h2>我是Profile组件</h2>
      <p>{{info}}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log("profile created");
  },
  destroyed() {
    console.log("profile destroyed");
  },
  computed: {
      info() {
          // 这个$route是激活的路由对象
          return this.$route.query;
      }
  }
};
</script>

<style>
</style>
