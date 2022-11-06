<template>
热门推荐
    <div class="body">
        <div class="body-first" 
        v-for="(item,index) in list" 
        :key="index"
        @click="toDetail(item)"
        >
            <img :src="item.imgs">
            <div class="body-text">{{item.name}}</div>
        </div>
    </div>
</template>
<script>
import {getHot} from '@/utils/api.js'
import {getDetailHooks} from '../hooks/detailsHooks.js'
import {computed, ref} from 'vue'
import {useRouter} from 'vue-router'
export default {
    name:"indexHot",
    props:{
        message:{
            type:Array
        }
    },
    setup(props){
        const list =  computed(()=>{        
            return props.message
        })
        const router =useRouter()
        const page = ref(1)

        const limit = ref(6)
        const {hooksDetails} =getDetailHooks()
       
        const toDetail =(item)=>{
            hooksDetails.value = item
            router.push('/details') 
         }

        return{
            list,
            getHot,
            toDetail,
            limit,
            page,
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .body{
        border-radius: 25px;
        box-shadow: 0 0 10px 6px rgba(209, 209, 209, 0.5);
        width: 100%;
        height: 900px;
        background-color: rgb(197, 255, 255);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 20px;
    }
    .body-first{
         padding: 13px;
         width: 40%;
         height: 200px;
         margin-left: 5px;
         margin-right: 5px;
    }
    img{
        // padding: 10px;
        width: 90%;
        height: 200px;
        opacity: 0.8;/*设置透明度*/
        border-radius: 10%;
        z-index: -1;
    }
</style>