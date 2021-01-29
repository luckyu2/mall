<template>
<!--  分类商品的展示的-->
  <div id="cate-gory">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
<!--    左侧商品列表-->
      <category-list :list-item="categorylist" @getMaitKey="getMaitKey" id="category-list"/>
<!--    右侧商品展示-->
      <Scroll id="content-scroll" ref="scroll"  @pullUpLoad="loadMore" :pullUpLoad="true"  :probeType="3">
        <div class="content">
          <category-content :subcategory="subcategory"  />
          <tab-control :title="['流行','新款','精选']"
                       ref="tabControl"
                       @tabClick="tabClick"
                       class="tab_control"/>
<!--商品信息-->
          <goods-list :goods="showCategoryDetail" @goodsImgLoad="goodsImgLoad"  class="goods-list"/>
        </div>
      </Scroll>
  </div>
</template>

<script>
  import CategoryList from "./childcomps/CategoryList"
  import CategoryContent from "./childcomps/CategoryContent"
  import {getList,getSubcategory,getCategoryDetail} from "network/category";
  import Scroll from "components/common/scroll/Scroll";
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabcontrol/TabControl"
  import GoodsList from "components/content/goods/GoodsList"
  export default {
    name: "Category",
    components:{
      CategoryList,
      CategoryContent,
      Scroll,
      NavBar,
      TabControl,
      GoodsList
    },
    data(){
      return{
        categorylist: [], //左侧商品列表数据
        maitKey:null,     //商品编号
        currentIndex:-1,   //点击对应的序号
        subcategory:[],
        categoryData:{},
        currentType:'pop'
      }
    },
    created() {
      //获取左侧列表信息
      this.getList()
    },
    computed:{
      showCategory(){
        if(this.currentIndex === -1) return[];
        return  this.subcategory
      },
      showCategoryDetail() {
        if (this.currentIndex === -1) return []
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    methods:{
      loadMore(){
    //解决上拉不动的bug
        this.$refs.scroll.refresh()
      },
      goodsImgLoad(){
        this.$refs.scroll.refresh()
      },
      // 图片加载时刷新
      categoryImgLoad(){
        this.$refs.scroll.refresh()
      },
      // 点击tabControl切换title
      tabClick(index){
        this.currentIndex = index;
        switch (index) {
          case 0:
            this.currentType ='pop'
            this._getCategoryDetail('pop')

            break
          case 1:
            this.currentType ='new'
            this._getCategoryDetail('new')
            break
          case 2:
            this.currentType ='sell'
            this._getCategoryDetail('sell')
            break
        }
      },

   //1、获取左侧列表信息
      getList(){
        getList().then(res => {
          // console.log(res)
          this.categorylist = res.data.category.list;
  //2、初始化数据
          for (let i = 0; i < this.categorylist.length; i++) {
            this.categoryData[i] = {
              categorylist: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
    //默认获取第一个列表对应的数据
          this.getSubcategory(0)
        })
    },
      //2、点击左侧列表时获取对应商品展示
      getSubcategory(index){
        this.currentIndex= index;
        const maitKey =this.categorylist[index].maitKey
        getSubcategory(maitKey).then(res =>{
          this.subcategory = res.data.list
          this.categoryData = {...this.categoryData}
          //默认显示第一个商品，商品的iid接口未打开，点击无法跳转
          this._getCategoryDetail('pop')
        })
        },
      //3点击tabControl获取对应数据
      _getCategoryDetail(type) {
        // 1.获取列表的miniWallkey
        const miniWallkey = this.categorylist[this.currentIndex].miniWallkey;
        // console.log(miniWallkey)
        // 2.发送请求,传入miniWallkey和type
        getCategoryDetail(miniWallkey, type).then(res => {
          // console.log('goods商品',res)
          // 3.将获取的商品数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      //点击左侧分类列表获取对应商品信息
      getMaitKey(index){
        // console.log(maitKey)
        this.getSubcategory(index)
      }
    }
  }
</script>

<style scoped>
  #cate-gory{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    z-index: 99;
  }
  #category-list{
    height: calc(100% - 93px);
    overflow: hidden;
    width: 80px;
    background-color: #f6f6f6;
  }
  #content-scroll{
    position: absolute;
    left: 80px;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
    /*display: flex;*/
    /*flex-wrap: wrap;*/
  }
  .content {
    height: 100%;
    padding: 10px 12px;
  }
  .goods-list{
    margin-top: 24px;
  }
</style>