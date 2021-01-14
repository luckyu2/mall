<template>
  <div class="comment-box">
      <div class="comment-top">
        <span>用户评价</span>
        <span>更多</span>
      </div>
    <div class="user-comment">
      <div class="user-info">
        <img :src="comments.user.avatar" alt="">
        <span>{{comments.user.uname}}</span>
      </div>
      <p>{{comments.content}}</p>
      <div  class="comment-other">
        <span class="data">{{comments.created|showData}}</span>
        <span>{{comments.style}}</span>
      </div>

      <div v-for="item in comments.images" class="comment-img">
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/untils"
  export default {
    name: "DetailCommentInfo",
    props:{
      comments:{
        type:Object,
        default(){
          return{}
        }
      }
    },
    filters:{
      showData(value){
        //这是Date输错了 打成了Data
        const data = new Date(value*1000)
        // 'yyyy-MM-DD hh:mm:ss 注意大小写
        return formatDate(data,'yyyy-MM-DD');
      }
    }
  }
</script>

<style scoped>
  .comment-box{
    border-bottom: 5px solid #eee;
  }
  .comment-top{
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px 10px;
    border-bottom: 4px solid #eee;
    border-top: 4px solid #eee;
  }
  .data{
    margin: 0 5px;
  }
  .user-comment{
    padding: 5px 10px;
  }
  .user-info{
    margin:  10px 0;
  }
  .comment-other{
    margin: 5px 0;
    color: #999;
  }
  .user-info img{
    vertical-align:middle;
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 15px;
  }
  .comment-img{
    display: inline;
    margin-bottom: 20px;
  }
  .comment-img img{
    margin-top: 10px;
    width: 25%;
    margin-left: 5px;
  }
</style>