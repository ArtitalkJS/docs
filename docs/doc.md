---
title: 使用文档
sidebar: auto
---
## 👀 前言

GitHub 仓库：[Artitalk.js](https://github.com/ArtitalkJS/Artitalk)

### 🎉 特性

* 增删查改全方面支持
* 支持针对每天说说的评论
* 支持 Markdown/html 语法

## 🚀 快速使用

部分主题已将本项目整合进去，可以直接使用。
感谢以下主题对本项目的支持~

### [hexo-theme-volantis](https://github.com/xaoxuu/hexo-theme-volantis/)

### [hexo-theme-cards](https://github.com/ChrAlpha/hexo-theme-cards)

### [hexo-theme-butterfly](https://github.com/jerryc127/hexo-theme-butterfly)

### [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery/)

## 🚀 开始使用

### 🌈 LeanCloud 的相关准备

:::tip 🌍 建议使用国际版的LeanCloud
因为国际版的leancloud不需要配置serverurl，所以推荐使用国际版，速度没有区别，如果使用国内版的leancloud别忘了填写serverurl即可
:::

1. 前往 [LeanCloud 国际版](https://LeanCloud.app/)，注册账号。
2. 注册完成之后根据 LeanCloud 的提示绑定手机号和邮箱。
3. 绑定完成之后点击`创建应用`，应用名称随意，接着在`结构化数据`中创建 `class`，命名为 `shuoshuo`。
4. 在你新建的应用中找到`结构化数据`下的`用户`。点击`添加用户`，输入想用的用户名及密码。
5. 回到`结构化数据`中，点击 `class` 下的 `shuoshuo`。找到权限，在 `Class 访问权限`中将 `add_fields` 以及 `create` 权限设置为指定用户，输入你刚才输入的用户名会自动匹配。为了安全起见，将 `delete` 和 `update` 也设置为跟它们一样的权限。
6. 然后新建一个名为`atComment`的class，权限什么的使用默认的即可。
7. 点击 `class` 下的 `_User` 添加列，列名称为 `img`，默认值填上你这个账号想要用的发布说说的头像url，这一项不进行配置，说说头像会显示为默认头像 —— Artitalk 的 logo。
8. 在最菜单栏中找到设置-> 应用 keys，记下来 `AppID` 和 `AppKey` ，一会会用。
9. 最后将 `_User` 中的权限全部调为指定用户，或者数据创建者，为了保证不被篡改用户数据已达到强制发布说说。

:::danger ❗ 关于设置权限的这几步
这几步一定要设置好，才可以保证不被 “闲人” 破解发布说说的验证
:::

### 🌼 开始使用

```html
<!-- 引用artitalk -->
<script type="text/javascript" src="https://unpkg.com/artitalk"></script>
<!-- 存放说说的容器 -->
<div id="artitalk_main"></div>
<script>
new Artitalk({
    appId: '', // Your leancloud appId
    appKey: '' // Your leancloud appKey
})
</script>
```

### 🎅 配置项的说明

可以通过修改配置项快捷更改部分功能，[点我查看详细说明](/settings.html)

### 🔨 测试使用

如果上面的配置没有问题，打开你的页面，点击页面右下角的登录输入用户密码后，在输入框中输入说说，点击发布即可。

### 🔨 说说内容的删除

登录后点击说说内容框右上角的 x，点击确定删除即可。

### 🔨 说说内容的修改

点击想要修改的那条说说的头像，会自动跳转到只有一条提示语以及输入框的界面，在输入框中编辑完之后点击保存即可

注：说说内容的修改与删除在leancloud后台也可进行操作

### 🔨 评论的使用

点击每条说说右下角的评论图标即可查看针对本条说说的评论或者对本条说说发起评论，再次点击会刷新页面已达到返回的作用

填写邮箱以获得gravatar的头像

## 🦄 在 Typecho 中使用

1. 登陆后台后新增独立页面
2. 标题随意填，内容填为

```html
!!!
<body> 
    <script type="text/javascript" src="https://unpkg.com/artitalk"></script>
    <div id="artitalk_main"></div>
    <script>
    new Artitalk({
        appId: '', // Your leancloud appId
        appKey: '' // Your leancloud appKey
    })
    </script>
</body>
!!!
```

3. 发布页面

## 🍖 在 Vue 单页项目中使用

例如 vuepress Gridsome 等博客框架是由 Vue 构建的。

在`config.js`中引入 artitalk
```js
module.exports = {
  // ...
  head: [
    ['script', {  src: "https://cdn.jsdelivr.net/npm/artitalk" }],
  ],
  // ...
}
```

新建 `src/components/Artitalk.vue`，添加以下内容（这里建议复制文章页面进行修改）

```vue
<template>
  <div id="artitalk_main" />
</template>

<script>
export default {
  mounted() {
    function addScript(url) {
      var s = document.createElement("script");
      s.id = "at";
      url.indexOf("appId") == -1 ? (s.src = url) : (s.innerHTML = url);
      document.head.appendChild(s);
    }
    addScript(`
      new Artitalk({
          appId: 'ogP8qj3veMh0LFpFWMPOyF0X-MdYXbMMI',
          appKey: 'nHXLd3N3Jgh460t2iRQKWAtr',
          shuoPla: 'Demo页密码：123456',
          bgImg: 'https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp',
          atEmoji: {
              huaji: 'https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/smilies/icon_huaji.gif',
              baiyan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png',
              bishi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png',
              bizui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png',
              chan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png'          
          },
      })
    `);
  },
  destroyed() {
    document
      .querySelectorAll("#at")
      .forEach(element => element.parentNode.removeChild(element));
    delete window.AV;
  }
};
</script>
```

如果需要加入 Artitalk 的页面为 `.md`，直接在其中写入 `<Artitalk />` 即可。

如果为 `.vue` 除了写入 `<Artitalk />`，还需要加入以下内容

```diff
<script>
+import Artitalk from "@/components/Artitalk.vue";

export default {
  components: {
+    Artitalk
  },
};
</script>
```

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
<script type="text/javascript" src="https://unpkg.com/artitalk@版本号/artitalk.js"></script>
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
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/artitalk@版本号"></script>
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
