<template>
  <div v-show="isShow" class="toast">
    <div>{{message}} </div>
  </div>

</template>

<script>
  export default {
    name: "Toast",
    props:{
      // isShow:{
      //   type:Boolean,
      //   default:false
      // },
      // message:{
      //   type: String,
      //   default:''
      // }
    },
    data(){
     return{
       isShow:false,
       message:''
     }
    },
    methods:{
      show(message='未输入数据',times=2000){
        this.isShow = true;
        this.message = message;
        setTimeout(()=>{
          this.isShow = false
          this.message = ''
        },times)
      }
    }
  }
</script>

<style scoped>
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  height: 25px;
  width: 180px;
  text-align: center;
  z-index: 99;
  color: white;
  background-color: rgba(0, 0, 0, .7);
  padding: 5px 5px ;
  line-height:20px;
}
</style>