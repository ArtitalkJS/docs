---
title: FAQ 常见问题及回答
sidebar: auto
---

## 🔨 常见问题

### 🔨 为什么我使用了 artitalk 的界面一直是加载动画，加载动画不会消失？

出现此问题的原因是 js 没有正常进行，建议检查一下是否使用文档中的每一步都正确进行。还不可以的话，请打开 F12 查看 console 的报错信息。

:::tip 🔨 报错信息
出现问题，无法正常使用的话建议大家 F12 查看 console 中的报错信息
:::

### 🔨 F12 中报错显示 `Uncaught (in promise) Error: Class or object doesn't exists.`

出现此问题的原因是在 leancloud 的存储中，你没有新建名为 `shuoshuo` 的 class

### 🔨 F12 中报错显示 `Uncaught TypeError: serverURL option is required for apps from CN region`

出现此问题的原因是你使用的是国内版的 leancloud 但是却没有填写 api 域名

### 🔨 为什么我确保所有设置都正常的，但是还是不能使用

此时建议 F12 通过审查元素查看一下 html 中 `<script>` 标签中的变量是否正常渲染，出现错误的话建议查看下面，已发现的 Bug

## 🔨 已发现的 Bug

* [x] css 并不能适配所有主题，请有问题的用户自己调整。
* [x] Hexo 可能会通过自带的渲染插件将 `"` 渲染成 `“` 导致 js 所需的参数出错。解决办法是在 hexo 根目录下的 `_config.yml` 文件中添加以下语句

```yaml
kramed:
  smartypants: false
```

* [x] 某些 Hexo 主题可能会对图片的链接进行处理。比如说将图片链接渲染出来的时候添加上 `a` 标签，导致所需参数赋值异常。目前想到的办法由两种
一：hexo 中自带的标签，标定不渲染的部分，将 `md` 文件中的 js 部分标中选择不渲染
二: 下载 js 后直接把赋值放在 js 中
注意，这两种办法都是可以直接解决上面两种 bug 的（引号和图片链接的渲染）

### 🔨 遇到问题自己排错的方法

1. 查看 js 和 css 是否成功引用。
2. 查看上面是否有你的报错
3. 查看 [成功案例](/links) 中与自己相同框架主题的小伙伴获取帮助。

如果以上都解决不了你的问题，请 [联系](/contact) 我。

<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-fb+5w+4e-db+86"
     data-ad-client="ca-pub-9420537843748923"
     data-ad-slot="8405286900"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
