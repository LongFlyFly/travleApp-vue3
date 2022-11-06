<template>
  <van-nav-bar
  title="个人中心"
  left-text="上一页"
  left-arrow
  @click-left="onClickLeft"
  />
    <div>
        期待你的好评~
    </div>
</template>

<script>
export default {
    setup(){
           const onClickLeft = () => history.back();
           return{
            onClickLeft
           }
    }
}
</script>