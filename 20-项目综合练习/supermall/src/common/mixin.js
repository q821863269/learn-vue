import { BACKTOP_DISTANCE, POP, NEW, SELL } from "./const";
import { debounce } from "./utils"
import BackTop from "components/content/backTop/BackTop";

export const backTopMixin = {
  components: {
    BackTop
  },
  data: function () {
    return {
      backTopShow: false
    }
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    listenShowBackTop(position) {
      this.backTopShow = -position.y > BACKTOP_DISTANCE
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null,
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.scrollRefreshHeight, 100);
    this.itemImgListener = () => {
      this.newRefresh();
    }
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  }
}