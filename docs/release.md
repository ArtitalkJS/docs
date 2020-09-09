---
title: 更新日志
sidebar: auto
---

### 👍 `2020.9.6`

* `3.0.0 ~ 3.0.2`

* 版本大更新，逻辑修改，变量名修改，初始化方式修改，如果不想更新，可以不更新，2.4.x 版本也算是比较成熟的版本了，但是不会再维护。
* 此次版本更新新增编辑已发布说说的功能，登陆后点击每条说说的头像即可进行编辑
* 初始化 Artitalk 的方式与 Valine 看齐，支持两种初始化方式。
* 因为之前的更新日志过于杂乱，所以放在了另一个页面，如果想查看可以[点击这里](/prerelease.html)
* 因为此次变动比较大并且之前成功案例审核力度过低，所以成功案例置空，采用了新版的 Artitalk 的可以对文档进行 pr 申请成功案例
* 因为特殊情况删除点赞功能，预计添加评论功能
* 如果你是从低版本升级上来的，需要进行一些操作
首先需要对 LeanCloud 后台进行操作，步骤如下

  1. 登录 LeanCloud
  2. 选择存放了 shuoshuo 的应用，点进去 shuoshuo 的 Class
  3. 修改 shuoshuo 的 Class 中部分类名，具体修改规则如下

    ```
    content -> atContentHtml
    os -> userOs
    imgurl -> avatar
    ```

    `postion` 以及 `star_init` 列可以直接删除了，没有什么用

    并在 shuoshuo 中新建列，列名为 `atContentMd`

  4. 名为 `star` 的 Class 也可以删除了
  5. 结束
  
其次初始化方式需要进行修改为新的初始化方式
```
<script type="text/javascript" src="https://unpkg.com/artitalk"></script>//引用artitalk
<div id="artitalk_main"></div>//存放说说的容器
<script>
new Artitalk({
    appId: 'Your leancloud appId',
    appKey: 'Your leancloud appKey',
})
</script>
```
配置项也进行了重命名，详情查看[配置项](/settings.html)
* 如果是从旧版本升级上来的会出现这样的情况，编辑旧说说的时候无法拉取本来的内容的 Markdown 格式，输入框中可能为空白，这个没有解决办法。但是问题不大
