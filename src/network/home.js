import {request} from './request'

//请求轮播图和推荐的数据
export function getHomemultidata() {
  return request({
    url:'/home/multidata',
  })
}
//请求首页商品信息
export  function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

