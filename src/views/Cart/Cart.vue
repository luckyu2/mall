<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车（{{cartLength}}）</div>
    </nav-bar>
    <cart-list/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  import CartList from "./childcomps/CartList"
  import CartBottomBar from "./childcomps/CartBottomBar"
  import {mapGetters} from "vuex"

  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      //mapGetters的2个用法
      //...mapGetters([cartLength,cartList])
      //另一种用法 可以自定义名称
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  #cart{
    height: 100vh;
    position: relative;
  }
.nav-bar{
  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}

</style>