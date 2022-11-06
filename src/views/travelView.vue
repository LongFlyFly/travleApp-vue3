<template>
    <div class="bj">
        <van-nav-bar title="行程" />
        <hr>

        <div  id="line1_1"></div>
        <div>已完成旅游地</div>
        
        <van-steps :active="active">
            <van-step v-for="(item,index) in city" :key="index">{{item}}</van-step>
        </van-steps>
        <hr>
        <br>
        <div  id="line1_1"></div>

        <div>景点城市细分</div>
        <van-steps :active="active2" active-icon="success" active-color="#38f">
            <van-step v-for="(v,i) in city2" :key="i">{{v}}</van-step>
        </van-steps>

        <hr>
        <br>
        <div  id="line1_1"></div>
        <van-steps direction="vertical" :active="2">
            <van-step>
                <h3>我的位置</h3>
                <p>2022-07-12 12:40</p>
            </van-step>
            <van-step>
                <h3>【城市】需乘坐青藏专线</h3>
                <p>2022-07-11 10:00</p>
            </van-step>
            <van-step>
                <h3>【城市】拉萨（已抵达）</h3>
                <p>2022-07-10 09:30</p>
            </van-step>
        </van-steps>

    </div>

</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(2);
    const active2 = ref(1);
    const city = ['重庆','成都','西藏','北京']
    const city2 = ['昌都','拉萨','达贡','林芝']
    return { 
        active,
        active2,
        city,
        city2
    };
  },
};

</script>

<style lang="scss" scoped>
 #line1_1{
    width: 100%;
    height: 20px;
    background:linear-gradient(to right,#97faff, #ffffff)    //从左到右
    }
</style>