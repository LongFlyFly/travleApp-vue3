<template>
    <div>
       <van-nav-bar
            title="定制"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
            />

  <el-alert title="对不起，您暂未开通会员！" type="warning" effect="dark" />
 
    </div>
</template>

<script>
export default {
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
};

</script>

<style lang="scss" scoped>
body {
    display: flex;
    flex-wrap: wrap;
}
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>