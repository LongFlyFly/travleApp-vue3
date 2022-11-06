<template>
<van-nav-bar
  title="城市选择"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>


    <div>
        <h1>出发地</h1>
        <hr>
        <van-field
            v-model="value"
            is-link
            readonly
            label="城市"
            placeholder="选择城市"
            @click="showPicker = true"
            />
        <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
        />
        </van-popup>
    </div>
    <hr><hr>
    <div>
        <h1>目的地</h1>
        <hr>
        <van-field
            v-model="value"
            is-link
            readonly
            label="城市"
            placeholder="选择城市"
            @click="showPicker = true"
            />
        <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
        />
        </van-popup>
    </div>
    <hr><hr>
    <br>
    <br>
    <van-button type="primary" size="large">进入查询</van-button>
</template>

<script>
import { ref } from 'vue';


export default {
  setup() {
    const columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华'];
    const result = ref('');
    const showPicker = ref(false);

    const onConfirm = (value) => {
      result.value = value;
      showPicker.value = false;
    };
    
    
    const onClickLeft = () => history.back();


    return {
      result,
      columns,
      onConfirm,
      showPicker,
      onClickLeft,
    };

  },
};

</script>