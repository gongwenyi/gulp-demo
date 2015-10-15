# gulp-demo
使用gulp.js构建前端项目，本套模板包含了项目的目录结构，能够压缩合并css、js以及压缩图片，浏览器自动刷新
1.目录结构说明
  1.1 src目录：src目录下存放的是源文件，包括未经压缩合并的css、js以及图片
  1.2 dist目录： dist目录是项目输出目录，存放的是经过压缩合并后的css、js以及图片，还包括html源文件
  1.3 如果改了目录结构，那么gulpfile.js中的文件路径也需要做相应修改
2.模板使用说明
  2.1 模板中src目录文件夹中应该是没有文件的，此处为了演示结果的正确性加入了一些文件，在使用的时候只需要
      将其中的文件删掉，然后建立自己项目的文件。
  2.2 运行 npm install 安装package.json文件中定义的插件，可以一次安装所有定义了的插件，如果安装后有的插件无法使用，可以
      单独安装这一插件（前提是存在package.json文件，并且定义了gulpfile.js中用到的插件，如果需要添加新的插件，可以
      通过 npm install 插件名称（一个或多个，以空格隔开）--save-dev 命令安装）
  
      