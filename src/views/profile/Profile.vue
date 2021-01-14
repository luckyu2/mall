<template>
  <div>
    <profile-nav/>
    <Scroll class="content">
      <profile-info-top/>
      <profile-info-center/>
    </Scroll>
  </div>
</template>

<script>
  import ProfileNav from "./childcomps/ProfileNav"
  import ProfileInfoTop from "./childcomps/ProfileInfoTop";
  import ProfileInfoCenter from "./childcomps/ProfileInfoCenter";
  import Scroll from "components/common/scroll/Scroll";


  export default {
    name: "Profile",
    components:{
      ProfileNav,
      Scroll,
      ProfileInfoTop,
      ProfileInfoCenter
    }
  }
</script>

<style scoped>
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