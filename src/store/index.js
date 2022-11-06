import { createStore } from 'vuex'

export default createStore({
  state: {
     buy:[],
     collect:[]
  },
  getters: {
  },
  mutations: {
    // 购物车
    sendbuy(state,step){
      // 传值进入
      state.buy.push(step)
    },

    // 收藏
    sendCollect(state,step){
      state.collect.push(step)
    }
  },
  actions: {
  },
  modules: {
  }
})
