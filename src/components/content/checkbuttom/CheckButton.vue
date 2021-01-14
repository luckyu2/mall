<template>
  <div class="check-buttom" :class="{check:isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButtom",
    props:{
      isCheck:{
        type:Boolean,
        default: false
      }

    }
  }
</script>

<style scoped>
.check-buttom{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #aaa;
}
.check{
  background-color:var(--color-hiht-text);
  border: 1px solid #fff;
 }
</style>