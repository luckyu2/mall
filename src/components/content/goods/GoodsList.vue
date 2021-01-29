<template>
  <div class="goods">
    <goods-list-item v-for="item in  goods"
                     :goods-item="item"
                     :key="item.index"
                     >
<!--      key=index target="_blank"-->
    </goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem"

  export default {
    name: "GoodsList",
    props:{
      goods: {
        type: Array,
        default(){
          return []
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
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-bottom: 50px;
  }

</style>