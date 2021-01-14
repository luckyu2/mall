//1。导入
import axios from 'axios'

//如果考虑扩展性，需要导出多个实例用function
export function request(config) {
  const instance = axios.create({
    // baseURL :'http://123.207.32.32:8000',
    baseURL: 'http://localhost:3000',
    timeout: 5000
  })
  //2、axios拦截
  //2.1请求拦截
  instance.interceptors.request.use(config =>{
    // console.log(config)
    return config
    },
    err =>{
      console.log(err)
    })
  //2.2响应拦截
  instance.interceptors.response.use(res=>{
    //返回data的内容
    return res.data
  },err=>{
    console.log(err)
  })
  return  instance(config)
}
