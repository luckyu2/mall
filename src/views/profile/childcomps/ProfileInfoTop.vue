<template>
  <div>
    <div class="shop-logo">
      <div class="logo-left">
         <img src="~@/assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="logo-right">
          <ul>
            <li>瑞琪小宝贝</li>
            <li><img src="~@/assets/img/profile/phone1.svg" alt="">
              13878451445</li>
          </ul>
      </div>
    </div>
    <div class="info">
      <div class="info-left title">
        <div class="bigtext"><span>1314</span>万</div>
        <div class="text">我的金额</div>
      </div>
      <div class="info-center title">
        <div class="bigtext"><span>0</span></div>
        <div class="text">我的优惠券</div>
      </div>
      <div class="info-right title">
        <div class="bigtext"><span>5200</span></div>
        <div class="text">我的积分</div>
      </div>
    </div>

  </div>
</template>

<script>
  import
  export default {
    name: "ProfileInfoItem"
  }
</script>

<style scoped>
  .shop-logo{
    display: flex;
    justify-content: center;
    background-color: pink;
    padding: 20px 10px;
    color: white;
  }
  .shop-logo img{
    vertical-align:middle;
    height: 75px;
    width: 75px;
    border-radius: 45px;
  }
  ul li{
    list-style: none;
  }
  .logo-left{
    flex: 1;
  }
  .logo-right{
    flex: 4;
    margin-top: 15px;
  }
  .logo-right li:nth-child(1){
    color: red;
    margin-bottom: 5px;
  }
  .shop-logo .logo-right img{
    height: 20px;
    width: 20px;
  }
  .info{
    display: flex;
    text-align: center;
    padding: 20px 0;
    border-bottom: 5px solid #eee;
  }
  .title{
    flex: 1;
  }
  .bigtext span{
    color: var(--color-tint);
    line-height: 30px;
  }
  .info-mulu{
    padding: 10px 10px;
  }
</style>