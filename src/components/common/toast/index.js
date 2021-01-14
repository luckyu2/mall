import  Toast from './Toast';
import Vue from "vue";

const  obj = {}
obj.install = function (Vue) {
  //1创建组件构造器
  const toastContrustor = Vue.extend(Toast);

  //2、new的方式 根据组件构造器，创建一个组件对象
  const toast = new toastContrustor()

  //3.将组件对象挂载到到某个元素上面
  toast.$mount(document.createElement('div'))

  //4.toast.$el的对象就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}
export default  obj