<template>
  <div class="wrapper" ref="wrapper">
    <div >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    components:{
      BScroll
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type: Boolean,
        default:false
      }
    },
    data(){
      return{
        scroll:null
      }
    },
    mounted() {
      //一、创建BScroll对象

      // setTimeout(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeType,  //决定是否监听滚动 0，1不监听
          pullUpLoad: this.pullUpLoad             //决定是否启用下拉加载更多
        })

        // 二、监听滚动位置 将数据传通过$emit传递给父组件
        this.scroll.on('scroll',(position)=>{
          this.$emit('scroll',position)

        })

        //三、下拉加载更多
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullUpLoad')
        })
      // }, 500)

      // 放在setTimeout外面下面的函数无效
      // this.scroll.on('scroll',(position)=>{
      //   console.log(position)
      //   this.$emit('scroll',position)
      // })

    },
    methods: {
      scrollTo(x,y,time= 400){
          this.scroll.scrollTo(x,y,time)
        },
      finishPullUp(){  //重置上拉下拉加载次数
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>

</style>