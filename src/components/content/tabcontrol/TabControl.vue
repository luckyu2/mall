<template>
  <div class="tab_control">
    <div v-for="(item,index) in title"
         class="tab-control-item"
         :key="item"
         :class="{active:currentIndex === index}"
         @click="itemClick(index)"
    >
        <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      },
    },
    data(){
      return{
        currentIndex:0,
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab_control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    margin-bottom: 10px;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color: var(--color-hiht-text);
  }
  .active span{
    padding: 4px;
    border-bottom:2px solid var(--color-hiht-text);
  }
</style>