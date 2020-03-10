<!-- Heyair ivs600wa -->
<template>
  <div class="wrapper">
    <!-- 导航栏 -->
    <SubNav :titleList="titleList" />
    <!-- view -->
    <router-view></router-view>
  </div>
</template>

<script>
import SubNav from "@/components/SubNav";
export default {
  name: "Heyairivs600wa",
  components: { SubNav },

  data() {
    return {
      titleList: {
        logoName: "HEYAIRIVS600WA",
        subNavList: [
          {
            title: "概览",
            path: "/heyairivs600wa/overview"
          },
          {
            title: "图集",
            path: "/heyairivs600wa/photo"
          },
          {
            title: "滤芯",
            path: "/heyairivs600wa/filter"
          },
          {
            title: "微信操控",
            path: "/heyairivs600wa/wechatcontrol"
          },
          {
            title: "技术参数",
            path: "/heyairivs600wa/parameter"
          },
          {
            title: "计算器",
            path: "/heyairivs600wa/calculator"
          },
          {
            title: "常见问题",
            path: "/heyairivs600wa/faq"
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
.wrapper {
  padding-top: 68px;
}
@media only screen and (max-width: 748px) {
  .wrapper {
    padding-top: 48px;
    box-sizing: border-box;
  }
}
</style>