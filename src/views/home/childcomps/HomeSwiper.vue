<template>
<!--  轮播图页面-->
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key='swiper' target="_blank">
        <a :href="item.link"></a>
        <img :src="item.image" alt="" @load="imageLoad" >
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"
  export default {
    name: "HomeSwiper",
    data(){
      return{
        isLoad:true
      }
    },
    props:{
      banners:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      imageLoad(){
        //通过此判断$emit只发送一次数据
        if(this.isLoad){
        // console.log('swipeer加载完成')
        this.$emit('swiperImgLoad')
          this.isLoad = !this.isLoad
      }
      }
    }

  }
</script>

<style scoped>

</style>