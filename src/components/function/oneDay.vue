<template>
    <div>
       <van-nav-bar
            title="一日游"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />

  <div class="coupon coupon-wave-left coupon-yellow" 
    v-for="(item,index) in list" :key="index"
  >
    <div class="coupon-info coupon-hole coupon-info-right-dashed">
        <div class="coupon-price">¥{{item.pprice}}</div>
        <div class="coupon-desc">{{item.name}}</div>
        <div class="coupon-expiry-date">有效期：{{item.startTime}}-{{item.endTime}}</div>
    </div>
    <div class="coupon-get coupon-get-already">立即购买</div>
</div>
 

     <div class="content-foot">已近到底啦~</div>
    </div>
</template>

<script>
import { getFunction } from '@/utils/api';
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const onClickLeft = () => history.back();
    const list = ref()
    getFunction('functions').then((res)=>{
        list.value = res.data.oneDay
    })

    return {
      onClickLeft,
      list
    };
  },
};

</script>

<style lang="scss" scoped>
body {
    display: flex;
    flex-wrap: wrap;
}
.content-foot{
    height: 120px;
    width: 100%;
}
.coupon {
    display: inline-flex;
    color: white;
    position: relative;
    padding-left: .5rem;
    padding-right: .5rem;
    margin: 1rem;
    /** 这里不能用百分号，因为百分号是分别相对宽和高计算的，会导致弧度不同  */
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
    overflow: hidden;
}
.coupon-yellow {
    background-color: #F39B00;
}
.coupon-yellow-gradient {
    background-image: linear-gradient(150deg, #F39B00 50%, #F39B00D8 50%);
}
/* 左边框的波浪 */
.coupon-wave-left::before, .coupon-wave-right::after{
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 14px;
    background-image: radial-gradient(white 0, white 4px, transparent 4px);
    /** 如果只设置为半径的两倍(直径)，那么半圆之间没有类似堤岸的间隔 */
    background-size: 14px 14px;
    background-position: 0 2px;
    background-repeat: repeat-y;
    z-index: 1;
}
.coupon-wave-left::before {
    left: -7px;
}
.coupon-wave-right::after {
    right: -7px;
}
.coupon-info {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    padding-bottom: 1.5rem;
    position: relative;
    min-width: 11rem;
}
.coupon-info-right-dashed {
    border-right: 2px dashed white;
}
.coupon-info-right-solid {
    border-right: 2px solid white;
}
/* 使用两个边框为圆角的白色div制造半圆缺角，有个缺点是这个缺角必须与背景色相同（clip-path不好弄） */
.coupon-hole::before, .coupon-hole::after {
    content: '';
    width: 1rem;
    height: 1rem;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    right: -.5rem;
}
.coupon-info::before {
    top: -.5rem;
}
.coupon-info::after {
    bottom: -.5rem;
}
.coupon-info>div {
    margin-bottom: .2rem;
}
.coupon-price {
    font-size: 250%;
    font-weight: bold;
}
.coupon-price>span {
    font-size: 40%;
    margin-left: .5rem;
    font-weight: normal;
}
.coupon-get {
    padding: 1rem;
    /** 这里使用flex是为了让文字居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 5rem;
    position: relative;
}
.coupon-get>.coupon-desc {
    font-size: 150%;
    margin-bottom: .5rem;
    font-weight: bold;
}
.coupon-get-already::after {
    content: '';
    width: 5rem;
    height: 5rem;
    background-size: 5rem 5rem;
    position: absolute;
    top: -1rem;
    right: -1rem;
}

</style>