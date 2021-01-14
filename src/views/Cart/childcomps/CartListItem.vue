<template>
  <div  class="list-item">
    <div class="cart-left">
      <div class="button">
        <check-button :is-checked="cartInfo.check" @click.native="checkClick"/>
      </div>
      <div class="check-img">
          <img :src="cartInfo.image" alt="商品图片">
      </div>
    </div>
    <div class="cart-info">
        <div class="text" >{{cartInfo.title}}</div>
        <div class="text">商品描述：{{cartInfo.desc}}</div>
      <div class="cart-btm">
        <div class="btm-red">￥{{cartInfo.prince}}</div>
        <div>x{{cartInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  // import {mapGetters} from "vuex";
  import CheckButton from "components/content/checkbutton/CheckButton"
  export default {
    name: "CartListItem",
    props:{
      cartInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    components:{
      CheckButton
    },
    methods:{
      checkClick(){
        this.cartInfo.check = !this.cartInfo.check
      }
    }
  }
</script>

<style scoped>
.list-item{
  display: flex;
  margin: 5px 5px;
  position: relative;
  border-bottom: 1px solid #eee;
}
.cart-left{
  /*width: 20%;*/
  display: flex;
  /*justify-content: center;*/
}
.button{
  width: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.check-img{
  flex: 3;
}
  .cart-left img{
    width: 60px;
    height: 90px;
    border-radius: 5px;
    margin-top: 5px;

  }
  .cart-info{
    display: inline-block;
    padding: 10px 5px;
  }
  .text{
    font-size: 12px;
    line-height: 15px;
    height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 280px;
    margin: 10px 0;
  }
  .cart-btm{
    padding: 0 10px;
    display: flex;
    width:280px;
    justify-content: space-between;
  }
.btm-red{
  color: red;
}
</style>