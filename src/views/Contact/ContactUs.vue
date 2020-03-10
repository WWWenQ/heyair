<!-- 联系我们 -->
<template>
  <section class="section contactor clearfix">
    <div class="container clearfix">
      <div class="contact-h2">
        <p>联系我们</p>
      </div>
      <div class="contact clearfix">
        <div class="contactbox">
          <p class="h1">客服服务</p>
          <p>客户服务电话：010-82176718（周一至周日 9:00-24:00）</p>
          <p>客户服务邮箱：769950088@qq.com</p>
        </div>
        <div class="contactbox">
          <p class="h1">商务合作</p>
          <p>商务合作电话：010-82176718 按 5（周一至周日 9:00-24:00）</p>
          <p>商务合作邮箱：769950088@qq.com</p>
          <p>
            <img src="../../assets/img/contact/code.jpg" alt />
          </p>
        </div>
      </div>
      <div class="contact2">
        <div class="contactbox2">
          <p class="h1">线下代理合作</p>
          <p>线下代理合作邮箱：769950088@qq.com</p>
        </div>
        <div class="contactbox2">
          <p class="h1">线下体验 HEYAIR</p>
          <p>
            北京市海淀区大钟寺东路9号京仪科技大厦C座104室
            <a href>点击了解更多</a>
          </p>
        </div>
        <div class="contactbox2">
          <p class="h1">公司地址</p>
          <p>北京市海淀区大钟寺东路9号京仪科技大厦C座104室</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactUs"
};
</script>
<style scoped>
.contactor {
  padding-top: 60px;
}
@media only screen and (max-width: 748px) {
  .contactor {
    padding-top: 30px;
  }
}

.contactor .container {
  width: 1200px;
}
@media only screen and (max-width: 748px) {
  .contactor .container {
    width: 100%;
  }
}

.container {
  width: 100%;
  max-width: 1200px;
  min-width: 748px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
}
@media only screen and (max-width: 748px) {
  .container {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
  }
}

.section p {
  font-size: 16px;
  line-height: 1.5;
  font-weight: 300;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #666;
  text-align: center;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
}
.contactor .container .contact-h2 p {
  padding: 0;
  margin-bottom: 40px;
  font-family: PingFangSC-Medium;
  font-size: 36px;
  text-align: left;
  color: #333333;
}
.contactor .container .contact {
  position: relative;
  float: left;
  height: 460px;
  width: 600px;
  padding-bottom: 40px;
}
@media only screen and (max-width: 748px) {
  .contactor .container .contact {
    position: relative;
    float: left;
    height: 450px;
    width: auto;
    padding-bottom: 40px;
  }
}
.contactor .container .contact .contactbox {
  position: relative;
  float: left;
  height: 132px;
  width: 600px;
  font-size: 26px;
  line-height: 2;
  padding-bottom: 40px;
  margin-right: 0px;
}
@media only screen and (max-width: 748px) {
  .contactor .container .contact .contactbox {
    position: relative;
    float: left;
    height: 132px;
    width: auto;
    font-size: 26px;
    line-height: 1.5;
    padding-bottom: 40px;
    margin-right: 0px;
  }
}
.contactor .container .contact .contactbox .h1 {
  font-size: 16px;
  line-height: 2;
  font-family: PingFangSC-Regular;
  color: #333333;
}
@media only screen and (max-width: 748px) {
  .contactor .container .contact .contactbox .h1 {
    font-size: 16px;
    line-height: 1.5;
    font-family: PingFangSC-Regular;
    color: #333333;
  }
}
.contactor .container .contact .contactbox p {
  margin-bottom: 20px;
  text-align: left;
  font-weight: 300;
}
@media only screen and (max-width: 748px) {
  .contactor .container .contact .contactbox p {
    margin-bottom: 20px;
    text-align: left;
    font-weight: 300;
  }
}
.contactor .container .contact .contactbox img {
  width: 120px;
  height: 120px;
}
@media only screen and (max-width: 748px) {
  .contactor .container .contact .contactbox img {
    width: 120px;
    height: 120px;
  }
}
.contactor .container .contact2 {
  position: relative;
  float: left;
  height: 460px;
  width: 600px;
  padding-bottom: 40px;
}
@media only screen and (max-width: 748px) {
  .contactor .container .contact2 {
    position: relative;
    float: left;
    height: 300px;
    width: auto;
    padding-bottom: 40px;
  }
}
.contactor .container .contact2 .contactbox2 {
  position: relative;
  float: left;
  height: 132px;
  width: 600px;
  font-size: 26px;
  line-height: 2;
  padding-bottom: 40px;
}
@media only screen and (max-width: 748px) {
  .contactor .container .contact2 .contactbox2 {
    position: relative;
    float: left;
    height: auto;
    width: auto;
    font-size: 26px;
    line-height: 1.5;
    padding-bottom: 40px;
  }
}
.contactor .container .contact2 .contactbox2 .h1 {
  font-size: 16px;
  line-height: 2;
  font-family: PingFangSC-Regular;
  color: #333333;
}
@media only screen and (max-width: 748px) {
  .contactor .container .contact2 .contactbox2 .h1 {
    font-size: 16px;
    line-height: 1.5;
    font-family: PingFangSC-Regular;
    color: #333333;
  }
}
.contactor .container .contact2 .contactbox2 p {
  margin-bottom: 20px;
  text-align: left;
  font-weight: 300;
}
@media only screen and (max-width: 748px) {
  .contactor .container .contact2 .contactbox2 p {
    margin-bottom: 0px;
    text-align: left;
    font-weight: 300;
    line-height: 1.5;
  }
}
.contactor .container .contact2 .contactbox2 p a {
  font-size: 16px;
  font-family: PingFangSC-Thin;
  color: #1996f1;
  cursor: pointer;
}
</style>