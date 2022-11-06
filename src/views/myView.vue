<template>
<van-nav-bar
  title="个人中心"
  left-text="首页"
  right-text="退出登录"
  left-arrow
  @click-left="onClickLeft"
  @click-right="logout"
/>

<van-uploader v-model="fileList" :deletable="false" />

<div class="title">
    <div class="title-left">{{sname}}</div>
    <div class="title-right" v-show="this.show">
      <nav>
        <router-link to="/login" @click="loginShow">登录</router-link> |
        <router-link to="/regester" >注册</router-link>
        <router-view/>
      </nav>
    </div>
</div>
<hr>

<img class="img2" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F121219112322%2F191212112322-3-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667830848&t=21a4eb74ed8f6da8746a9f1cd2a68ec3" alt="">
<div class="bg">
    <div class="bg-1" @click="toMyself">个人信息></div>
    <hr>
    <div class="bg-1" @click="toCollect">收藏></div>
    <hr>
    <div class="bg-1" @click="toPingjia">我的好评></div>
    <hr>
    <div class="bg-1" @click="share">分享></div>
</div>

<img class="img1" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.616pic.com%2Fbg_w1180%2F00%2F06%2F51%2F9FqnAU1K2o.jpg&refer=http%3A%2F%2Fpic.616pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667523923&t=bd4884c5ea6406bb2b15b1bb70076031" alt="">
</template>

<script>
export default {
    name:'myView',
    
    data(){
      return{//获取用户信息到主页
        sname:localStorage.getItem('name'),
        smail:localStorage.getItem('mail'),
        stel:localStorage.getItem('tel'),
        isAuth:"",//是否保持登录状态
        show:'true',
        fileList:[]
      };

    },
    methods:{
      //当点击退出按钮，将不保存登录状态
      logout:function()
      {
        this.isAuth="false";//修改登录状态
        localStorage.setItem('s',this.isAuth);
        this.$router.replace('/login');//页面跳转至登录页面
      },
      onClickLeft(){
        this.$router.push({path:'/home'})
      },
      toMyself(){
        this.$router.push({path:'/myself'})
      },
      toCollect(){
        this.$router.push({path:'/collect'})
      },
      toPingjia(){
        this.$router.push({path:'/PingJia'})
      },
      share(){
        this.$router.push({path:'/share'})
      },
      loginShow(){
        this.show =! this.show
        console.log(this.show);
      }
    }
}
</script>


<style scoped>
.img2{
   position: absolute;
   display: flex;
   justify-content: center;
   left: 0px;
   top: 10px;
   width: 100%;
   height: 230px;
   z-index: -3;
}
.bg{
  background-color: rgba(177, 234, 255, 0.7);
  margin-top: 20px;
}
.bg-1{
  /* background-color: white; */
  padding: 20px;
}

.title{
  background-color: rgba(162, 244, 255,0.7);
  width: 100%;
  height: 70px;
  box-shadow: 0px 0px 3px 2px rgb(191, 255, 254);
  border-radius: 5%;
}
.title-right{
  line-height: 70px;
}
 
p{
  font-size: 20px;
  margin-top: 20px;
  text-align: left;
  margin-left: 32%;
  
}
button{
  position: relative;
  height: 33px;
  width: 150px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: none;
  color: white;
  margin-left: 10px;
}
.img1{
  width: 100%;
  height: 100px;
}
</style>

