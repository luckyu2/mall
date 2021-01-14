<template>
  <div class="content">
      <gird-view v-for="(item,index) in subcategory" :key="index" class="grid-item" >
          <a :href="item.link">
            <img :src="item.image" alt="图片" @load="imageLoad" >
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
        //发射图片加载完成信息到home
        // console.log('category加载完了')
        this.$bus.$emit('categoryImgLoad')
      }
    }
  }
</script>

<style scoped>
.content{
  height: 100%;
  margin: 10px 5px;
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*justify-content: space-around;*/
}

  .grid-item{
    margin: 10px 5px;
    width: 40%;
    height: 40%;
    text-align: center;
    font-size: 12px;
  }
  .grid-item img  {
    width: 70%;
    height: 70%;
  }
</style>