<template>
  <div class="bottom">
    <div class="item">
      <div class="check " >
        <check-button :is-checked="isCheckAll" @click.native="checkClick" />
        <span>全选</span>
      </div>
    </div>
    <div class="item">合计:{{totalPrice}}</div>
    <div class="pay-for" @click="payClick">结算({{toCount}})</div>
  </div>
</template>

<script>
  import CheckButton from "components/content/checkbutton/CheckButton"
  import {mapGetters} from "vuex";
  export default {
    name: "CartBottomBar",
    data(){
      return{
        isCheck:false
      }
    },
    components:{
      CheckButton
    },
    computed:{
      ...mapGetters(['cartLength','cartList']),
      totalPrice(){
         return '￥'+ this.$store.state.cartList.filter(item => {
           return  item.check
        }).reduce( (prevValue,item) => {
            return  prevValue + (item.prince *item.count)
         },0)
      },
      toCount(){
        return  this.$store.state.cartList.filter(item => item.check).length
        // return  this.$store.state.cartList.filter(item => {
        //   return  item.check
        // }).reduce( (prevValue,item) => {
        //   return  prevValue + item.count
        // },0)
      },
      isCheckAll(){
        //通过判断购物车的数量和勾选商品的数量是否一致，来决定全选按钮是否会显示
        if(this.cartLength === 0)return false
        return this.toCount === this.cartLength
      }

    },
    methods:{
      checkClick(){
        if(this.isCheckAll){
          this.cartList.forEach(item =>{
            item.check = false
          })
        }else {
          this.cartList.forEach(item =>{
            item.check = true
          })
        }
      },
      payClick(){
        if(!this.isCheckAll){
          this.$toast.show('亲，您还未选择商品')
        }
      }
    }
  }
</script>

<style scoped>
  .bottom{
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    background-color: lightpink;
    color: white;
    height: 30px;
    line-height: 30px;
  }
  .check{
    display: flex;
    padding-left: 5px;
  }
  .item{
    flex: 2;
  }

  .pay-for{
    flex: 2;
    text-align: center;
    background-color:red;
    height: 30px;

  }
</style>