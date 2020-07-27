<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goods" />
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";

import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
    };
  },
  methods: {
    getGoodsDetail() {
      getDetail(this.iid).then((res) => {
        // 2.1.获取结果
        const data = res.result;
        console.log(data);

        // 2.2.获取顶部信息
        this.topImages = data.itemInfo.topImages;

        // 2.3.获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
      });
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getGoodsDetail();
  },
};
</script>

<style scoped>
</style>