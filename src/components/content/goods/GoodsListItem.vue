<template>
  <div class="goods-box" @click="goodsItemClick" >

      <img :src="showImage"   @load="imageLoad">
      <!--<img v-lazy="showImg" alt="" @load="imageLoad" >-->
    <div class="goods-info">
      <p class="title">{{goodsItem.title}}</p>
      <div class="goods-other">
        <span class="price">￥{{goodsItem.price}}</span>
        <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
    </div>
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
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      },
      //此处因为为对象
      //   type: Array,
      //   default(){
      //     return []
      //   }
      // }
    },
    computed: {
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      imageLoad(){
        //发射图片加载完成信息到home
        // console.log('goods加载完了')
        this.$bus.$emit('goodsImgLoad')
      },
      goodsItemClick(){
        // console.log('jumping to detail page');
        this.$router.push('/detail/'+this.goodsItem.iid);
        // this.$router.push('/detail/')
      }
    }
  }
</script>

<style scoped>
  .goods-box{
    /*display: inline-block;*/
    font-size: 12px;
    width: 45%;
    padding-bottom: 44px;
    position: relative;
    text-align: center;
  }
  .goods-info{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
  }
  .title{
    height: 14px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goods-other{
    display: flex;
    justify-content: space-between;
    padding: 2px 20px;
  }
  .price{
    /*float: left;*/
    color: var(--color-hiht-text);

  }

  .cfav{
    position: relative;
    /*margin-right: 5px;*/
  }
  .goods-info .cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
  .goods-box img{
    width: 100%;
    height: 100%;
    /*height:220px;*/
    /*width: 150px;*/
    border-radius: 5px;
  }
</style>