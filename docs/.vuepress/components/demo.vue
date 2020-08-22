<template>
  <div id="artitalk_main" />
</template>

<script>
export default {
  mounted() {
    function addScript(url) {
      var s = document.createElement("script");
      s.id = "at";
      url.indexOf("appID") == -1 ? (s.src = url) : (s.innerHTML = url);
      document.head.appendChild(s);
    }
    addScript(`
      var appID = 'ogP8qj3veMh0LFpFWMPOyF0X-MdYXbMMI';
      var appKEY = 'nHXLd3N3Jgh460t2iRQKWAtr';
      var placeholder1 = 'Demo页密码：123456';
      var atupload = 0;
      var per = 2;
      var slanguage = 'zh';
      var bgimg = 'https://cdn.jsdelivr.net/gh/drew233/cdn/20200409110727.webp';
      var atemoji_array = {
        huaji: 'https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/smilies/icon_huaji.gif',
        baiyan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png',
        bishi: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png',
        bizui: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png',
        chan: 'https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png'
      }
    `);
    addScript("https://cdn.jsdelivr.net/gh/ArtitalkJS/Artitalk@52373d8/dist/js/artitalk.min.js");
  },
  destroyed() {
    document
      .querySelectorAll("#at")
      .forEach(element => element.parentNode.removeChild(element));
    delete window.AV;
  }
};
</script>
