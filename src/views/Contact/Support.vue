<!-- 技术支持 -->
<template>
  <section class="section faq">
    <div class="container clearfix">
      <header class="faq-head">
        <h2>技术支持</h2>
      </header>
      <aside class="faq-aside">
        <ul>
          <li  class="question-item">
            <router-link active-class="is-active" to="/heyairivs180ww/faq/faqsystem" class="curr">新风系统</router-link>
          </li>
          <li  class="question-item">
            <router-link active-class="is-active" to="/heyairivs180ww/faq/faqproduct" class="curr">HEYAIR</router-link>
          </li>
          <li  class="question-item">
            <router-link active-class="is-active" to="/heyairivs180ww/faq/faqdelivery" class="curr">送货及安装</router-link>
          </li>
          <li  class="question-item">
            <router-link active-class="is-active" to="/heyairivs180ww/faq/faqservice" class="curr">保修服务及退换货标准</router-link>
          </li>
        </ul>
      </aside>
      <!-- 路由 -->
      <div class="faq-main">
        <div class="faq-con">
          <router-view></router-view>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script>
export default {
  name: "Faq"
};
</script>
<style scoped>
.faq {
  padding-top: 60px;
}
@media only screen and (max-width: 748px){
.faq {
    padding-top: 30px;
}
}
@media only screen and (max-width: 748px){
.section {
    padding: 50px 0;
}
}
.faq .container {
  width: 1200px;
}
@media only screen and (max-width: 748px){
.faq .container {
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
@media only screen and (max-width: 748px){
.container {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    box-sizing: border-box;
    padding-left: 15px;
    padding-right: 15px;
}
}
.faq-head {
  padding: 0;
  margin-bottom: 40px;
}
@media only screen and (max-width: 748px){
.faq-head {
    padding: 0;
    margin-bottom: 0px;
}
}
.faq-head h2 {
  padding: 0 20px;
  font-size: 36px;
  line-height: 2;
  text-align: left;
}
@media only screen and (max-width: 748px){
.faq-head h2 {
    padding: 0;
    font-size: 36px;
    line-height: 2;
    text-align: left;
}
}
.section h2 {
  font-size: 32px;
  line-height: 1.25;
  font-weight: 500;
  letter-spacing: 0.011em;
  color: #333;
  margin-bottom: 30px;
}
.faq-aside {
  width: 280px;
  float: left;
  margin-left: 20px;
  box-sizing: border-box;
}
@media only screen and (max-width: 748px){
.faq-aside {
    width: 100%;
    float: left;
    margin-left: 0;
    box-sizing: border-box;
}
}
.faq-aside .question-item {
  width: 100%;
  font-size: 20px;
  line-height: 1.5;
  margin: 6px 0 18px 0;
  color: #666;
  text-align: left;
}
@media only screen and (max-width: 748px){
.faq-aside .question-item {
    width: 100%;
    font-size: 20px;
    line-height: 1.5;
    margin: 6px 0 18px 0;
    color: #666;
    text-align: left;
}
}
.faq-aside .question-item .is-active {
  color: #2393e9;
}
.faq-aside .question-item a {
  color: #666;
}
.faq-main {
    width: 880px;
    float: right;
    margin-right: 20px;
    box-sizing: border-box;
    margin-bottom: 80px;
}
@media only screen and (max-width: 748px){
.faq-main {
    width: 100%;
    float: right;
    box-sizing: border-box;
    margin-bottom: 60px;
    margin-right: 0;
    padding: 40px 0;
}
}
</style>