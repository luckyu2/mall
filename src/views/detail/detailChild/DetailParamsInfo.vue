<template>
<!--  商品参数信息-->
  <div class="params-box">
    <table v-for="(item,index) in  paramsInfo.sizes" :key="index" class="info-sizes">
      <tr v-for="(tr,indey) in item" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-params" >
      <tr v-for="(info,index) in paramsInfo.info ">
        <td >{{info.key}}</td>
        <td >{{info.value}}</td>
      </tr>
    </table>
    <div v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>

</template>

<script>
  export default {
    name: "DetailParamsInfo",
    props:{
      paramsInfo:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
  .params-box{
    text-align: center;
    line-height: 30px;
    padding: 0 10px;
    margin-top: 44px;
  }
  .info-sizes{
    border-collapse: collapse;
    width: 100%;
    padding-right: 5%;
  }

  .info-sizes td:nth-child(1) {
    text-align: left;
  }
  .info-sizes td{
    width: 15%;
    /*border: 1px solid var(--color-text);*/
    border-bottom: 1px solid var(--color-text);
  }
  .info-params{
    border-collapse: collapse;
    width: 100%;
  }
  .info-params td{
    border-bottom: 1px solid var(--color-text);
    /*width: 20%;*/
    text-align: left;
  }
  td:nth-child(1){
    width: 20%;
    padding-left: 5%;
  }

  .info-params td:nth-child(2){
    color: var(--color-tint);
    padding-left: 10%;
    padding-right: 10%;
  }

</style>