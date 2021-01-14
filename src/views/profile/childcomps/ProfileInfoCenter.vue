<template>
  <div class="info-center">
    <table>
      <tr >
        <td> <img src="~@/assets/img/profile/message.svg" alt=""></td>
        <td class="better" >我的消息</td>
      </tr>
      <tr >
        <td> <img src="~@/assets/img/profile/pointer.svg" alt=""></td>
        <td class="better" >积分商城</td>
      </tr>
      <tr >
        <td> <img src="~@/assets/img/profile/vip.svg" alt=""></td>
        <td class="better" >会员卡</td>
      </tr>
      <tr >
        <td> <img src="~@/assets/img/profile/cart.svg" alt=""></td>
        <td class="better" @click="itemClick" >我的购物车</td>
      </tr>
      <tr >
        <td> <img src="~@/assets/img/profile/shopping.svg" alt=""></td>
        <td class="better" >下载APP</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "ProfileListItem",
    methods:{
      itemClick(){
        this.$router.push('/cart')
      }
    }
  }
</script>

<style scoped>
  .info-center{
    padding: 10px 20px;
  }
.info-center img{
  width: 30px ;
  height: 25px;
}
.info-center table{
  border-collapse: collapse;
}
  td{
    border-bottom: 1px solid #eee;
    line-height: 20px;
    padding: 5px 0;
  }
  td:nth-child(2){
    width: 100%;
    padding-left: 5%;
  }
</style>