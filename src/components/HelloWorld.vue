<template>
功能模块
  <div class="item">
      <div class="item-body" 
      v-for="(item,index) in list" 
      :key="index" 
      @click="toFuction(item.router)"
      >

        <div class="item-body-img" >
         <img :src="item.imgs" alt="">
        </div>
        <div class="item-body-text">{{item.name}}</div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {getChose} from '@/utils/api.js'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
export default {
  name: 'HelloWorld',
  setup(){
    const list = ref('')
    const router = useRouter()

    const toFuction =(routers)=>{
      router.push(routers)
    }

    getChose("chose").then((res)=>{
        list.value=res.data
    })
    return {
      getChose,
      list,
      toFuction
    }
  },
}
</script>


<style lang="scss" scoped>
  .item{
    background-color: rgb(208, 255, 250);
    width: 100%;
    height: 150px;
    border-radius: 25px;
    box-shadow: 0 0 10px 3px rgba(200, 200, 200, 0.5);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 20px;
  }
  .item-body{
    background-color: rgb(145, 255, 255);
    height: 60px;
    width: 20%;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 15%;
  }
  .item-body:hover{
    transform:scale(1.1)
  }
</style>