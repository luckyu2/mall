import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"


Vue.use(Vuex)

const store = new Store({
  state: {
    cartList:[]
  },
  getters,
  actions,
  mutations
  // mutations: {
   // addCart(state,payload){
      //es5普通方法的遍历
      // console.log(state)
      // for(let item of state.cartList){
      //   if(item.iid ===payload.iid){
      //     oldPrice = item
      //   }
      //因为mutation中处理的数据较单一，建议下面2个判断放在action中，所以下面代码注释了
      //查找之前数组是否有添加该商品
      // const oldPrice = state.cartList.find(function (item) {
      //   return item.iid === payload.iid
      // })
      // //如果有添加则给该商品的count（商品数量计数）加一，没有则给新商品加1
      // if(oldPrice){
      //   oldPrice.count +=1
      // }else {
      //   payload.count = 1;
      //   state.cartList.push(payload)
      //  }
      // }
      //action不会在插件上反映数据的修改，所以将action数据传递到mutation中可以记录数据的修改
      // addCount(state,payload){
      //   payload.count++
      // },
      // addToCart(state,payload){
      //   state.cartList.push(payload)
      // }
  // },

  // actions:{
    // addCart(context, payload) {
    //   const oldPrice = context.state.cartList.find(function (item) {
    //     return item.iid === payload.iid
    //   })
    //   //如果有添加则给该商品的count（商品数量计数）加一，没有则给新商品加1
    //   if (oldPrice) {
    //     // oldPrice.count += 1
    //     context.commit('addCount',payload)
    //   } else {
    //     payload.count = 1;
    //     // context.state.cartList.push(payload)
    //     context.commit('addToCart',payload)
    //
    //   }
    // }
// }
})

export default  store
