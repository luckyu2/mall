<template>
  <div id="tab-bar-item" v-on:click="itemClick">
<!--    TabBar-item其中的图片和文字的插槽-->
    <slot v-if="isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
<!--    下面的插槽如果不加一个div包括，插槽内的文本会被替换，导致不能变色不能触发-->
    <div :class="{active: !isActive}">
      <slot  name="item-text" ></slot>
    </div>
  </div>
<!--    <div class="tabBar_item">分类</div>-->
<!--    <div class="tabBar_item">购物车</div>-->
<!--    <div class="tabBar_item">我的</div>-->
<!--  </div>-->
</template>

<script>
  export default {
    name: "tabBar-item",
    // 传入数据
    props:{
      path:String
    },
    data(){
      return{
        // isActive:true,
      }
    },
    computed:{
      isActive(){
        //注释：indexOf() 方法对大小写敏感！如果要检索的字符串值没有出现，则该方法返回 -1。
        return (this.$route.path.indexOf(this.path)) === -1 ;
      }
    },
    methods:{
    itemClick(){
      // return  this.isActive =!this.isActive
      // this.isActive = !this.isActive
      this.$router.replace(this.path)

    }
  }

  }
</script>

<style scoped>
  #tab-bar-item{
    flex: 1;
    font-size: 14px;
    vertical-align: middle;
  }
  /*此处写成了bar_item，导致图片变大问题*/
  #tab-bar-item img{
    height: 24px;
    width: 24px;
  }
  .active{
    color: red;
  }
</style>