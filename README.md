## 初始化

#### 步骤
1. vue init webpack-simple my_project（项目名）。
2. 执行命令：cd my_project;npm i;npm run dev打开看看是否初始化成功。
3. 修改package.json里面private为false,增加"main":"dist/build.js"。
4. 在根目录新建文件.npmignore，里面的文件名是会忽略上传到npm的。
5. 在Components新建文件夹BallScroll，新建文件index.vue，写自己代码。
6. 修改webpack.config.js，module.exports中的entry为`./src/Components/index.js`,output加上：`libraryTarget: 'umd'`。
7. 在src下新建文件夹Components，新建文件index.js。
8. Components下index.js写上代码
```
mport BallScroll from './BallScroll/index.vue';
const sw_vue_plugs = {
  install(Vue, options) {
    Vue.component(BallScroll.name, BallScroll);
  }
};
if (typeof window !== 'undefined' && window.Vue) {
  window.sw_vue_plugs = sw_vue_plugs;
  Vue.use(sw_vue_plugs);
};
export default sw_vue_plugs;
```
9. main.js里面，写上代码
```
import sw_vue_plugs from './Components/index';
export default sw_vue_plugs;
```

 ```!
  注意，这儿的名字是和Components下index.js导出名字一致。
 ```
9. 执行npm run build（记得 每次更新都需要执行npm run build）。
10. 项目根目录下执行npm adduser,输入npm的账号密码还有邮箱，缺一不可。（注：如果已有帐号，则输入npm login登录，账号密码还有邮箱，也是缺一不可，如果报错code E409，是因为使用的淘宝npm，导致登录失误，因为登录的是淘宝的npm 仓库源，淘宝应该不会给你提供登录服务把npm registry换成官方的就可以了，运行代码：nrm use npm,如果报错，是因为没有安装nrm，运行代代码npm install -g nrm安装nrm再执行代码：nrm use npm即可）。
11. 可以运行npm whoami查看当前用户是否是自己。
12. 运行代码npm publish进行发布。
13. 项目引入：先安装插件：`npm install sw_vue_plugs_instruction --save-dev`
 ```!
  注意，这儿的名字是和package.json下name一致。
 ```
14. 在mian.js里面引入：
```
import sw_vue_plugs_instruction from 'sw_vue_plugs_instruction';
Vue.use(sw_vue_plugs_instruction);
```
15. 在页面直接引用：`import { BallScroll }  from "sw_vue_plugs_instruction";`。

## ️维护插件
1. 对插件代码功能进行了拓展或者修改，需要重新发布新版本，除了改代码之外，需要每次手动把package.json中的version进行修改，这是版本号，代表版本改动了。npm使用的版本号规则是semver语义化版本，初始化是1.0.0，依次是主版号.次版号.修订号，主版号是不相容的API修改，次版号是功能性新增，修订号是问题修正。
2. 修改了之后再运行一次`babel src --out-dir lib`得到最新的lib,再执行`npm publish`进行发布；
3. 发布之后在运用的项目如何更新呢？（1）如果是npm，由于是自己的插件，可以知道自己的版本修改成了什么，在项目中package.json里面找到依赖包版本，手动改成最新的版本号，然后项目运行`npm install --force`就可以了；（2）如果是yarn，运行`yarn upgrade`也ok；（3）由于项目中的依赖包会发生更新，所以有时候我们会安装第三方插件进行查看，`npm install -g npm-check-updates`,运行`ncu` 查看可更新包,`ncu -u`更新package.json,`npm install`升级到最新版本即可。

安装插件时，--save-dev是你开发时候依赖的东西，--save是你发布之后依赖的东西。-g表示全局安装，--save-dev 可以简写为 -D ，--save 可以简写为 -S ，npm install 可以简写为 npm i。
