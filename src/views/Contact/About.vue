<!-- 关于我们 -->
<template>
  <div class="about">
    <div class="container">
      <div class="imgBox">
        <img src="@/assets/img/contact/aboutus.png" alt />
      </div>
      <div class="text">
        <p>这照片让我想起了小的时侯：广袤、烂漫的田野，清澈的小溪，永远抓不完的鱼儿，还有那些无忧无虑的玩耍……</p>
        <p>不知道什么时候，这一切已渐行渐远，当某天透过高楼的窗，望着窗外的雾霾，望见看不到田野的繁华，我开始想念那片麦田和里面奔跑的孩子。</p>
        <p>我想做点东西，为了重现小时侯的那片天空，为了让我们的生活更便捷的贴近自然，让我们的孩子象我们那时一样奔跑在田间溪畔……</p>
        <p>北京惠风天地科技有限公司专注校园新风净化机的研发、生产，与北京航空航天大学、清华大学、中国科学院同时开展深度技术合作，在噪音、温度控制、智能化等方面取得了突破性的成果，旗下HEY AIR惠风智能新风机已在全国众多学校得到广泛应用。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
<style scoped>
.about{
  width: 100%;
}
.container{
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width: 748px) {
  .container {
    width: 100%;
  }
}
.imgBox{
  margin: 0 auto;
}
.imgBox img{
  width: 100%;
  height: 100%;
}
.text{
  color: #333;
  font-size: 16px;
}
.text p{
  line-height: 2rem;
  margin-bottom: 15px;
  text-indent: 1rem;
}
</style>