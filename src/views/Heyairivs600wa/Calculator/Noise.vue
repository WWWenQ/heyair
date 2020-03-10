<!-- 噪声 -->
<template>
  <div class="calculator-content">
    <p class="noise">
      <span id="noiseValue">22.0</span>
      分贝
    </p>
    <p id="noiseDesc">0类噪声，疗养院，高级别墅区环境标准</p>
    <div class="content">
      <CalculatorItem />
      <CalculatorItem />
      <CalculatorItem />
      <CalculatorItem />
      <p class="boot_1">通过此计算器，可以了解 HEYAIR IVS600WA 运行时的噪声。</p>
    </div>
  </div>
</template>

<script>
import CalculatorItem from "../../../components/CalculatorItem";
export default {
  name: "Noise",
  components: { CalculatorItem }
};
</script>
<style scoped>
.calculator .calculator-content {
  padding-top: 64px;
}
@media only screen and (max-width: 748px) {
  .calculator .calculator-content {
    padding-top: 24px;
  }
}
.calculator .calculator-content .noise {
  font-size: 18px;
  font-family: PingFangSC-Medium;
  color: #333333;
  line-height: 1;
}
@media only screen and (max-width: 748px) {
  .calculator .calculator-content .noise {
    font-size: 12px;
  }
}
.calculator .calculator-content .noise span {
  font-size: 72px;
  font-family: PingFangSC-Medium;
  color: #333333;
  line-height: 1;
}
@media only screen and (max-width: 748px) {
  .calculator .calculator-content .noise span {
    font-size: 60px;
    color: #333333;
  }
}
.calculator .calculator-content p {
  font-size: 16px;
  font-family: PingFangSC-Regular;
  color: #666666;
  line-height: 1;
  padding-top: 12px;
}
@media only screen and (max-width: 748px) {
  .calculator .calculator-content p {
    font-size: 12px;
  }
}
.calculator .calculator-content .content {
  padding-top: 64px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media only screen and (max-width: 748px) {
  .calculator .calculator-content .content {
    padding-top: 32px;
  }
}
.calculator .calculator-content .boot_1 {
  margin-top: -23px;
  font-size: 16px;
  font-family: PingFangSC-Regular;
  color: #666;
  line-height: 1;
  padding-top: 0px;
}
@media only screen and (max-width: 748px) {
  .calculator .calculator-content .boot_1 {
    margin-top: 2px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    color: #999;
    line-height: 1.5;
    padding-top: 0px;
  }
}
</style>