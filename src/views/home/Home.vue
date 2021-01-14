<template>
  <div id="home">
    <nav-bar class="home-nav">
<!--      对插件的使用还不熟练-->
      <div  slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" class="home-swiper" ></home-swiper>
    <Recommendview :recommends="recommends"></Recommendview>
    <popularview></popularview>
    <tab-control :title="['流行','新款','精选']" id="tabControl"/>

    <Goodslist :goods="goods['pop'].list"></Goodslist>

  </div>
</template>

<script>
  //
  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/content/tabcontrol/TabControl"
  import Goodslist from "components/content/goods/Goodslist"

  import HomeSwiper from "./childcomps/HomeSwiper";
  import Recommendview from "./childcomps/Recommendview"
  import popularview from "./childcomps/popularview";

  import {getHomemultidata,getHomegoods} from "network/home";
  export default {
    name: "Home",
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list: []},
          'sell':{page:0,list:[]}
        }
      }
    },
    components:{
      NavBar,
      TabControl,
      Goodslist,
      HomeSwiper,
      Recommendview,
      popularview,
      getHomemultidata,
      getHomegoods,
    },
    created() {
      //调用methods的方法中封装的函数
      this.getHomemultidata();

      this.getHomegoods('pop');
      // this.getHomegoods('new')
      // this.getHomegoods('sell')

    },
    methods:{
      //请求轮播图和推荐的数据
      getHomemultidata(){
        getHomemultidata().then(res=>{
          //请求banner（轮播图）的数据 并将数据传到data中
          this.banners = res.data.banner.list
          //请求recommends（推荐栏）并将数据传到data中
          this.recommends = res.data.recommend.list
        })
      },
      //请求商品数据的封装
      getHomegoods(type){
        const page = this.goods[type].page+1
        getHomegoods(type,page).then(res=>{
          this.goods=this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
        })
      },

    }

  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .home-swiper{
    padding-top: 44px;
  }
  #tabControl{
    /*因为开始tabControl下面的图文是浮动的，导致定位失败，去除浮动，改成行块盒后问题解决*/
    position: sticky;
    position: -webkit-sticky;
    top: 44px;
  }
</style>