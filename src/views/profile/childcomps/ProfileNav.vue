<template>
  <div class="info">
    <nav-bar class="nav-bar">
      <div slot="center">我的信息</div>
    </nav-bar>
    <Scroll class="content">
      <profile-info-item/>
    </Scroll>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import ProfileInfoItem from "./ProfileInfoItem"
  export default {
    name: "ProfileInfo",
    components:{
      NavBar,
      Scroll,
      ProfileInfoItem
    }
  }
</script>

<style scoped>
  .info{
    height: 100vh;
  }
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.content{
  /*height:calc(100% - 93px) ;*/
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>