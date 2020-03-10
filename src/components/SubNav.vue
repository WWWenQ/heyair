<!-- 产品信息导航栏 -->
<template>
  <nav class="nav-box">
    <div class="container">
      <!-- 电脑端 -->
      <div class="nav">
        <a class="logo">{{titleList.logoName}}</a>
        <ul>
          <li v-for="item in titleList.subNavList" :key="item.title">
            <router-link active-class="is-active" :to="item.path">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <!-- 移动端 -->
      <div class="small-nav">
        <nav class="topbar">
          <a href class="logo">{{titleList.logoName}}</a>
          <div class="menu" @click="showList=!showList">
            <i v-if="!showList" class="down"></i>
            <i v-else class="up"></i>
          </div>
        </nav>
        <div v-if="showList" class="topbar-toggle">
          <ul>
            <li @click="showList=false" v-for="item in titleList.subNavList" :key="item.title">
              <router-link active-class="is-active"  :to="item.path">{{item.title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SubNav",
  props: {
    titleList: Object
  },
  data() {
    return {
      showList: false
    };
  }
};
</script>
<style scoped>
.nav-box {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  height: 68px;
  background: #000;
  z-index: 999;
}
@media only screen and (max-width: 748px) {
  .nav-box {
    height: 48px;
    background-color: transparent;
  }
}
@media only screen and (max-width: 748px) {
  .nav {
    display: none;
  }
}

.nav-box .container {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 68px;
  top: 16;
  z-index: 99;
  background: rgba(32, 32, 32, 1);
}
@media only screen and (max-width: 748px) {
  .nav-box .container {
    height: 48px;
    padding-left: 0;
    padding-right: 0;
    box-sizing: border-box;
  }
}
.nav-box .nav {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  position: relative;
  line-height: 24px;
  color: #fff;
}
.nav-box .nav .logo {
  float: left;
  font-weight: 400;
  font-size: 24px;
  width: 220px;
  height: 24px;
  overflow: hidden;
  margin: 24px 20px 0 0;

  /* background: url(/static/img/logo.png) no-repeat center center; */
  /* background-size: 100% 100%; */
}
.nav-box .nav a:hover {
  opacity: 0.5;
  transition: all 1s;
}
.nav-box .nav > ul {
  float: right;
  margin: 28px 0;
}
.nav-box .nav > ul > li {
  float: left;
  margin: -5px 20px;
}
/* 手机端 */

.nav-box .small-nav {
  width: 100%;
  height: 48px;
  line-height: 48px;
  z-index: 999;
  display: none;
}
@media only screen and (max-width: 748px) {
  .nav-box .container .small-nav {
   display: block;
  }
}
.nav-box .small-nav .topbar {
  line-height: 48px;
  text-align: center;
  width: 100%;
  height: 48px;
  position: relative;
}
.nav-box .small-nav .topbar .menu {
  position: absolute;
  left: 48%;
  top: 14px;
  width: 20px;
  height: 20px;
}
.menu .down {
  display: block;
  width: 20px;
  height: 20px;
  background: url("../assets/img/arrow-down.png") no-repeat 50% 50%;
  background-size: 12px 6px;
}
.menu .up {
  display: block;
  width: 20px;
  height: 20px;
  background: url("../assets/img/arrow-up.png") no-repeat 50% 50%;
  background-size: 12px 6px;
}
.nav-box .small-nav .topbar .logo {
  position: absolute;
  left: 24px;
  display: inline-block;
  width: 130px;
  overflow: hidden;
  color: #fff;
  font-size: 14px;
  background-size: contain;
  text-align: left;
}
.nav-box .small-nav .topbar .menu {
  position: absolute;
  left: 48%;
  top: 14px;
  width: 20px;
  height: 20px;
}
.nav-box .small-nav .topbar-toggle {
  background: #000;
  height: 750px;
  overflow: hidden;
  transition: all 1s;
}
.nav-box .small-nav .topbar-toggle ul {
  padding: 20px 24px;
}
.nav-box .small-nav .topbar-toggle ul li {
  border-top: 1px solid rgba(34, 34, 34, 1);
}
.nav-box .small-nav .topbar-toggle ul li:nth-child(1) {
  border-top: none;
}
.nav-box .small-nav .topbar-toggle ul li a {
  color: #fff;
  /* display: block; */
  font-size: 14px;
  line-height: 42px;
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;
  font-weight: 300;
}
.is-active{
  color: #2393e9;
}
.nav-box .small-nav .topbar-toggle ul li .is-active{
  color: #2393e9;
}
</style>