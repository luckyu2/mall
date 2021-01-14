<template>
<!--  详情页图片展示信息-->
    <div>
      <div>
        {{detailInfo.desc}}
      </div>
      <div>{{detailInfo.detailImage[0].key}}</div>
      <div v-for="item in detailInfo.detailImage[0].list" class="img-info">
        <img :src="item" alt="" @load="imageLoad">
      </div>
    </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods:{
        imageLoad(){
          //发射图片加载完成信息到home

          // if (this.isLoad) {
            // console.log('detailimg加载完成')
            this.$emit('detailImgLoad')

        }
    }
  }
</script>

<style scoped>

.img-info img{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>