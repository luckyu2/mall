<template>
  <div id="app">
    <mainTabBar></mainTabBar>
    <router-view></router-view>
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
