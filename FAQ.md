---
title: FAQ 常见问题及回答
sidebar: auto
---

## 🔨 常见问题

### 🔨 为什么我使用了artitalk的界面一直是加载动画，加载动画不会消失？

出现此问题的原因是js没有正常进行，建议检查一下是否使用文档中的每一步都正确进行。还不可以的话，请打开F12查看console的报错信息。

:::  tip 🔨 报错信息
出现问题，无法正常使用的话建议大家F12查看console中的报错信息
:::

### 🔨 F12中报错显示`Uncaught (in promise) Error: Class or object doesn't exists.`

出现此问题的原因是在leancloud的存储中，你没有新建名为`shuoshuo`的class

### 🔨 F12中报错显示`Uncaught TypeError: serverURL option is required for apps from CN region`

出现此问题的原因是你使用的是国内版的leancloud但是却没有填写api域名

### 🔨 为什么我确保所有设置都正常的，但是还是不能使用

此时建议F12通过审查元素查看一下html中`<script>`标签中的变量是否正常渲染，出现错误的话建议查看下面，已发现的Bug


## 🔨 已发现的Bug
* [x] css并不能适配所有主题，请有问题的用户自己调整。
* [x] Hexo可能会通过自带的渲染插件将`"`渲染成`“`导致js所需的参数出错。解决办法是在hexo根目录下的`_config.yml`文件中添加以下语句
```
kramed:
  smartypants: false
```
* [x] 某些Hexo主题可能会对图片的链接进行处理。比如说将图片链接渲染出来的时候添加上`a`标签，导致所需参数赋值异常。目前想到的办法由两种
一：hexo中自带的标签，标定不渲染的部分，将`md`文件中的js部分标中选择不渲染
二: 下载js后直接把赋值放在js中
注意，这两种办法都是可以直接解决上面两种bug的（引号和图片链接的渲染）

### 🔨 遇到问题自己排错的方法
1. 查看js和css是否成功引用。
2. 查看上面是否有你的报错
3. 查看[成功案例](/links)中与自己相同框架主题的小伙伴获取帮助。

如果以上都解决不了你的问题，请[联系](/contact)我。

## 🚩 未来想要实现的功能
- [] 说说的点赞功能。

<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client="ca-pub-9420537843748923"
     data-ad-slot="8405286900"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>