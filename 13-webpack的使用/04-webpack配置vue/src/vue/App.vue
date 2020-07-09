<template>
  <div>
    <h1>Body</h1>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">我是按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn";

export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: "Hello Webpack"
    };
  },
  methods: {
    btnClick() {
      console.log("btnClick");
    }
  }
};
</script>

<style scoped>
.title {
  color: green;
}
</style>