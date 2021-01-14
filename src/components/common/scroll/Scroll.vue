<template>
  <div class="wrapper" ref="wrappers">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    data(){
      return{
        scroll:null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrappers,{

      })
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>