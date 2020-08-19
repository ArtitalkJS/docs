---
title: 使用文档
sidebar: auto
---
## 👀 前言

Github 仓库：[Artitalk.js](https://github.com/ArtitalkJS/Artitalk)

因为项目初期版本更新较为频繁，所以教程仅作参考，请仔细阅读使用文档，以此为准。

### 🎉 特性

* 实时发布，点击删除
* 支持 markdown/html 语法
* 支持剪切板图片直接上传，支持点击上传图片，音频，视频
* 支持点赞
* 方便引用

### ⛵ 关于资源上传的说明

* 图片单张支持最大为 5M
* 音频单张支持最大为 10M
* 视频单张支持最大为 25M

* 因为本功能是基于 GitHub 的存储实现的，所以如果上传失败请检查是否可以正常访问 GitHub。
* 如果您上传的文件较大，请耐心稍等片刻

### 👍 关于点赞功能的说明

1. 点赞依赖于一个新的名为 `star` 的 class，若未手动创建，js 会帮你创建。但是如果考虑到安全问题可以自行修改这个 class 的权限，但是这个 class 不会影响到存储说说的 class，可以放心使用
2. 默认最初点赞数为 0，对于一人多赞不进行判断（判断了感觉也没什么用。当前点赞机制：不刷新的情况下只允许一个赞）
3. 首次使用点赞为手动创建 class 时会出现所有点赞数为 `loading` 的情况，这属于正常情况，刷新之后即可正常使用。

## 🚀 快速使用

部分 Hexo 主题已将本 js 整合进去，可以直接使用。
感谢以下主题对本 js 的支持~

### [hexo-theme-volantis](https://github.com/xaoxuu/hexo-theme-volantis/)

1. 新建页面（注意不要命名为 artitalk，不然会出现重复的 id 导致 js 加载失败）
2. 页面的 layout 填为 artitalk，comments 设置为 false
3. 在主题 config 里面填写 artitalk 的相关配置项即可

## 🚀 开始使用

### 🌈 leancloud 的相关准备

:::tip 🌍 使用国际版的 leancloud
因为 leancloud 的国内节点需要接入备案域名作为安全域名。明显违背了适用性强的理念。这里推荐大家使用国际版，当然国内版的也可以，但是不要忘了填写 severurl 即可。
:::

1. 前往 [leancloud 国际版](https://leancloud.app/)，注册账号。
2. 注册完成之后根据 leancloud 的提示绑定手机号和邮箱。
3. 绑定完成之后点击`创建应用`，应用名称随意，接着在`结构化数据`中创建 `class`，命名为 `shuoshuo`。
4. 在你新建的应用中找到`结构化数据`下的`用户`。点击`添加用户`，输入想用的用户名及密码。
5. 回到`结构化数据`中，点击 `class` 下的 `shuoshuo`。找到权限，在 `Class 访问权限`中将 `add_fields` 以及 `create` 权限设置为指定用户，输入你刚才输入的用户名会自动匹配。为了安全起见，将 `delete` 和 `update` 也设置为跟它们一样的权限。
6. 点击 `class` 下的 `_User` 添加列，列名称为 `img`，默认值填上你这个账号想要用的头像 url，这一项不进行配置，说说头像会显示为默认头像 —— Artitalk 的 logo。
7. 在最菜单栏中找到设置-> 应用 keys，记下来 `AppID` 和 `AppKey` ，一会会用。
8. 最后将 `_User` 中的权限全部调为指定用户，或者数据创建者，为了保证不被篡改用户数据已达到强制发布说说。
9. 因为 leancloud 功能的限制。若想同时使用 valine 和 artitalk，请在 `class` 中添加名为 `Comment` 的 class。不推荐在存储 valine 的应用中新建名为 `shuoshuo` 的 class，可能会出现神奇的 bug。

:::danger ❗ 关于设置权限的这几步
这几步一定要设置好，才可以保证不被 “闲人” 破解发布说说的验证
:::

### 🌼 HTML 片段

```html
<script src="https://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<body>
    <script>
    var appID="";
    var appKEY="";
    </script>
    <div id="artitalk_main"></div>
    <script type="text/javascript" src="https://unpkg.com/artitalk"></script>
</body>
```

如果你加载本 js 后出现一直是加载页面的情况，请检查你的主题是否会对其中内容进行渲染（F12 查看即可）。
如果是因为渲染导致的问题，请在`<script>`标签外面使用`{% raw %}`

::: details 点击查看代码

```html
<script src="https://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<body>
    {% raw %}
    <script>
    var appID="";
    var appKEY="";
    </script>
    {% endraw %}
    <div id="artitalk_main"></div>
    <script type="text/javascript" src="https://unpkg.com/artitalk"></script>
</body>
```

:::

### 🎅 配置项的说明

可以通过修改配置项快捷更改部分功能，[点我查看详细说明](/settings.html)

### 🔨 测试使用

如果上面的配置没有问题，打开你的页面，点击页面右下角的登录输入用户密码后，点击发布说说即可。

### 🔨 说说内容的删除

登录后点击说说内容框右上角的 x，点击确定删除即可。

### 🔨 说说内容的修改

在 leancloud 中找到自己添加的名为 `shuoshuo` 的 class，在里面的 `content` 中编辑即可。

## 🦄 在 Typecho 中使用

1. 登陆后台后新增独立页面
2. 标题随意填，内容填为

```html
!!!
<script src="https://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
<body>
    <script>
    var appID="";
    var appKEY="";
    </script>
    <div id="artitalk_main"></div>
    <script type="text/javascript" src="https://unpkg.com/artitalk"></script>
</body>
!!!
```

3. 发布页面

## 🕸 使用 cdn

### 🕸 UNPKG

#### ⭐ 获取最新

```html
// 默认获取最新，推荐使用
<script type="text/javascript" src="https://unpkg.com/artitalk"></script>
```

#### 🍳 获取指定版本

使用指定版本，在版本号填上对应版本即可，例如：[https://unpkg.com/artitalk@1.1.15/artitalk.js](https://unpkg.com/artitalk@1.1.15/artitalk.js)  

关于版本可查看：[https://unpkg.com/artitalk/](https://unpkg.com/artitalk/)

```html
<script type="text/javascript" src="https://unpkg.com/artitalk@版本号 /artitalk.js"></script>
```

### 🕸 JsDelivr

#### ⭐ 获取最新

```html
// 默认获取最新，推荐使用
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/artitalk"></script>
```

#### 🍳 获取指定版本

使用指定版本，在版本号填上对应版本即可，例如：[https://cdn.jsdelivr.net/npm/artitalk@1.1.15](https://cdn.jsdelivr.net/npm/artitalk@1.1.15)

关于版本可查看：[https://cdn.jsdelivr.net/npm/artitalk/](https://cdn.jsdelivr.net/npm/artitalk/)

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/artitalk@版本号 "></script>
```

<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client="ca-pub-9420537843748923"
     data-ad-slot="8405286900"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

## 🐷 关于 pjax

因为很多主题使用了 pjax 所以可能导致各种各样的问题出现，这里推荐在使用了 artitalk 的页面同时使用一个自动刷新一次的 js

可以暴力的解决因为 pjax 产生的一些报错

```js
$(document).ready(function () {
    if(location.href.indexOf("#reloaded")==-1){
        location.href=location.href+"#reloaded";
        location.reload();
    }
})
```

当然你也可以给你跳转说说页面的菜单加一个 target="_blank" 的属性，作为弹出框，也可以暴力解决 pjax 的问题
