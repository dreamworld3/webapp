Vue项目--移动端音乐WebApp
用Vue，vue-axios， better-scroll，vuex ，vue-router， Scss，ES6 开发移动端音乐 WebApp
后端使用了网易云音乐 NodeJS 版 API（NeteaseCloudMusicApi）提供音乐数据，其文档地址：https://binaryify.github.io/NeteaseCloudMusicApi

项目地址：https://github.com/dreamworld3/webapp.git
实现功能：1.推荐歌单2.推荐歌曲3.歌手4.排行榜5.搜索歌手、歌单、歌曲6.播放歌曲

项目部分截图：
![image](https://github.com/dreamworld3/webapp/blob/master/Screenshots/1.PNG)
![image](https://github.com/dreamworld3/webapp/blob/master/Screenshots/2.PNG)
![image](https://github.com/dreamworld3/webapp/blob/master/Screenshots/3.PNG)
![image](https://github.com/dreamworld3/webapp/blob/master/Screenshots/4.PNG)
![image](https://github.com/dreamworld3/webapp/blob/master/Screenshots/5.PNG)

项目运行：
1.复制代码到本地，打开DOS命令行窗口，项目根目录下输入

git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git

(该命令会在目录下生成一个名为NeteaseCloudMusicApi的文件夹)


进入到项目下的NeteaseCloudMusicApi目录下，输入以下命令

cnpm install

node app.js


2.打开另一个DOS命令行窗口，去项目根目录下运行下面命令：
安装依赖：cnpm install（为了项目正常运行，要禁用ESLint,安装依赖后去buile/webpack.base.conf.js注释掉第46行的代码...(config.dev.useEslint ? [createLintingRule()] : []),）

启动项目：cnpm run dev

打包项目：cnpm run build

