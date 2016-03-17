# 渲染Markdown，自动增加目录
## Render markdown file, auto add TOC.
***
## 一个工具性质的网页，可以渲染Markdown文件
## 并为H1、H2号标题自动增加一个浮动的TOC
## [Try it now](http://zhengxiaoyao0716.github.io/MarkedWithToc)<br />
## [试试看](http://temp.zheng0716.com/MarkedWithToc)<br />
    ### 我提供了一份接口文档示范，[test_api.md，你可以尝试把它拖进去看看
***
### Dark theme: 黑色主题预览效果
![Dark theme](http://zhengxiaoyao0716.github.io/MarkedWithToc/preview/dark.jpg)
### Light theme: 白色主题预览效果
![Light theme](http://zhengxiaoyao0716.github.io/MarkedWithToc/preview/dark.jpg)
***
    虽然可以用它渲染任何遵循Markdown语法的文件
    但它更适合、或者说主要是为了渲染Http接口文档
## 因为我做了以下优化：
***
> #### 1、在jasonm23提供的css样式基础上，修改定制黑、白两套CSS样式，主要修改表格样式，明暗间隔以便区分，并适当调整字号，使更适合作为接口文档来阅读
#### 2、比起别的Markdown增加TOC的项目，我只为H1、H2号标题做导航，对于接口文档来说这足矣，太多的目录反而不适合
#### 3、导航目录是浮动在左侧的，不会随着文档滚动，这样更方便作为一份接口文档来查看

***
### 那么现在来试试拖拽.md文件来预览吧？
## [Try it now](http://zhengxiaoyao0716.github.io/MarkedWithToc)<br />
## [试试看](http://temp.zheng0716.com/MarkedWithToc)<br />
***
#### 如果你把该功能想整合进自己的网页里，那么需要引用[marked_with_toc.js](http://zhengxiaoyao0716.github.io/MarkedWithToc/static/js/marked_with_toc.js)、[dark](http://zhengxiaoyao0716.github.io/MarkedWithToc/static/css/markdown-dark.css)或[light](http://zhengxiaoyao0716.github.io/MarkedWithToc/static/css/markdown-dark.css)主题
#### 它依赖于[/chjj/marked](https://github.com/chjj/marked)渲染Markdown文本，你需要一起引用