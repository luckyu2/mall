<template>
  <div class="tab_control">
    <div v-for="(item,index) in title"
         @click="itemClick(index)"
         :class="{active:current ==index}"
         class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return{
        current:0
      }
    },
    props:{
      title:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      itemClick(index){
        this.current =index
      }
    }
  }
</script>

<style scoped>
  .tab_control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 44px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
  }
  .active{
    color: var(--color-hiht-text);
  }
  .active span{
    padding: 5px;
    border-bottom:2px solid var(--color-hiht-text);
  }
</style>