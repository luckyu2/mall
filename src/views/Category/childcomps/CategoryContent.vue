<template>
  <div class="category-content">
      <gird-view v-for="(item,index) in subcategory" :key="index" class="grid-item" >
        <a :href="item.link">
          <img :src="item.image" alt="商品图片" @load="imageLoad" >
          <p>{{item.title}}</p>
        </a>
      </gird-view>
  </div>
</template>

<script>
  import GirdView from "components/common/gridview/GirdView"

  export default {
    name: "CategoryContent",
    props:{
      subcategory:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      GirdView,
    },
    methods: {
      imageLoad() {
        //发送图片加载完成信息到父组件
        this.$bus.$emit('categoryImgLoad')
      }
    }
  }
</script>

<style scoped>
  .category-content{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .grid-item{
    width: 90px;
    height: 125px;
    text-align: center;
    font-size: 12px;
  }
  .grid-item img  {
    margin-bottom: 5px;
    width: 90%;
    height: 90%;
  }
</style>