<template>
<van-nav-bar
  title="登录"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>

<div id="background">
    <div class="container">
        <form action="">
          <h1>登录</h1>
          <div class="form">
              <div class="item">
                <label>用户名：</label><input type="text" name="username" v-model.trim="name" placeholder="请输入用户名">
                <!-- v-model把输入的值传输给name变量 -->
                <br/>
              </div>
              <div class="item">
                <label>密码：</label><input type="password" name="password" v-model.trim="password" placeholder="请输入密码">
                <br/>
              </div>
              <div class="keep">
                <input @click="handlesave" id="yes" type="radio" value="0" ><!-- 点击选中 -->
                <label for="yes">保持登录状态</label>
              </div>
          </div>
          
        </form>
              <button  type="submit" @click.prevent="handlelogin">登录			</button>
              <!-- v-on点击按钮触发handlelogin方法 -->
              <button  @click.prevent="handleregister">注册</button>
              <router-view></router-view>
    </div>
</div>

<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fq_70%2Fimages03%2F20211006%2F3399989046364760a28cf2d3b304b43f.jpeg&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668130513&t=0d391a1ccbfea6c66d2642f30e9e0057" alt="">
</template>

<style scoped>
img{
  width: 100%;
  height: 600px;
}
.container{
  width: 370px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:#00000090;
  text-align: center;
  border-radius: 20px;
  margin-top: 10px;
}
.container h1{
  color: aliceblue;
  margin-left: 20px;
}
.item {
  color: white;
  /* margin-left: 15%; */
  margin-top: 35px;
  font-size: 20px;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item label{
  float:left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
}
input{
  margin-left: -5px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font: normal 13px/100% Verdana,Tahoma,sans-serif;
  width: 200px;
  height: 23px;
  background:#f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
button{
  position: relative;
  height: 33px;
  width: 100px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 18px;
  box-shadow: none;
  color: white;
  margin-left: 40px;
  margin-right: 10px;

}
.keep{
  color: white;
}
.keep input{
  width: 15px;
  height: 15px;
  margin-top: 7px;
  margin-left: 10px;
  margin-right: 10px;
}

</style>

<script>
export default {
  data(){
    return{
      name:"",//姓名，用v-model绑定监听，将输入的字符串赋值给name变量
      password:"",//密码
      st:"false",//false为不保存登录，
      // onClickLeft
    };
  },
  methods:{
    onClickLeft(){
      history.back();
    },
    handlelogin:function()
    {
      if(this.name===localStorage['name'] && this.password===localStorage['password'])
       {
         this.$router.replace('/my');//如果输入的名字以及密码正确路由跳转至个人页面
       } 
       else if(this.name==='')//名字为空
       {
         alert('用户名不为空');
       }
       else if(this.password==='')//密码为空
       {
         alert('密码不为空');
       }
      else{
         alert('账号不存在，请注册后登录');//查无此号
        }
    },
    handleregister:function()
    {
      this.$router.replace('/regester')//点击注册按钮，跳转至注册页面
    },
    //点击保持登录状态触发handlesave
    handlesave:function(){
      this.st="true";//修改登录状态为true
      localStorage.setItem('s',this.st);
      console.log(localStorage.s);
    }
  }
};
</script>
