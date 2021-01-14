# mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

   api是使用的是 See[constown] 提供的接口(https://github.com/constown/mallAPI)
   使用npm运行上面作者的文件（默认命令 npm run start） 后台默认端口是 localhost:3000
 在vue mall项目中，给network的request中添加baseURL为http://localhost:3000
 就ok了。作者[constown]中app.js里面的路由配置，基本上和coderwhy老师提供的api接口路径是一致的，
 有兴趣可以在其基础上添加更多的东西，如果觉得麻烦，可以加coderwhy老师wx获取
    
    感谢constown作者提供的mallAPI接口，也感谢coderwhy老师的视频
