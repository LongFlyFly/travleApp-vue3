<template>
    <div>
      <van-nav-bar
        title="分享"
        left-text="上一页"
        left-arrow
        @click-left="onClickLeft"
      />
        <van-share-sheet
            v-model:show="showShare"
            title="立即分享给好友"
            :options="options"
            />
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const showShare = ref(true);
    const onClickLeft = () => history.back();
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
      options,
      showShare,
      onClickLeft
    };
  },
};

</script>