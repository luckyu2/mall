<template>
    <div id="tabBar">
<!--        TabBar框架的插槽-->
        <slot></slot>
    </div>
<!--  </div>-->

</template>

<script>

  export default {
    name: "tabBar",
    // components:{
    //
    // },

  }
</script>

<style scoped>
  /*此处因为路径引入问题一直报错*/
@import "~@/assets/css/base.css";

#tabBar{
  position: fixed;
  left: 0;
  right: 0;
  bottom:0;
  display: flex;
  height: 49px;
  text-align: center;
  box-shadow: 0 -2px 3px rgba(110,110,110,.3);
  background: rgb(230,230,230);
}

</style>