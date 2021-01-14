import {requst} from './requst'

export function getHomemultidata() {
  return requst({
    url:'/home/multidata',
  })
}
export  function getHomegoods(type,page) {
  return requst({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}

