## 技术栈
111112312
1. react
2. redux
3. react-route 
4. webpack
5. [react-ui](http://lobos.github.io/react-ui/0.6/#/)

## 项目启动

1. 需要安装如下软件
- nodejs
- npm

2. 安装依赖

```bash
git clone git@github.com:fengzier/hehe.git
cd hehe
npm install 
```
3. npm 命令 

```bash
npm start       # 启动项目
npm run build   # 编译项目
``` 

## 项目配置
- `hehe/config/webpack.dev.js`目录中有 `devServer.proxy.target` 为`kube-apitserver` 地址，修改后需要重启服务器

## 发布

- nginx配置

```
location ^~/api/ {
   proxy_pass http://192.168.15.171:8080;
   proxy_read_timeout                  10;
}
location ~*\.(html|js|svg|css|png|woff2|woff|ttf|jpg|ico) {
   allow all;
}
location / {
   rewrite / /index.html break;
}
```

## jenkins
