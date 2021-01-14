<template>
  <div id="cate-gory">
    <category-nav />
    <category-list :list-item="categorylist" @getMaitKey="getMaitKey" />
    <Scroll class="scroll" ref="scroll"  :pull-up-load="true" :probeType="3">
      <category-content :subcategory="showCategory" @categoryImgLoad="categoryImgLoad" class=""/>
      <tab-control :title="['流行','新款','精选']"
                   ref="tabControl2"
                   @tabClick="tabClick"/>
      <goods-list :goods="categoryData[currentType]"/>
      <div class="bottom"></div>
    </Scroll>
    </div>
</template>

<script>
  import CategoryNav from "./childcomps/CategoryNav"
  import CategoryList from "./childcomps/CategoryList"
  import CategoryContent from "./childcomps/CategoryContent"
  import {getList,getSubcategory,getCategoryDetail} from "network/category";
  import Scroll from "components/common/scroll/Scroll";
  import TabControl from "components/content/tabcontrol/TabControl"
  import GoodsList from "components/content/goods/GoodsList"
  export default {
    name: "Category",
    components:{
      CategoryNav,
      CategoryList,
      CategoryContent,
      Scroll,
      TabControl,
      GoodsList
    },
    data(){
      return{
        categorylist: [],
        maitKey:null,
        currentIndex:0,
        subcategory:[],
        categoryData:{},
        currentType:'pop'
      }
    },
    created() {
      this.getList()
      //获取左侧列表信息
      setTimeout(()=>{
        this.$refs.scroll.refresh()
      },1500)

      this.getCategoryDetail('pop')
      this.getCategoryDetail('sell')
      this.getCategoryDetail('new')
    },
    computed:{
      showCategory(){
        if(this.currentIndex === -1) return[];
        return  this.subcategory
      },
      // showCategoryDetail() {
      //   if (this.currentIndex === -1) return []
      //   return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      // }
    },
    methods:{
      categoryImgLoad(){
        this.$refs.scroll.refresh()
      },
      tabClick(index){
        this.currentIndex = index
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
      },


      //1、左侧列表信息
      getList(){
        getList().then(res => {
          console.log(res)
          this.categorylist = res.data.category.list

          //获取第一个列表对应的数据
          this.getSubcategory(0)
          //
          // for (let i = 0; i < this.categorylist.length; i++) {
          //   this.categoryData[i] = {
          //     subcategories: {},
          //     categoryDetail: {
          //       'pop': [],
          //       'new': [],
          //       'sell': []
          //     }
          //   }
          // }

        })
    },
      //2、获取商品分类的信息
      getSubcategory(index){
        this.currentIndex= index;
        const maitKey =this.categorylist[index].maitKey
        getSubcategory(maitKey).then(res =>{
          // console.log(res)
          this.subcategory = res.data.list
          // this.categoryData[index].subcategories = res.data
          // this.categoryData = {...this.categoryData}

           })
        },
      //3
      getCategoryDetail(type) {
        // 1.获取请求的miniWallkey
        // const miniWallkey = this.categorylist[this.currentIndex].miniWallkey;
        // 2.发送请求,传入miniWallkey和type
        getCategoryDetail(miniWallkey, type).then(res => {
          // 3.将获取的数据保存下来

        })
      },
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

  .scroll{
    position: absolute;
    top: 44px;
    left: 100px;
    right: 0;
    bottom: 49px;
    height: 100%;
    overflow: hidden;
  }
  .bottom{
    height: 180px;
  }
</style>