<template>

<nav class="navs">
<van-tabbar v-model="active" route>
  <van-tabbar-item name="home" replace to="/home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item name="travel" replace to="/travel" icon="guide-o">行程</van-tabbar-item>
  <van-tabbar-item name="about" replace to="/about" icon="shopping-cart-o">已选</van-tabbar-item>
  <van-tabbar-item name="my" replace to="/my" icon="user-o">个人</van-tabbar-item>
</van-tabbar>

</nav>

  <router-view/>
</template>

<script>
import {ref} from 'vue'
export default {
  name:'HomeView',
  setup() {
    const active = ref('home');
    return { active };
  },
}
</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
