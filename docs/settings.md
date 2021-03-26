---
title: 配置项
sidebar: auto
---


## 😜 Artitalk支持两种初始化方式

```html
<!-- 第一种 -->
<script>
new Artitalk({
      appId: 'Your LeanCloud appId',
      appKey: 'Your LeanCloud appKey',
})
</script>

<!-- 第二种 -->
<script>
var at = new Artitalk();
at.init({
      appId: 'Your LeanCloud appId',
      appKey: 'Your LeanCloud appKey',      
})
</script>
```

## 必填

### 📌appId

* 对应 LeanCloud 创建的应用中的 AppID
* 参数类型: `string`

### 📌appKey

* 对应 LeanCloud 创建的应用中的 AppKEY
* 参数类型: `string`

## 选填

### 📌serverURL

* 如果你是国内版 LeanCloud 用户，此项必填
* 对应 LeanCloud 创建的应用中绑定的 API 域名。
* 参数类型: `string`

### 📌lang

* 功能：语言设置
* 默认值：zh（中文）
* 可选项：en（英语），es（西班牙语）
* 参数类型: `string`

对不同语言有需求的可以联系我

### 📌pageSize

* 功能：每页显示说说的数量（也是每次加载说说的数量）
* 默认值：5
* 参数类型: `Number`

### 📌shuoPla

* 功能；在编辑说说的输入框中的占位符
* 默认值：无
* 参数类型: `string`

### 📌avatarPla

* 功能；自定义头像 url 的输入框的的占位符
* 默认值：无
* 参数类型: `string`

默认每条说说的头像按照 LeanCloud 用户中设置的头像显示，如果发布时在自定义头像 url 中填写自定义头像链接，会取代默认头像

### 📌motion

* 功能：加载动画的开关
* 默认值：1（开启）
* 可选项：0（关闭），1（开启）
* 参数类型: `Boolean`

不建议关闭加载动画

### 📌bgImg

* 功能：说说输入框背景图片
* 默认值：无
* 参数类型: `string`

### 📌color1 color2 color3

* 功能：说说的配色
* color1：说说背景颜色 1 & 按钮颜色 1
* color2：说说背景颜色 2 & 按钮颜色 2
* color3：说说字体颜色 1
* 默认值：demo 页中当前配色
* 参数类型: `string`

### 📌atEmoji

* 功能：自定义表情包
* 默认值；无
* 参数类型: `Object`

JS 自带三套表情包（贴吧，bilibili小电视，QQ），分四页，最后一页为 custom，即用户自定义的表情包

### 📌cssUrl

* 功能：自定义css接口
* 默认值：无
* 格式；链接形式，可根据仓库中的main.css魔改（注意：仓库中的main.css中的color1等换成你所需要的颜色即可）
* 参数类型: `string`

### 📌atComment

* 功能：评论功能的开关
* 默认值：1（开启）
* 可选项：0（关闭），1（开启）
* 参数类型: `Boolean`

## 配置项填写示例

```html
<script>
      new Artitalk({
            appId: '123456',
            appKey: '123456',
            atEmoji: {
                  baiyan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png",
                  bishi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png",
                  bizui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png",
                  chan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png",
                  daku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.png",
                  dalao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalao.png",
                  dalian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalian.png",
                  dianzan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dianzan.png",
                  doge: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.png",
                  facai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/facai.png",
                  fadai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.png",
                  fanu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.png",
            },
      })
</script>
```

# Artitalk_SafeMode

**Artitalk_SafeMode**通过中间件的方式,在中间件替换APPID和APPKEY保护两者,避免两者暴露被刷

使用Artitalk_SafeMode,请在前端随意伪造APPID和APPKEY,然后将serverurl修改为中间件网址即可


## 👍CloudFlareWorker

CloudFlareWorker针对免费用户提供了每天10w次的调用方式,并且随时能够开启UnderAttack防刷.

1.新建一个Worker，将[`ArtitalkSafe.worker.js`](https://raw.githubusercontent.com/ArtitalkJS/Artitalk/master/ArtitalkSafe.worker.js)里面的内容复制到里面

2.退出，设置两个变量`APPID`和`APPKEY`[变量名务必大写]

3.修改配置项为:

```html
<script>
new Artitalk({
      serverURL: 'https://xxx.xxx.workers.dev',
      appId: '随意输入写什么,不要暴露你的真实appkey',
      appKey: '同上'
})
</script>
```
4.现在,无论是查开源代码还是拦截网络请求,都将看不到AppKey和AppId.一旦被刷,你可以手动打开5秒盾防刷

5.高级变量配置

- `SERVERDOMAIN` 通常来讲,Artitalk的API地址是`AppId前八位小写.api.lncldglobal.com`,但是自定义域名、国内版LeanCloud或者特殊情况不是这样子的,请新建一个变量名为`SERVERDOMAIN`,内容为自定义域名
- `ATCOMMENT` 中间件评论防护,填写为`false`则彻底禁用Artitalk自带评论系统
- `CORS` 跨域拦截,可以有效避免恶意外战请求,默认为`*`


<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client="ca-pub-9420537843748923"
     data-ad-slot="8405286900"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
