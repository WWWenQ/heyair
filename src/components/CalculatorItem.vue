<!-- 计算器组件 -->
<template>
  <div class="calculator-item">
    <p>房间面积（m²）</p>
    <div class="item">
      <span class="item-t">&lt;60</span>
      <span class="item-c">
        <img src="../assets/img/180ww/calculator_reduce_no.png" alt />
        <img src="../assets/img/180ww/calculator_add.png" alt />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculatorItem"
};
</script>
<style scoped>
.calculator .calculator-content .content .calculator-item {
  width: 50%;
  padding-bottom: 64px;
}
@media only screen and (max-width: 748px) {
  .calculator .calculator-content .content .calculator-item {
    width: 100%;
    padding-bottom: 30px;
  }
}
.calculator .calculator-content .content .calculator-item p {
  font-size: 16px;
  font-family: PingFangSC-Regular;
  color: #333;
  line-height: 1;
  padding-top: 0px;
}
@media only screen and (max-width: 748px) {
  .calculator .calculator-content .content .calculator-item p {
    font-size: 12px;
  }
}
.calculator .calculator-content .content .calculator-item .item {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 24px;
  width: 60%;
  line-height: 1;
}
@media only screen and (max-width: 748px) {
  .calculator .calculator-content .content .calculator-item .item {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 12px;
    width: 100%;
    line-height: 1;
  }
}
.calculator .calculator-content .content .calculator-item .item .item-t {
  font-size: 24px;
  font-family: PingFangSC-Medium;
  color: #333;
  line-height: 1;
}
@media only screen and (max-width: 748px) {
  .calculator .calculator-content .content .calculator-item .item .item-t {
    font-size: 20px;
    font-family: PingFangSC-Medium;
    color: #333;
    line-height: 1;
  }
}
.calculator .calculator-content .content .calculator-item .item .item-c img {
  height: 32px;
  width: 32px;
  padding-right: 24px;
  margin-top: -10px;
  cursor: pointer;
}
@media only screen and (max-width: 748px) {
  .calculator .calculator-content .content .calculator-item .item .item-c img {
    height: 32px;
    width: 32px;
    padding-right: 20px;
    margin-top: -10px;
  }
}
</style>