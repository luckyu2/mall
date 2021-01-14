<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div class="bar-itme">
        <i class="icon serves"></i>
        <span>客服</span>
      </div >
      <div class="bar-itme">
        <i class="icon shop"></i>
        <span>店铺</span>
      </div>
      <div class="bar-itme">
        <i class="icon cav"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="cart">
      <div class="add-cart" @click="add">
        加入购物车
      </div>
      <div class="buy-goods">
        立即购买
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods:{
      add(){
        this.$emit('addCart')

      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    height: 49px;
    background-color: #fff;
    position: relative;
    z-index: 99;
    text-align: center;
    box-shadow: 0 -2px 3px rgba(110,110,110,.3);
    display: flex;
  }
  .bar-left{
    flex: 1;
    background-color: #fff;
    display: flex;
  }
  .bar-left .bar-itme{
  flex: 1;
  }
  .bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  /*.bar-left .cav{*/
  /*  !*background-position: 0 -27px;*!*/
  /*}*/
  .bar-left .shop{
    background-position: 0 -100px;
    /*text-align: center;*/
  }
  .bar-left .serves{
    background-position: 0 -54px;
  }
  .bar-left span{
    line-height:20px;
    font-size: 13px;
  }
  .cart{
    flex: 1;
    background-color: pink;
    display: flex;

  }
  .add-cart{
    flex: 1;
    line-height: 49px;
    background-color:  #ffe817;
  }
  .buy-goods{
    flex: 1;
    line-height: 49px;
    background-color: #f69;
    color: #fff;
  }
</style>