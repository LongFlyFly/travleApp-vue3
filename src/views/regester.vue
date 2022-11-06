<template>
<van-nav-bar
  title="注册"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>

    <div id="background">
      <div id="contain">
        <h1>注册</h1>

        <div class="form">
          <label>用户名：</label><input type="text" v-model.trim="name"><br/>
        </div>
        <div class="form">
          <label>密 码：</label><input type="password" v-model.trim="password"><br/>
        </div>
        <div class="form">
          <label>邮 箱：</label><input type="email" v-model.trim="mail"><br/>
        </div>
        <div class="form">
          <label>手机号：</label><input type="tel" v-model.trim="tel"><br/>
        </div>
        <button @click.prevent="handlefinish">提交</button>
      </div>
    </div>
   <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F015ab755f00ed032f875a132a4d80b.JPG%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668130513&t=e4bf2e02103727cd363732c2f0105711" alt="">
</template>

<style scoped>
img{
  width: 100%;
  height: 600px;
}
#contain{
  width: 370px;
  height: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background:#00000090;
  text-align: center;
  border-radius: 20px;
}
#contain h1{
  color: white;
}
.form{
  color: white;
  margin-left: 20%;
  margin-top: 20px;
  font-size: 20px;
  text-align: left;
}
label{
  float:left;
  width: 5em;
  margin-right: 1em;
  text-align: right;
}
input,textarea{
  margin-left: 10px;
  padding: 4px;
  border: solid 1px #4e5ef3;
  outline: 0;
  font: normal 13px/100% Verdana,Tahoma,sans-serif;
  width: 200px;
  height: 20px;
  background:#f1f1f190;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
}
input:hover,textarea:hover,input:focus,textarea:focus{border-color:#0d0aa1;}
button{
  position: relative;
  height: 33px;
  width: 150px;
  background: rgba(35, 19, 252, 0.425);
  border-radius: 10px;
  margin-top: 38px;
  box-shadow: none;
  color: white;
  text-align: center;
}
</style>

<script>
export default {
    name:'regester',
    props: {
    msg: String
  },
  data(){
    return{
      name:"",
      password:"",
      mail:"",
      tel:""
  };
  },
  methods:{
     onClickLeft(){
      history.back();
    },
  //点击完成按钮触发handlefinish
    handlefinish:function()
    {
      if(localStorage['name']===this.name)
      {
        alert("用户名已存在");//如果用户名已存在则无法注册
      }
      else if(this.name==='')
      {
        alert("用户名不能为空");
      }
      else{//将新用户信息存储到localStorage
        localStorage.setItem('name',this.name);
        localStorage.setItem('password',this.password);
        localStorage.setItem('mail',this.mail);
        localStorage.setItem('tel',this.tel);
        localStorage.setItem('s',"false");
        alert("注册成功");
        this.$router.replace('/login');//完成注册后跳转至登录页面
      }
    }
  }
};
</script>
