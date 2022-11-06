<template>
    <div>
        <img src="../assets/logo.png" alt="">
    </div>
    <div class="zhifu">
            <p>总价：￥{{this.datas.sumPrice}}</p><br>
            <button @click="Pay()">确认支付</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // 创建一个空对象
            datas:''
        }
    },
    mounted(){
        // 赋值(此时需要以datas来调用)
        this.datas= this.$route.query
        console.log(this.$route.query)
    },

   methods:{
        Pay(){
            alert("支付成功！")
        }
   }
}
</script>

<style lang="scss" scoped>
button{
    color: white;
    border-style: none;
    background-color: #ff3434;
    text-align: center;
    width: 100px;
    height: 100px;
}
p{
    text-align: center;
    color: orange;
    font-size: 60px;
}
.bg{
    display: flex;
    align-items: center;
}
    .zhifu{
        width: 100%;
        height: 300px;
        background-color: rgb(236, 236, 236);
    }
    img{
        width: 100%;
        height: 300px;
    }
</style>