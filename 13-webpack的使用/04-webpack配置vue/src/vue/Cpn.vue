<template>
  <div>
    <h1>我是Cpn组件的标题</h1>
    <p>我是Cpn组件的内容，哈哈哈</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: "Cpn组件的Name"
    };
  },
  methods: {
    btnClick() {
      console.log("Cpn");
    }
  }
};
</script>

<style scoped>
.title {
  color: green;
}
</style>