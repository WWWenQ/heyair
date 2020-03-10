<!-- 计算器 -->
<template>
  <section class="calculator">
    <div class="container">
      <h2 class="calculator-head">惠风 HEYAIR 计算器</h2>
      <nav class="calculator-nav">
        <ul class="nav clearfix">
          <li active-class="is-active">
            <router-link to="/heyairivs180ww/calculator/noise"><span>噪声</span></router-link>
          </li>
          <li active-class="is-active">
            <router-link  to="/heyairivs180ww/calculator/energy"><span>耗能</span></router-link>
          </li >
          <li active-class="is-active">
            <router-link to="/heyairivs180ww/calculator/temperature"><span>温度平衡</span></router-link>
          </li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name:'Calculator' ,
}
</script>
<style scoped>
.calculator {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 50px;
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
.calculator .calculator-head {
    font-family: PingFangSC-Medium;
    font-size: 36px;
    color: #333333;
    line-height: 1;
    margin-top: 60px;
}
@media only screen and (max-width: 748px){
.calculator .calculator-head {
    font-size: 20px;
    margin-top: 23px;
}
}
.calculator-nav {
    height: auto;
    display: block;
    padding-top: 60px;
    line-height: 1;
}
@media only screen and (max-width: 748px){
.calculator-nav {
    padding-top: 24px;
}
}
.calculator-nav .nav li {
    float: left;
    margin-right: 104px;
    padding: 0px 0px 0px 0px;
    text-align: left;
    line-height: 0;
}
@media only screen and (max-width: 748px){
.calculator-nav .nav li {
    float: left;
    margin-right: 49px;
}
}
.calculator-nav .nav li a {
    box-sizing: border-box;
    text-align: center;
    width: 100px;
    height: 50px;
    color: #333333;
    font-size: 20px;
    font-family: PingFangSC-Regular;
    padding: 0px 0px 0px 0px;
    background: #FFF;
    text-decoration: none;
    cursor: pointer;
    line-height: 1;
}
@media only screen and (max-width: 748px){
.calculator-nav .nav li a {
    font-size: 16px;
}
}
.calculator-nav .nav span {
    padding-bottom: 3px;
    border-bottom: 4px solid #FFF;
    line-height: 1;
}
.is-active{
  border-bottom: 4px solid rgb(21, 145, 236);
}
</style>