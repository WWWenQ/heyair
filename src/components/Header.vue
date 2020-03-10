<!-- 头部组件 -->
<template>
  <nav class="nav-box" :class="showNavList?'dark':''">
    <div class="container1">
      <!-- web端 -->
      <div class="nav1">
        <!-- logo -->
        <router-link active-class="is-active" :to="headerList.logo.path" class="logo">HEY AIR</router-link>
        <!-- 导航 -->
        <ul>
          <li v-for="item in headerList.headerTitleList" :key="item.name">
            <router-link :to="item.path">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <!-- 移动端 -->
      <div class="small-nav1">
        <div class="topbar">
          <div @click="showNavList=!showNavList" class="icon">
            <!-- 点开导航栏前的图标 -->
            <span v-if="!showNavList" class="menu">
              <i></i>
            </span>
            <!-- 点开导航栏后的X号 -->
            <span v-else class="menu menu-x">
              <i></i>
            </span>
          </div>
          <!-- logo -->
          <router-link :to="headerList.logo.path" class="logo">HEY AIR</router-link>
        </div>
        <!-- 点开导航栏后展示 -->
        <div v-show="showNavList" class="topbar-toggle">
          <ul>
            <li
              @click="showNavList = false"
              v-for="item in headerList.headerTitleList"
              :key="item.name"
            >
              <router-link active-class="is-active" :to="item.path">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {
    headerList: Object
  },
  data() {
    return {
      showNavList: false
    };
  }
};
</script>
<style scoped>
.nav-box {
  width: 100%;
  height: 68px;
  background: #000;
  position: fixed;
  top: 0;
  z-index: 2;
}
@media only screen and (max-width: 748px) {
  .nav-box {
    height: 48px;
    z-index: 2;
  }
}
@media only screen and (max-width: 748px) {
  .dark {
    z-index: 99999;
  }
}
.container1 {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 68px;
  z-index: 9999;
  background: rgba(24, 24, 24, 1);
}
@media only screen and (max-width: 748px) {
  .nav-box .container1 {
    height: 48px;
    padding-left: 0;
    padding-right: 0;
    position: absolute;
    top: 0;
  }
}
.nav1 {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  position: relative;
  line-height: 16px;
  color: #fff;
}
@media only screen and (max-width: 748px) {
  .nav1 {
    display: none;
  }
}
.nav-box .nav1 .logo {
  float: left;
  font-weight: bold;
  font-size: 30px;
  width: 145px;
  height: 58px;
  overflow: hidden;
  text-indent: -999em;
  margin-top: 5px;
  background: url("../assets/img/logo.png") no-repeat center center;
  background-size: 100% 100%;
}
.nav1 a {
  display: inline-block;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
}
.nav1 a:hover {
  opacity: 0.5;
  transition: all 1s;
}
.nav1 ul {
  float: right;
  margin: 28px 0;
}
.nav1 ul li {
  float: left;
  margin: 0 20px;
}
.nav1 ul li a.isActive {
  color: #2393e9;
}
/* 移动端 */
@media only screen and (min-width: 748px) {
  .small-nav1 {
    display: none;
  }
}
.nav-box .small-nav1 {
  width: 100%;
  height: 48px;
  line-height: 48px;
  z-index: 9999;
  position: absolute;
}
.nav-box .small-nav1 .topbar {
  line-height: 48px;
  text-align: center;
  width: 100%;
  height: 48px;
  position: relative;
}
.nav-box .small-nav1 .topbar .menu {
  position: absolute;
  left: 12px;
  top: 10px;
  display: block;
  width: 20px;
  height: 20px;
  overflow: hidden;
  /* background-color: #fff; */
}
.nav-box .small-nav1 .topbar .menu i {
  position: relative;
  top: -18px;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 1px;
  font-style: normal;
  background-color: #fff;
  color: #fff;
}
.nav-box .small-nav1 .topbar .menu i:before,
.nav-box .small-nav1 .topbar .menu i:after {
  display: block;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #fff;
}
.nav-box .small-nav1 .topbar .menu i:before {
  position: absolute;
  top: -5px;
  left: 0;
}
.nav-box .small-nav1 .topbar .menu i:after {
  position: absolute;
  bottom: -5px;
  left: 0;
}
.nav-box .small-nav1 .topbar .logo {
  display: inline-block;
  width: 80px;
  height: 30px;
  margin: 9px auto;
  overflow: hidden;
  text-indent: -999em;
  color: #fff;
  font-size: 20px;
  background: url("../assets/img/logo.png") no-repeat center center;
  background-size: contain;
}
.nav-box .small-nav1 .topbar .menu-x i {
  height: 0;
}
.nav-box .small-nav1 .topbar .menu i:before,
.nav-box .small-nav1 .topbar .menu i:after {
  display: block;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #fff;
}
.nav-box .small-nav1 .topbar .menu-x i:before {
  position: absolute;
  top: -1px;
  left: 0;
  transform: rotate(-45deg);
}
.nav-box .small-nav1 .topbar .menu-x i:after {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(45deg);
}
/* 点开后的导航栏 */
.nav-box .small-nav1 .topbar-toggle {
  background: #000;
  transition: all 1s;
  height: 750px;
  width: 100%;
  z-index: 9999;
  position: absolute;
}
.nav-box .small-nav1 .topbar-toggle ul {
  padding: 20px 48px;
}
.nav-box .small-nav1 .topbar-toggle ul li:nth-child(1) {
  border-top: none;
}
.nav-box .small-nav1 .topbar-toggle ul li {
  border-top: 1px solid rgba(34, 34, 34, 1);
}
.nav-box .small-nav1 .topbar-toggle ul li a {
  color: #fff;
  /* display: block; */
  font-size: 14px;
  line-height: 42px;
  -webkit-transition: 0.5s ease;
  transition: 0.5s ease;
  font-weight: 300;
}
.nav1 .is-active {
  color: #2393e9;
}
.nav-box .small-nav1 .topbar-toggle ul li .is-active {
  color: #2393e9;
}
</style>