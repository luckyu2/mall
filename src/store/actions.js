export default {
  addCart(context, payload) {
    return  new Promise(((resolve, reject) => {
    let oldPrice = context.state.cartList.find(item => item.iid === payload.iid)
    //如果有添加则给该商品的count（商品数量计数）加一，没有则给新商品加1
    if (oldPrice) {
      // oldPrice.count += 1
      // context.commit('addCounter',payload)  //err 写错了，传入的数据应该是oldPrice
      context.commit('addCounter',oldPrice)
      resolve('您已添加过此商品')
    } else {
      payload.count = 1;
      // context.state.cartList.push(payload)
      context.commit('addToCart',payload)
      resolve('您已添加至购物车')
    }
    }))
  }
}