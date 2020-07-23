<template>
  <div id="detail">
    <detail-nav-bar />
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";

import detailApi from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar
  },
  data() {
    return {
      iid: null,
      result: {}
    };
  },
  methods: {
    getGoodsDetail() {
      detailApi.getGoodsDetail(this.iid).then(res => {
        this.result = res.result;
        console.log(this.result);
      });
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getGoodsDetail();
  }
};
</script>

<style scoped>
</style>