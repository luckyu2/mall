<template>
  <div id="app">
    <mainTabBar></mainTabBar>
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
/*@import "assets/css/base.css";*/

</style>
