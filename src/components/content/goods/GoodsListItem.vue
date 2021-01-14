<template>
  <div class="goods-item" >

    <a class="goods-img" href="javascript:;"   >
<!--      此处在src前面加：在服务器端加了跨域的安装依赖，解决了图片不显示的问题-->
      <img :src="goodsItem.show.img"  >
    </a>
    <p class="title">{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <s class="price">{{goodsItem.orgPrice}}</s>
      <span class="cfav"><img src="~@/assets/img/common/collect.svg" alt="">{{goodsItem.cfav}}</span>
  </div>
</template>

<script>
  export default {
    name: "Goodslistitem",
    data() {
      return {

      }
    },
    props: {
      goodsItem: {
        type: Array,
        default() {
          return []
        }
      }
    },
    created() {

    }

  }
</script>

<style scoped>
  .goods-item{
    display: inline-block;
    font-size: 12px;
    width: 160px;
    margin-left: 20px;
    margin-top: 10px;
    text-align: center;
  }
  .title{
    height: 14px;
    width: 160px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price ,.cfav{
    margin-top: 5px;
  }
  .price{
    float: left;
    color: var(--color-hiht-text);
  }
  .price:nth-last-child(2){
    color: var(--color-text);
    margin-left: 10px;
    margin-right: 5px;
  }
  .cfav{
    float: left;
    text-align: center;
    margin-right: 5px;
  }
  .cfav img{
    width: 12px;
    vertical-align: middle;

  }
  .goods-img img{
    height:220px;
    width: 150px;
  }
</style>