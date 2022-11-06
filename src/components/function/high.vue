<template>
    <div>
       <van-nav-bar
            title="高端游"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />

    <div class="content" v-for="(item,index) in list"  :key="index">
            <img :src="item.imgs" alt="">
            <div class="content-text">
              <span> {{item.name}}</span>
              <span style="color:red">￥{{item.pprice}}元/人</span>
            </div>
        </div>


     <div class="content-foot">已近到底啦~</div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { getFunction } from '@/utils/api';
export default {
  setup() {
    const onClickLeft = () => history.back();
    const list = ref()
    getFunction('functions').then((res)=>{
          list.value = res.data.high
    })
    return {
      onClickLeft,
      list
    };
  },
};

</script>

<style lang="scss" scoped>
  img{
  width: 90%;
  height: 200px;
}
.content-foot{
    height: 120px;
    width: 100%;
}
  .content{
    width: 100%;
    background-color: rgba(115, 166, 255, 0.5);
    border-radius: 5%;
    margin-top: 10px;
  }
</style>