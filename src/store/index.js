import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state:{

  },
  getters:{

  },
  mutations:{

  }
}

const store = new Vuex.Store({
  state: {
    counts:100,
    info:{
      name:'tom',age:17,height:1.7
    }
  },
  getters:{
    //这里的书写,方法名（state）｛｝括号的state不能丢
    //求counts的2次方
    to2ci(state){
      return state.counts*state.counts
    },
    addTo2(state,getters){
      // console.log(getters);
      return getters.to2ci +'+了一点爱心'
    }
  },
  mutations: {
    //这里的书写,方法名（state）｛｝括号的state不能丢
    increment(state){
      state.counts++
    },
    decrement(state){
      state.counts--
    },
    addCount(state,count){
      state.counts = state.counts + count
    },
    upDateInfo(state){
      state.info.name ='luckyu'
    }
  },
  actions: {
    changeName(context){
      setTimeout(()=> {
        // context.info.name ='luckYu' 错误
        //这里的commit指向的是mutation中的upDateInfo方法
        context.commit('upDateInfo')
      },1000)
    }
  },
  modules: {
    a:moduleA
  }
})

export default  store
