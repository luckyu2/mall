export const mixin ={
  data(){
    return{
      isShowTback:false,
    }
  },
  methods:{
    //下拉滚动时，滚动数据监听
    //点击右下角回到顶部按钮，回到顶部位置
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    }
  }

}