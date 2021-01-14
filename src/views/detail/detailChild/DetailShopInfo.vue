<template>
  <div class="shop-box">
    <div class="shop-logo">
      <span>
         <img :src="shop.logo" alt="">
        {{shop.name}}</span>
    </div>
    <div class="shop-goods">
        <div class="shop-sell">
          <div class="shop-bigtext">{{shop.sells}}</div>
          <div class="shop-text">总销量</div>
        </div>
        <div class="shop-count">
          <div class="shop-bigtext">{{shop.goodsCount}}</div>
          <div class="shop-text">全部宝贝</div>
        </div>
      <div class="shop-score">
            <table>
                <tr v-for="item in shop.score">
                  <td>{{item.name}}</td>
                  <td class="better" :class="{betterScore:item.isBetter}">{{item.score}}</td>
                  <td class="better" :class="{betterScore:item.isBetter}"><span>{{item.isBetter ?'高':'低' }}</span></td>
                </tr>
            </table>
      </div>
    </div>
    <div class="enter-shop">进店逛逛</div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
  .shop-box{
    padding: 20px 10px;
    border-bottom: 5px solid #eee;
  }
  .shop-logo{

  }
  .shop-logo img{
    vertical-align:middle;
    height: 50px;
    width: 50px;
    box-shadow: -1px 0 3px rgba(100,100,100,.3);
    border-radius: 25px;
  }
  .shop-logo span{
    margin-top: 20px;
  }
  .shop-goods{
    display: flex;
    margin-top: 10px;
    text-align: center;
    margin-bottom: 10px;
  }
  .shop-text{
    font-size: 12px;
  }
  .shop-bigtext{
    margin:10px 0;
    font-weight: 700;
  }
  .shop-sell{
    flex: 1;
    line-height: 20px;

  }
  .shop-count{
    flex: 1;
    line-height: 20px;
    border-right: 1px solid #999;
  }
  .shop-score{
    flex: 2;
    margin-left: 20px;
  }
  .shop-score tr,td{
    list-style: none;
    font-size: 12px;
    line-height: 20px;
  }
  .shop-score td{
    width: 20%;
  }
  .better{
    color: rgb(163, 207, 129);
  }
  .betterScore{

    color: rgb(254, 131, 122);
  }
  .betterScore span{
    background-color:rgb(254, 131, 122) ;
    color: #fff;
  }
  .enter-shop{
    font-size: 12px;
    width: 50%;
    margin: 0 auto;
    padding: 5px 0;
    text-align: center;
    border-radius: 5px;
    background-color: rgb(243,245,248);
  }

</style>