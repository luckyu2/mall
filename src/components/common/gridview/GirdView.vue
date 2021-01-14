<template>
  <div class="grid-view">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "GirdView"
  }
</script>

<style scoped>
  .grid-view {
    display: inline-block;
    /*width: 100px;*/
    /*height: 150px;*/
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*justify-content: space-around;*/
  }
</style>