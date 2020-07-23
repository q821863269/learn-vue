<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 多复制一份，用来实现悬停效果 -->
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="tabControlIsShow"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="2"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMoreData"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <home-recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" />
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

import { debounce } from "common/utils";

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
      backTopShow: false,
      tabOffsetTop: 0,
      tabControlIsShow: false,
      saveY: 0
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
        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentTabType = "pop";
          break;
        case 1:
          this.currentTabType = "new";
          break;
        case 2:
          this.currentTabType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 判断BackTop是否显示
      this.backTopShow = -position.y > 1000;

      // 判断TabControl是否吸顶
      this.tabControlIsShow = -position.y > this.tabOffsetTop;
    },
    loadMoreData() {
      console.log("触发上拉加载更多。。。");
      this.getHomeGoods(this.currentTabType);
    },
    swiperImageLoad() {
      // 获取tabControl的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentTabType].list;
    }
  },
  mounted() {
    // 图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.scrollRefreshHeight, 100);
    this.$bus.$on("itemImageLoad", () => {
      // 执行返回函数
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.scrollRefreshHeight()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
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
  /* padding-top: 40px; */
  /* padding-bottom: 50px; */
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.tab-control {
  position: relative;
  z-index: 9;
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