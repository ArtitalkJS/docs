---
title: 更新日志
sidebar: auto
---

### 👍 `2022/05/22`
* `3.3`

* 解决由于jsdelivr失效带来的artitalk失效，改用unpkg

### 👍 `2021.02.11`
* `3.2.2`

* 无需手动引入`av-min.js`，加入检测，如果没有加载再加载
* 重新添加上传图片的功能。感谢[杜老师](https://dusays.com/)以及[去不图床](https://7bu.top/)的大力支持，Respect🙏！
* 一些已知bug的修复
* 关于图片上传，现在给出两种方案
1. 什么都不管，默认匿名游客上传至去不图床
2. 将图片存放在自己的去不图床的账户中。需要操作的是：在存储说说的应用中的 `class` 下的 `_User` 添加列，列名称为 `imgToken`，值为在去不图床获得的token，若有意使用此配置[请点我前去去不图床注册账号并获取token](https://7bu.top/auth/register.html)。


### 👍 `2020.11.27`
* `3.2.0`
因为图床策略更改，上传图片的功能暂停

* 重新添加上传图片的功能。感谢[杜老师](https://dusays.com/)以及[去不图床](https://7bu.top/)的大力支持，Respect🙏！
* 关于图片的上传：
1. 大小限制为10M
2. 支持格式`jpg,png,webp,bmp,jpeg,gif`
3. 不可上传违反中国大陆和香港法律的图片以及色情图片！

### 👍 `2020.9.13~2020.11.24`
* `3.1.0~3.1.3`

* 新增评论功能，点击每条说说右下角的评论图标即可进入评论页面，再次点击会刷新页面已达到返回的目的。如果首次使用评论功能的话，会出现页面一直加载中的情况。前往存放shuoshuo的leancloud应用中新建一个class命名为`atComment`即可。
* 评论计数功能添加，新增配置项`atComment`，控制评论功能是否启用，默认为`1`，可填`0`以关闭评论功能。
* 为登录添加更多状态显示，增强用户体验

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
