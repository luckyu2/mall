<template>
  <div class="detail">
    <detail-navbar class="nav-bar" @titleClick="titleClick"  ref="nav"/>
    <Scroll  :probeType="3"
             :pull-up-load="true"
             ref="scroll"
             @scroll="scrollContent"
              class="content">
      <detail-swiper :top-image="topImage"/>
      <detail-base-info :goods="goodsInfo"/>
      <detail-shop-info :shop="shopInfo"/>
      <detail-info :detail-info="detailInfo" @detail-imgLoad="detailImgLoad"/>
      <detail-params-info :params-info="paramsInfo" ref="params" />
      <detail-comment-info :comments="comments" ref="comment" />
      <goods-list :goods="recommends" @goodsImgLoad="goodsImgLoad" ref="recommend" class="recommend-goods"/>
    </Scroll>
    <detail-bottom-bar @addCart="addCart"/>
    <back-top @click.native="backClick" v-show="isShowTback" />
  </div>
</template>

<script>
  import DetailNavbar from "./detailChild/DetailNavbar"
  import DetailSwiper from "./detailChild/DetailSwiper"
  import DetailBaseInfo from "./detailChild/DetailBaseInfo"
  import DetailShopInfo from "./detailChild/DetailShopInfo"
  import DetailInfo from "./detailChild/DetailInfo";
  import DetailParamsInfo from "./detailChild/DetailParamsInfo"
  import DetailCommentInfo from "./detailChild/DetailCommentInfo"
  import DetailBottomBar from  "./detailChild/DetailBottomBar"

  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";
  import {mixin} from "common/mixin";
  import {debounce} from "common/untils";
  import {getDetail,Goods,Shop,GoodsParams,getRecommend} from "network/detail"
  export default {
    name: "Detail",
    data(){
      return{
        iid:null,
        // res:null,
        topImage:[],
        goodsInfo: {},
        shopInfo:{},
        detailInfo:{},
        paramsInfo:{},
        comments: {},
        itemImgListener:null,
        isShowCart:false,
        recommends:[],
        getPageTopY:[0,1000,1500,2000],
        currentIndex:0
      }
    },
    components:{
      DetailNavbar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      DetailBottomBar,
      Scroll,
      BackTop,
      GoodsList
      // getDetail 方法不需再此注册
    },
    created() {
      //通过$route获取当前点击页面（激活）页面的iid
      this.iid = this.$route.params.iid;

      //获取detail中需要的各项数据
      getDetail(this.iid).then(res=>{
        // console.log(res)
        const data = res.result;
        //1.获取顶部轮播图的图片的数据
        this.topImage = data.itemInfo.topImages;
        //2.获取商品title的信息
        this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        //3.获取店铺商家的信息
        this.shopInfo = new Shop(data.shopInfo);
        //4.获取图片展示数据
       this.detailInfo = data.detailInfo
        //5.获取商品尺寸参数信息
        this.paramsInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule)
        //6.获取商品评论信息
        if(data.rate.cRate > 0){
          this.comments = data.rate.list[0]
        }

      })

      //获取推荐商品数据
      getRecommend().then( res =>{

        // console.log(res)
        //讲商品推荐数据传递给子组件
        this.recommends = res.data.list

        //获取页面的,参数，评论，推荐的的位置offsetTop的位置
        setTimeout(()=>{
          this.$refs.scroll.refresh()
          this.getPageTopY = [0]
          this.getPageTopY.push(this.$refs.params.$el.offsetTop - 44)
          this.getPageTopY.push(this.$refs.comment.$el.offsetTop - 44 )
          this.getPageTopY.push(this.$refs.recommend.$el.offsetTop - 46)
          this.getPageTopY.push(Number.MAX_VALUE)
        },1200)

      })
    },
    //混入的使用
    mixins:[mixin],
    methods:{
      //点击nav切换到指定位置
      titleClick(index){
        // console.log(this.getPageTopY[index])
        //这里的y轴要设置为负数，不然不能滚到指定位置
        this.$refs.scroll.scrollTo(0, - (this.getPageTopY[index]),100)
      },

      //页面滚动时，顶部的nav的title会根据滚动内容切换
      scrollContent(position){
        this.isShowTback = (-position.y) > 1000
        const positionY = -position.y
        let length =this.getPageTopY.length
        for (let i = 0;i < length-1;i++){
          //this.currentIndex !== i 此方法是为了滚动时不重复判断，减少性能消耗
          if ( this.currentIndex !== i &&this.getPageTopY[i] <= positionY && positionY <= this.getPageTopY[i+1]){
            this.$refs.nav.currentIndex = i
            this.currentIndex = i
          }
        }
      },
      //这里是判断推荐图片是否加载完成并刷新
      goodsImgLoad(){
        this.$refs.scroll.refresh()
      },
      //通过判断DetailInfo中的图片是否加载，解决上拉不动的bug
      detailImgLoad(){
        // console.log('接收到DetailInfo传递的方法了')
        this.$refs.scroll.refresh()


        // console.log(this.getPageTopY)

      },
      addCart(){
        // console.log('点击了加入购物车')
        //获取购物车需要展示的商品信息，通过Vuex传递
        const product = {};
        product.image = this.topImage[0]
        product.title = this.goodsInfo.title
        product.desc = this.goodsInfo.desc
        product.prince = this.goodsInfo.realPrice
        product.iid = this.iid
        //不要把数据直接传到state中，应该通过mutation（单个操作）
        // this.$store.commit('addCart',product)  //这个是发送到vuex mutation中
        this.$store.dispatch('addCart',product).then(res => {

          this.$toast.show(res,2000)
        })

        //添加商品成功的弹窗不建议用下面方法
        // this.isShowCart = true
        // setTimeout(()=>{
        //   return  this.isShowCart = false
        // },2000)
      }
    },
    deactivated(){
      // 组件销毁时，取消全局监听
      this.$bus.$off('goodsImgLoad',this.itemImgListener)
    }
  }
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}
.nav-bar{
  position: relative;
  background-color: #fff;
  z-index: 99;
}

  .content{
  height: calc(100% - 93px);
  }
  .recommend-goods{
    margin-top: 24px;
  }
</style>