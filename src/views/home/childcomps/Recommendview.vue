<template>
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
    font-size: 12px;
    padding: 10px 5px 30px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;

  }
  .recommend-item img{
    height: 75px;
    width: 75px;
    margin-bottom: 10px;
  }
</style>