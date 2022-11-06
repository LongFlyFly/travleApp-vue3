<template>
    <van-nav-bar
  title="个人中心"
  left-text="上一页"
  left-arrow
  @click-left="onClickLeft"
  />

 <div id="bg">
      <div id="container">
        <h1>个人信息</h1>
        <p><span>姓名：</span>{{sname}}</p>
        <p><span>邮箱:</span>{{smail}}</p>
        <p><span>手机号：</span>{{stel}}</p>
      </div>
    </div>


<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fcdbf6c81800a19d8bc3e2629cfb5958ba61ea8d3e8c5&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668130513&t=66c1bb6d7c64a557c098eaf1d035b971" alt="">
</template>

<script>
export default {
    name:'MySelfView',
    
    data(){
      return{//获取用户信息到主页
        sname:localStorage.getItem('name'),
        smail:localStorage.getItem('mail'),
        stel:localStorage.getItem('tel'),
        isAuth:"",//是否保持登录状态
        show:'true'
      };

    },
    methods:{
      onClickLeft(){
        this.$router.push({path:'/my'})
      },
      loginShow(){
        this.show =! this.show
        console.log(this.show);
      }
    }
}
</script>

<style lang="scss" scoped>
#container{
    width: 480px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background:#00000090;
    text-align: center;
    border-radius: 20px;
    margin-top: 10px;
    color: white;
  } 
#bg{
  width: 100%;
    height: 100%;
    background-size:100% 100%;
    position: fixed;
    top: 0;
    left: 0;
} 

img{
  width: 100%;
  height: 600px;
}
</style>