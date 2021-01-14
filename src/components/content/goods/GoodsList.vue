<template>
  <div class="goods">
    <goods-list-item :goodsItem="item"
                     v-for="(item,index) of goods"
                     :key=index target="_blank">
    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem"

  export default {
    name: "Goodslist",
    props:{
      goods:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      GoodsListItem
    },

  }
</script>

<style scoped>
  .goods{

  }
</style>