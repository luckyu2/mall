<template>
  <div >
    <nav-bar  >
        <div slot="left" ><img src="~assets/img/common/back.svg" @click="navBack" class="nav-back" alt=""></div>
        <div slot="center" class="detail-nav"  >
          <div v-for="(item,index) in titles"
             class="detail-item"
             :class="{active:currentIndex === index}"
             @click="itemClick(index)">{{item}}
          </div>
        </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: "DetailItem",
    components:{
      NavBar
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index
      },
      navBack(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .detail-nav{
    display: flex;

  }
  .detail-item{
    flex: 1;
    font-size: 13px;
    text-align: center;
  }
  .nav-back {
    padding-top: 10px;
    box-sizing: border-box;
  }
  .active{
    color: var(--color-hiht-text);
    font-size: 15px;
  }
</style>