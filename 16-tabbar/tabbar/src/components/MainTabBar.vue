<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="orange">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="无" />
        <img slot="item-active-icon" src="@/assets/img/tabbar/home_active.svg" alt="无" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="无" />
        <img slot="item-active-icon" src="@/assets/img/tabbar/category_active.svg" alt="无" />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="green">
        <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt="无" />
        <img slot="item-active-icon" src="@/assets/img/tabbar/cart_active.svg" alt="无" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="red">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="无" />
        <img slot="item-active-icon" src="@/assets/img/tabbar/profile_active.svg" alt="无" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>

</style>