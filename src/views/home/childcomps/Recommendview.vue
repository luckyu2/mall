<template>
<!--  推荐栏-->
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommendview",
    props:{
      recommends:{
        type:Array,
        default(){
          return[]
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 12px;
    padding: 5px 5px 5px;
    border-bottom: 5px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    height: 75px;
    width: 75px;
    margin-bottom: 5px;
  }
</style>