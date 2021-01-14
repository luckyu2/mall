<template>
  <div class="info">
    <nav-bar class="nav-bar">
      <div slot="center">我的信息</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "ProfileNav",
    components:{
      NavBar
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

</style>