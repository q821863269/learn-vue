<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add()">+</button>
    <button @click="sub()">-</button>
    <button @click="addNum(5)">+5</button>
    <button @click="addNum(10)">+10</button>

    <hello-vuex></hello-vuex>

    <hr />
    <h2>测试getter相关</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.testParams(10)}}</h2>

    <hr />
    <h2>测试info对象是否是响应式的</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息1</button>
    <button @click="aUpdateInfo">修改信息2</button>
    <button @click="bUpdateInfo">修改信息3</button>

    <hr />
    <h2>测试modules中的内容</h2>
    <h2>{{$store.state.a}}</h2>
    <button @click="updateName">修改名字1</button>
    <h2>{{$store.getters.fullName}}</h2>
    <button @click="aUpdateName">修改名字2</button>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import { INCREMENT } from "./store/mutaions-type";

export default {
  name: "App",
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "我是APP组件"
    };
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit("decrement");
    },
    addNum(num) {
      // 普通的提交封装
      this.$store.commit("incrementCount", num);

      // 特殊的提交封装,这种提交方式在mutations中获取的count是个对象
      this.$store.commit({
        type: "incrementCount2",
        num
      });
    },
    updateInfo() {
      this.$store.commit("updateInfo");
    },
    aUpdateInfo() {
      this.$store.dispatch("aUpdateInfo", {
        params: "params",
        success: () => {
          console.log("里面已经完成了");
        }
      });
    },
    bUpdateInfo() {
      this.$store.dispatch("bUpdateInfo", "我是消息").then(res => {
        console.log(res);
      });
    },
    updateName() {
      this.$store.commit("updateName", "newName");
    },
    aUpdateName() {
      this.$store.dispatch("aUpdateName")
    }
  }
};
</script>

<style>
</style>
