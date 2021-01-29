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
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
</style>