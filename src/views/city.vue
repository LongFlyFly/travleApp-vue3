<template>
    <div>
        <!-- 头部 -->
        <van-nav-bar title="城市选择" 
        left-text="返回" left-arrow   @click-left="onClickLeft" 
        right-text="选择" @click-right="onClickRight" 
        :fixed="true"/>
        
    <van-nav-bar>
        <template #title>
          <van-search  placeholder="请输入搜索关键词"/>
        </template>
    </van-nav-bar>

    

        <van-index-bar :sticky="false">
            <van-index-anchor v-for="(item,index) in list" :key="index" :index="index" >
                <div>{{index}}</div>
                <van-cell :title="value.name" v-for="value in item" :key="value.id" />
            </van-index-anchor>
        </van-index-bar>

    </div>
</template>

<script>
import {getCity} from '@/utils/api.js'
import {ref} from 'vue'
import router from '@/router';
export default {
  setup() {
    const list = ref('')
    const onClickLeft = () => history.back();
    const onClickRight = ()=>{router.push('/ChoseCity')}
    // 城市数据名为data
    getCity("data").then((res)=>{
        console.log(res.data);
        list.value=res.data.cities
    })
    return {
      onClickLeft,
      onClickRight,
      list
    };
  },
};
</script>

<style lang="scss" scoped>

    .van-cell{
        text-align: left;
    }
</style>