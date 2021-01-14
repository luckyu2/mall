<template>
  <tab-bar>
    <!--        注意path后面是= 不是 ： 正确写法path=""-->
    <tabBar-item path="/home" >
      <img slot="item-icon" src="~assets/img/tabBar/home.svg" alt="home">
      <img  slot="item-icon-active" src="~assets/img/tabBar/home-on.svg" alt="home">
      <div slot="item-text" >主页</div>
    </tabBar-item>

    <tabBar-item path="/category">
      <img  slot="item-icon" src="~assets/img/tabBar/category.svg" alt="category">
      <img  slot="item-icon-active" src="~assets/img/tabBar/category-on.svg" alt="category">
      <div slot="item-text">分类</div>
    </tabBar-item>

    <tabBar-item path="/cart">
      <img  slot="item-icon" src="~assets/img/tabBar/shopcart.svg" alt="cart">
      <img  slot="item-icon-active" src="~assets/img/tabBar/shopcart-on.svg" alt="cart">
      <div slot="item-text">购物车</div>
    </tabBar-item>

    <tabBar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabBar/profile.svg" alt="profile">
      <img  slot="item-icon-active" src="~assets/img/tabBar/profile-on.svg" alt="profile">
      <div slot="item-text" >我的</div>
    </tabBar-item>

  </tab-bar>
</template>

<script>
  import tabBar from 'components/common/tabBar/tabBar';
  import tabBarItem from 'components/common/tabBar/tabBar-item'
  export default {
    name: "MainTabBar",
    components:{
      tabBar,
      //上面的template中的tabBarItem可以用-分隔开
      tabBarItem
    }
  }


</script>

<style scoped>

</style>