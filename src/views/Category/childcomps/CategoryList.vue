<!--左侧列表部分-->
<template>
    <Scroll >
      <div class="content-list">
        <div class="item" @click="listClick(index)"
             v-for="(item,index) in listItem"
             :class="{active:currentIndex === index}">{{item.title}}</div>
      </div>
    </Scroll>
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
    .content-list{
       height: 800px;
    }
      .item{
       height: 45px;
       line-height: 45px;
       text-align: center;
       font-size: 14px;
      }
      .active{
        color: var(--color-hiht-text);
        font-size: 15px;
        background-color: #fff;
      }
</style>