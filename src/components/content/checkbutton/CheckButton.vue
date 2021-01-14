<template>
  <div >
    <div class="check-button" :class="{check:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>

  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default: false
      }

    }
  }
</script>

<style scoped>
  .check-button{
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