import {ref} from 'vue'

const hooksDetails = ref({
    details:'',
    imgs:'',
    pprice:''
})

 export function getDetailHooks (){
    return {
        hooksDetails,
    }
 }