<!-- 产品图片展示 -->
<template>
  <div>
    <div
      class="section wrapper"
      v-for="item in products"
      :key="item.path"
      :style="{backgroundImage:'url('+item.url+')', backgroundSize:'contain'}"
    >
      <router-link :to="item.path" class="goto">
        进一步了解
        <i class="gotoIcon"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPIC",
  props: {
    products: Array
  }
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
.wrapper {
  min-height: 700px;
  background-color: #eee;
  background-size: cover;
  background-repeat: no-repeat no-repeat;
  /* background: url("../assets/img/shouye_2.jpg"); */
}
@media only screen and (max-width: 748px) {
  .wrapper {
    min-height: 420px;
    background-color: #fff;
    background-size: cover;
    height: 400px;
    background-repeat: no-repeat no-repeat;
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
.section a.goto {
  display: inline-block;
  font-size: 20px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(35, 147, 233, 1);
  line-height: 20px;
  letter-spacing: 1px;
  cursor: pointer;
}
@media only screen and (max-width: 748px) {
  .section a.goto {
    font-size: 16px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(35, 147, 233, 1);
    line-height: 14px;
    letter-spacing: 0px;
  }
}
img {
  width: 100%;
  height: 100%;
}
.gotoIcon {
  display: inline-block;
  width: 8px;
  height: 14px;
  background: url("../assets/img/gotoIcon.png") no-repeat center center;
  background-size: 8px 14px;
  line-height: 20px;
}
@media only screen and (max-width: 748px) {
  .gotoIcon {
    height: 10px;
    width: 6px;
    background-size: 6px 10px;
  }
}
</style>