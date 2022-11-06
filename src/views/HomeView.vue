<template>
<div class="home">
   <!-- 头部导航 -->
    <van-nav-bar>
        <template #left>
          <van-icon class-prefix="iconfont" name="didiandingwei" size="36"  @click="location" />
        </template>

        <template #title>
          <van-search v-model="searchs" placeholder="请输入搜索关键词" @focus="isShow()" />
        </template>

        <template #right>
           <div v-show="isShow1" @click="search(item)">
            搜索
          </div>
          <van-icon v-show="!isShow1"  size="24" class-prefix="iconfont" name="fangdajing" @click="city"/>
        </template>
    </van-nav-bar>

 <!-- 轮番 -->
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
  <van-swipe-item 
    v-for="(item,index) in list" 
    :key="index">
   <img :src="item.banner" alt="">
</van-swipe-item>
</van-swipe>

<van-notice-bar scrollable text="好消息，好消息，现在组团去三亚，只要998！" />

<HelloWorld/>

<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01bacc56d787ae32f875520fbc16da.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666840438&t=305d3ee88638c9598eb4bd73a4d18c2c" alt="">

<indexHot :message="sList"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import indexHot from '@/components/indexHot.vue'
import {useRouter} from 'vue-router'
import {getHome} from '@/utils/api.js'
import {getSearch} from '@/utils/api.js'
import {getHot} from '@/utils/api.js'
import {ref} from 'vue'
export default {
  name: 'HomeView',
  setup(){
    const list = ref('')
    const sList = ref([])
    const searchs = ref('')
    const router = useRouter()
    const isShow1 = ref(false)
     getHot("hot",1,6).then((res)=>{
            // console.log(res.data);
            sList.value=res.data
        })
    const search =()=>{
      getSearch("all",searchs.value).then((res)=>{
        console.log(res.data);
        sList.value=res.data
    })
    }

     const isShow =()=>{
        isShow1.value = !isShow1.value
    }

    const location = ()=>{
      router.push("/location")
    }
     const city = ()=>{
      router.push("/city")
    }
    getHome("swiper").then((res)=>{
        // console.log(res.data);
        list.value=res.data
    })
    return {
      search,
      getHome,
      list,
      location,
      city,
      sList,
      searchs,
      getSearch,
      getHot,
      isShow1,
      isShow
    }
  },
  components: {
    HelloWorld,
    indexHot
  }
}
</script>

<style lang="scss" scoped>
 img{
  margin-top: 10px;
  width: 100%;
  height: 150px;
 }
</style>
