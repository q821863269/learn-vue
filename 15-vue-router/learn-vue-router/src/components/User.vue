<template>
  <div>
      <h2>我是用户界面</h2>
      <p>我是用户的相关信息，嘿嘿嘿</p>
      <h2>{{id}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
      id() {
          // 这个$route是激活的路由对象
          return this.$route.params.id;
      }
  }
};
</script>

<style>
</style>
