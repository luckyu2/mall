### 项目部署

- 克隆本项目代码：

    ```
    git clone https://github.com/luckyu2/supermall.git
    ```

- 安装项目依赖

    ```
    npm install
    ```

- 本地预览

   ```
    npm run serve 
   ```

  - 打包文件

  ```
  npm run build
  ```

### 项目介绍

使用vue框架开发的一个手机端商城项目demo，拥有首页，分类，商品详情，购物车，个人五个页面。

 ### 接口开发

   - api是使用的是 [constown](https://github.com/constown/mallAPI) 提供的接口.点击下载对应文件。

   - 安装依赖环境，使用npm运行上面作者的文件（默认命令 npm  start）

   - 修改src/network/request.js 文件中的数据接口baseURL

   - baseURL为http://localhost:3000

     ```
     const instance = axios.create({
         baseURL: "修改为你的数据接口",
         timeout: 5000
       })
     ```
   - 备注： 作者[constown]中app.js里面的路由配置，基本上和coderwhy老师提供的api接口路径是一致的，
   有兴趣可以在其基础上添加更多的东西，如果觉得麻烦，可以加coderwhy老师wx获取
### 项目开发文档

见[博客](https://luckyu.xyz/2021/01/13/%E7%A7%BB%E5%8A%A8%E7%AB%AFXX%E8%B4%AD%E5%95%86%E5%9F%8E%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E6%80%9D%E8%B7%AF/)

 ### 接口开发

   - api是使用的是 [constown](https://github.com/constown/mallAPI) 提供的接口.下载对应文件。
   - 安装环境，使用npm运行上面作者的文件（默认命令 npm run start）后台默认端口是 localhost:3000，
     在vue mall项目中，给network的request中添加baseURL为http://localhost:3000
         就ok了。
 - 作者[constown]中app.js里面的路由配置，基本上和coderwhy老师提供的api接口路径是一致的，
   有兴趣可以在其基础上添加更多的东西，如果觉得麻烦，可以加coderwhy老师wx获取

 ### 致谢：

​    感谢constown提供的接口，也感谢coderwhy提供可以学习的项目