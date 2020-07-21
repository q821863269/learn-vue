<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="2"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMoreData"
    >
      <home-swiper :banners="banners" />
      <home-recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top v-show="backTopShow" @click.native="backTopClick" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import homeApi from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentTabType: "pop",
      backTopShow: false
    };
  },
  methods: {
    /**
     * 网络请求相关
     */
    getHomeMultidata() {
      homeApi.getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      homeApi.getHomeGoods(type, page).then(res => {
        this.goods[type].page = page;
        this.goods[type].list.push(...res.data.list);
        this.$refs.scroll.finishPullUp();
      });
    },
    /**
     * 事件监听相关的方法
     */
    tabClick(type) {
      switch (type) {
        case "流行":
          this.currentTabType = "pop";
          break;
        case "新款":
          this.currentTabType = "new";
          break;
        case "精选":
          this.currentTabType = "sell";
          break;
      }
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.backTopShow = -position.y > 1000;
    },
    loadMoreData() {
      console.log('触发上拉加载更多。。。')
      this.getHomeGoods(this.currentTabType);
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentTabType].list;
    }
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  }
};
</script>

<style scoped>
#home {
  /* 固定顶部导航栏 */
  padding-top: 40px;
  /* padding-bottom: 50px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* 固定顶部导航栏 */
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

/* 吸顶效果 */
.tab-control {
  position: sticky;
  top: 40px;
  z-index: 1;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 40px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>