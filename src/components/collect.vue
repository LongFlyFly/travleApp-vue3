<template>
        <van-nav-bar
            title="收藏"
             left-text="上一页"
              left-arrow
              @click-left="onClickLeft"
        />

<div class="image"></div>

  <div class="all">
    <ul class="wrapper">
      <div class="nav">
        全选<input type="checkbox" v-model="allCheck" @change="checkAll" />
      </div>
      <br />
      <li>
        <span>景点选择</span>
        <span>景点图片</span>
        <span>景点信息</span>
        <span>操作</span>
      </li>

      <li v-for="(item, index) in list" :key="index">
        <span
          ><input
            type="checkbox"
            v-model="item.isChecked"
            @change="selectProductItem(list)"
        /></span>
        <span
          ><img :src="item.imgs" style="width: 100px; height: 100px"
        /></span>
        <span>{{ item.name }}</span>
       
        <span>
          <a href="javascript:void(0);" @click="handRemove(item)">取消收藏</a><br>
        </span>
      </li>

    </ul>
  </div>

</template>

<script>

export default {
  data() {
    return {
      isChecked: false,
      allCheck: false,
    };
  },



 computed:{
  // 接收的数组
    list(){
      return this.$store.state.collect
    }
 },
 
  methods: {
   
    handRemove(item) {
      this.list.splice(this.list.indexOf(item), 1);
    },

     onClickLeft(){
        history.back()
      },

    //全选
    checkAll() {
      // 点击全选，则所有的都选上
      if (this.allCheck) {
        this.list.forEach((item) => {
          item.isChecked = true;
        });
      } else {
        // 反之，都不选上
        this.list.forEach((item) => {
          item.isChecked = false;
        });
      }
    },

    //反选
    selectProductItem(item) {
      // 过滤出选择框
      let num = item.filter((item) => {
        return item.isChecked;
      }).length;
      // 如果选择了所有的，则上面的店铺勾选
      if (num == item.length) {
        console.log(item.length);
        this.allCheck = true;
      } else {
        // 反之，不勾选
        this.allCheck = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
}
.all{
  background-color: rgba(145, 255, 242, 0.3);
}
.wrapper {
  text-align: center;
  border: 1px solid;
}
.nav {
  margin-top: 50px;
}
li {
  margin-top: 50px;
  border-bottom: burlywood dotted 1px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
 
}

.nav > button,
.foot button {
  height: 40px;
  width: 100px;
  border-radius: 15px;
  background-color: orangered;
  border: none;
  outline: none;
  align-self: center;
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-top: -10px;
}

li > span {
  font-size: 12px;
  text-align: center;
  width: 150px;
}

span > img {
  height: 90px;
}

input {
  text-align: center;
  width: 30px;
}

.foot {
  display: flex;
  justify-content: space-around;
}
a{
  text-decoration: none;
  color: black;
  font-size: 14px;
}
a:hover{
  color: orange;
  text-decoration: underline;
}
.foot span {
  color: #ff4500;
  font-weight: 900;
}
</style>