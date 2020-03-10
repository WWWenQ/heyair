<!-- 单个问题组件 -->
<template>
  <dl class="answer-item">
      <dt>Q：什么是新风系统？它能起到什么作用？</dt>
      <dd>A：新风系统是一套空气置换系统。它可以持续高效的对室内外空气进行 24 小时不间断循环，保证室内时时刻刻都有清新洁净的空气，也被称为“房屋的呼吸系统”。它能够高效的净化室内 PM2.5，降低室内甲醛含量，降低室内二氧化碳、tVOC 等气体浓度，能够有效清除室内异味。</dd>
  </dl>
</template>

<script>
export default {
  name:'AnswerItem' ,

  }
</script>
<style scoped>
.faq-main .answer-item {
    line-height: 40px;
    font-size: 16px;
    text-align: left;
    margin-bottom: 60px;
}
@media only screen and (max-width: 748px){
.faq-main .answer-item {
    line-height: 40px;
    font-size: 16px;
    text-align: left;
    margin-bottom: 60px;
}
}
.faq-main .answer-item dt {
    color: #333;
}
@media only screen and (max-width: 748px){
.faq-main .answer-item dt {
    color: #333;
}
}
.faq-main .answer-item dd {
    color: #666;
    font-weight: 300;
    text-align: justify;
}
@media only screen and (max-width: 748px){
.faq-main .answer-item dd {
    color: #666;
    font-weight: 300;
    text-align: justify;
}
}
</style>