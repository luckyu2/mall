import {request} from './request'

export function getDetail(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
export  function getRecommend() {
  return request({
    url:'/recommend'
  })
}
export class Goods{
  constructor(itemInfo,columns,services) {
    this.columns = columns;
    this.services = services;
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc;
    this.lowNowPrice = itemInfo.lowNowPrice;
  }
}

export  class Shop {
  constructor(shopInfo) {
    this.logo =shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParams {
  constructor(info,rule) {
    //可能有些商品没有images
    this.image = info.images?info.images[0]:'';
    this.info =info.set;
    this.sizes = rule.tables;
  }
}