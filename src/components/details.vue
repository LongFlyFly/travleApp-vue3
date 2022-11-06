<template>
    <div>
        <!-- 头部 -->
      <van-nav-bar
        title="详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
<!-- 内容 -->
        <div class="content">
            <div class="content-img">
                <img :src="hooksDetails.imgs" alt="">
            </div>
            <div class="content-price">
                     ￥{{hooksDetails.pprice}}/人
            </div>
            <hr>
            <div class="details-content">
                <div>详情介绍</div>
                {{hooksDetails.details}}
            </div>
            <hr>
            <indexHot :message="sList"/>
            <div class="content-foot">已近到底啦~</div>
        </div>
<!-- 底部 -->
    <div class="footer">
       <van-action-bar>
        <van-action-bar-icon icon="chat-o"  is-link text="好评" @click="showPopup(hooksDetails)" />
        <van-popup v-model:show="show"><van-rate v-model="value" /></van-popup>
        <van-action-bar-icon icon="link-o" text="分享" @click="toShare(hooksDetails)"/>
        <van-action-bar-button type="warning" text="收藏景点" @click="toCollect(hooksDetails)"/>
        <van-action-bar-button type="danger" text="加入购买" @click="toBuy(hooksDetails)" />
        </van-action-bar>
    </div>


            <van-share-sheet
            v-model:show="showShare"
            title="立即分享给好友"
            :options="options"
            />
    </div>
</template>

<script>
import indexHot from '@/components/indexHot.vue' 
import {getDetailHooks} from '../hooks/detailsHooks.js'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex';
import {ref} from 'vue'
import {getHot} from '@/utils/api.js'
   export default {
   setup() {
    const onClickLeft = () => history.back();
    const {hooksDetails} =getDetailHooks()
    const router =useRouter()
    const store = useStore()
    const showShare = ref(false);
    const show = ref(false);
     const sList = ref([])
    //  enmitter.on('detail',(item)=>{
    //     datas.value = item
    //   console.log( datas.value);
    // })
    const value = ref(1);
   getHot("hot",1,6).then((res)=>{
            // console.log(res.data);
            sList.value=res.data
        })
    const showPopup = () => {
          show.value = true;
        };
    const toBuy = (e) =>{
       store.commit('sendbuy',e)
       router.push('/about') 
    }
    
    const toCollect = (e)=>{
        store.commit('sendCollect',e)
        router.push('/collect') 
    }
   
    const toShare = (hooksDetails) =>{
        showShare.value = !showShare.value
    }

     const options = [
      [
        { name: '微信', icon: 'wechat' },
        { name: '朋友圈', icon: 'wechat-moments' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
        { name: '小程序码', icon: 'weapp-qrcode' },
      ],
    ];


    return {
      onClickLeft,
      hooksDetails,
      toBuy,
      options,
      showShare,
      toCollect,
      toShare,
      value,
      showPopup,
      show,
      getHot,
      sList
    };

  },
  components:{
    indexHot
  }
};

</script>

<style lang="scss" scoped>
img{
    width: 100%;
    height: 400px;
}
.content-foot{
    height: 120px;
    width: 100%;
}
.content-price{
    color: red;
    font-size: 36px;
}
    .van-action-bar{
        bottom: 50px;
    }
</style>