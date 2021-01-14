<template>
  <div class="list">
    <Scroll class="content">
      <div class="mulu" >
        <ul v-for="(item,index) in listItem">
          <li class="item" @click="listClick(index)" :class="{active:currentIndex === index}">{{item.title}}</li>
        </ul>
        <div class="bottom"></div>
      </div>
    </Scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "CategoryList",
    data(){
      return{
        currentIndex:0
      }
    },
    components:{
      Scroll
    },
    props:{
      listItem:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    methods:{
      listClick(index){
        this.currentIndex = index
        // let maitKey = this.listItem[index].maitKey
        this.$emit('getMaitKey',index)
        // console.log(this.listItem[index].maitKey)
        // this.$router.push('/category/'+this.listItem[index].maitKey);
        // this.$router.push({
        //   path:'/category/',
        //   query:this.listItem[index].maitKey
        // })
      }
    }
  }
</script>

<style scoped>
  .list{
    /*position: relative;*/
    height: 100vh;
  }
  .content{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    width: 100px;
    /*overflow: hidden;*/
  }
  .mulu{
    height: 100%;
    display: flex;
    flex-flow: column;
    background-color: #eee;
  }
  .bottom{
    height: 60px;
  }
  .item{
    flex: 1;
    /*height: 30px;*/
    text-align: center;
    line-height: 30px;
    padding: 5px 0;
  }
  .active{
    color: var(--color-hiht-text);
    font-size: 15px;
    background-color: #fff;
  }
</style>