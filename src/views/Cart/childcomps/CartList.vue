<template>
  <div class="cart-list" >
    <Scroll class="content" :probeType="3" :pull-up-load="true">
      <cart-list-item v-for="(item,index) in cartList" :cart-info="item" :key="index"  />
    </Scroll>
  </div>
</template>

<script>
import CartListItem from "./CartListItem"
import Scroll from "components/common/scroll/Scroll" ;
import { mapGetters } from "vuex";

  export default {
    name: "CartList",
    components:{
      CartListItem,
      Scroll
    },
    computed:{
      ...mapGetters(['cartList'])
    }

  }
</script>

<style scoped>
  .cart-list{
    height: 100vh;
  }
  .cart-list .content{
    /*height:calc(100% - 93px) ;*/
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 80px;
    overflow: hidden;
  }

</style>