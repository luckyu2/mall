<template>
  <div id="home">

    <nav-bar class="home-nav">
<!--      对插件的使用还不熟练-->
      <div  slot="center">购物街</div>
    </nav-bar>
    <tab-control :title="['流行','新款','精选']"
                 class="tabControl"
                 ref="tabControl1"
                 @tabClick="tabClick"
                 v-show="isShowTop"
    />
    <Scroll class="contents" ref="scroll"
            @scroll="scrollContent"
            :probeType="3"
            @pullUpLoad="loadMore"
            :pull-up-load="true">
      <home-swiper :banners="banners" class="home-swiper"  @swiperImgLoad="swiperImgLoad"></home-swiper>
      <Recommendview :recommends="recommends"></Recommendview>
      <popularview></popularview>
      <tab-control :title="['流行','新款','精选']"
                   ref="tabControl2"
                   @tabClick="tabClick"
      />
      <goods-list :goods="goods[currentType].list"></goods-list>
      <!--报错： 上面因为在@tabClick="tabClick（）"加上了括号导致一直运行失败-->

    </Scroll>
      <back-top @click.native="backClick" v-show="isShowTback" />
  </div>
</template>

<script>
  //公共组件
  import NavBar from "components/common/navbar/NavBar"
  import Scroll from "components/common/scroll/Scroll"

  //业务开发组件
  import TabControl from "components/content/tabcontrol/TabControl"
  import GoodsList from "components/content/goods/GoodsList"
  import BackTop from "components/content/backTop/BackTop"
  //home子组件
  import HomeSwiper from "./childcomps/HomeSwiper";
  import Recommendview from "./childcomps/Recommendview"
  import popularview from "./childcomps/popularview";

  import {getHomemultidata,getHomeGoods} from "network/home";
  import {debounce} from "common/untils"
  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowTback: false,
        isShowTop: false,
        offsetTop: 0,
        TCindex: 0,
        itemImgListener: null

      }
    },
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop,
      HomeSwiper,
      Recommendview,
      popularview,
      getHomemultidata,
      getHomeGoods,
    },
    created() {
      //页面创建时调用methods封装的的方法
      this.getHomemultidata();
      //商品展示页数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted() {
      // 防抖方法
      const refresh = debounce(this.$refs.scroll.refresh,100);
      this.itemImgListener = ()=> {
        refresh();
      }
      this.$bus.$on("goodsImgLoad",this.itemImgListener)
    },
    deactivated(){
      // 组件销毁时，取消全局监听
      this.$bus.$off('goodsImgLoad',this.itemImgListener)
    },
    methods:{
        //接收轮播图是否加载完成，计算tabContent高度
      swiperImgLoad(){
        // console.log('------------')
       this.offsetTop = this.$refs.tabControl2.$el.offsetTop
        // console.log(this.offsetTop)
      },
      // -----事件点击的方法---------------------------
      tabClick(index){
        // console.log(index)
        this.TCindex = index
        switch (index) {
          case 0:
            this.currentType ='pop'
            break
          case 1:
            this.currentType ='new'
            break
          case 2:
            this.currentType ='sell'
            break
        }
        // this.$refs.constructor1.currentType=index  XXXXX错误  cunrrentIndex为tabControl.vue中data的数据
        this.$refs.tabControl2.currentIndex = index;
        this.$refs.tabControl1.currentIndex = index;
      },
      //下拉滚动时，点击右下角按钮，回到指定顶部位置的方法
      backClick(){
        // ref的位置标记错了，导致不能运行，应该放在sroll组件，我放在了backtop里面—_—!
        this.$refs.scroll.scrollTo(0,0)
      },
      //监听页面滚动时获取数据的方法
      scrollContent(position){
        // console.log(position.y)  获取滚动时y轴的数字
        // this.isShowTback = position.y> -1000  用下面的方法可以将负的值变成正的
        this.isShowTback = (-position.y) > 1000
        //用于tabcontrol的是否显示
        this.isShowTop = this.offsetTop < (-position.y)
      },
      // 上拉加载更多方法
      loadMore(){
        this.getHomeGoods(this.currentType)
        //解决上拉不动的bug
        this.$refs.scroll.refresh()
      },
      // -------------以下为请求数据的方法------------------
      //获取轮播图和推荐的数据
      getHomemultidata(){
        getHomemultidata().then(res=>{
          //请求banner（轮播图）的数据 并将数据传到data中
          this.banners = res.data.banner.list
          //请求recommends（推荐栏）并将数据传到data中
          this.recommends = res.data.recommend.list
        })
      },
      //获取商品列表数据的封装方法
      getHomeGoods(type){
        let page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res=>{
          // this.goods = this.goods[type].list.push(...res.data.list)   错误的赋值方法
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          //调用重置下拉次数的方法
          this.$refs.scroll.finishPullUp()
        }).catch(err=>{
          console.log(err+'无数据')
        })
      },
    }
  }
</script>

<style scoped>
  #home{
    /*height: 100%;*/
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background: var(--color-tint);
    color: #fff;
    font-weight: 700;
    /*因为better-scroll会让指定位置的内容滚动，此处不用fixed*/
  }
  .home-swiper{
    /*padding-top: 44px;*/
  }
  .tabControl{
    /*因为开始tabControl下面的图文是浮动的，导致定位失败，去除浮动，改成行块盒后问题解决,
    因引入BScroll此处粘性定位失效*/
    position: relative;
    top: -1px;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .contents{
    overflow: hidden;
    /*height: calc(100% - 93px);*/
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
</style>