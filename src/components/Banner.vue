<!-- Banner图 -->
<template>
  <section class="section banner">
    <div class="bannerDesc">
      <p>研究表明，</p>
      <p>儿童长期处在高于1000ppm的环境中，</p>
      <p>将对智力发育产生影响</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Banner"
};
</script>
<style scoped>
.section {
  width: 100%;
  text-align: center;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.banner {
  display: flex;
  align-items: center;
  min-height: 640px;
  background-color: #fff;
  background-image: url("../assets/img/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat no-repeat;
}

@media only screen and (max-width: 748px) {
  .section {
    padding: 50px 0;
  }
}
@media only screen and (max-width: 748px) {
  .banner {
    min-height: 460px;
    background-color: #fff;
    background-image: url("../assets/img/banner-small.jpg");
    background-size: cover;
    background-repeat: no-repeat no-repeat;
    padding-top: 50px;
  }
}
.bannerDesc {
  margin-left: 10%;
  margin-right: 40%;
}

@media only screen and (max-width: 748px) {
  .bannerDesc {
    margin-top: 50%;
    margin-left: auto;
    margin-right: auto;
  }
}
.bannerDesc p {
  font-size: 36px;
  font-family: PingFangSC-Light;
  font-weight: 400;
  color: #fff;
  letter-spacing: 1px;
  text-align: left;
}
@media only screen and (max-width: 748px) {
  .bannerDesc p {
    font-size: 18px;
    text-align: center;
    color: #eee;
    font-weight: bold;
    line-height: 35px;
  }
}
</style>