<template>
  <div id="app">
    <div>{{result}}</div>
  </div>
</template>

<script>
import { request } from "./network/request";

export default {
  name: "App",
  components: {},
  data() {
    return {
      result: ""
    };
  },
  created() {
    /* request({
      url: '/home/multidata',
    }, res => {
      console.log(res)
      this.result = res.data
    }) */

    /* request({
      baseConfig: {
        url: "/home/multidata"
      },
      success: res => {
        console.log(res);
        this.result = res.data;
      },
      failure: err => {}
    }); */

    request({
      url: "/home/multidata"
    })
      .then(res => {
        console.log(res);
        this.result = res.data;
      })
      .catch(err => {});
  }
};
</script>

<style>
</style>
