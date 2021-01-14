<template>
<!--  这是商品名称，价格，售后信息-->
  <div class="detail-box">
    <div  class="info-title">{{goods.title}}</div>
    <div class="info-price">
        <span class="n-price">{{goods.price}}</span>
        <s class="o-price">{{goods.oldPrice}}</s>
        <span class="discount" v-show="goods.discountDesc !==''" >{{goods.discountDesc}}</span>
    </div>
    <div class="info-columns">
      <span class="info-columns-item">{{goods.columns[0]}}</span>
      <span class="info-columns-item">{{goods.columns[1]}}</span>
      <span class="info-columns-item">{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length-1" class="services-item">
        <img :src="goods.services[index].icon" alt="">
        <span>{{goods.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-box{
    border-bottom: 5px solid #eee;
  }
 .info-title{
   margin: 10px 5px;
   font-weight: 600;
   font-size: 14px;
 }
 .info-price{
   margin: 5px 0;
 }
.n-price{
  color:var(--color-hiht-text);
  font-size: 18px;
  font-weight: 600;
  margin-left: 5px;

}
  .o-price{
    font-size: 14px;
    margin: 0 5px;
    color: #999999;
  }
  .discount{
    color:#fff;
    background:var(--color-hiht-text) ;
    border-radius: 5px;
    font-size: 13px;
    padding: 2px;
  }
  .info-columns{
    display: flex;
    padding:8px  20px  ;
    margin: 0 5px;
    border-bottom: 1px solid #999;

  }
  .info-columns-item{
    color: #999;
    flex: 1;
    font-size: 12px;
    text-align: left;

  }
 .info-services{
   margin: 10px 1px;
   display: flex;
   justify-content: space-around;
   font-size: 13px;
 }
  .info-services img{
    width: 12px;
    height: 12px;
  }

</style>