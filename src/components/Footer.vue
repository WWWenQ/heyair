<!-- 页脚 -->
<template>
  <footer class="footer">
      <div class="container">
      <p>北京惠风天地科技有限公司@版权所有 2009-2018</p>
      <p>京ICP备17041574号</p>
      <p>Powered by ivsm 5.3.19</p>
      </div>
  </footer>
</template>

<script>
export default {
  name:'Footer' 
}
</script>
<style scoped>
.footer {
    width: 100%;
    height: auto;
    border-top: 1px solid #ccc;
    background-color: #4c4c4c;
    font-size: 12px;
}
@media only screen and (max-width: 748px){
.footer {
    width: 100%;
    font-size: 14px;
}
}
.footer .container {
    padding: 16px 0;
}
.footer p {
    height: auto;
    line-height: 28px;
    font-size: 14px;
    text-align: center;
    color: #888;
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
</style>