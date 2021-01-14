<template>
<!--  最外层不要加div和class="swiper"不然图片不会动-->
    <swiper class="detail-item">
      <swiper-item v-for="(item,index) in topImage" :key="index" >
<!--        <a :href="item.link"></a>-->
        <img :src="item" alt="" >
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"
  export default {
    name: "DetailSwiper",
    props:{
      topImage:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .detail-item{
    height: 330px;
    overflow: hidden;
  }
  .detail-item img{
    width: 100%;
    height: 100%;
  }
</style>