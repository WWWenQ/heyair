<!-- Heyair ivs180ww -->
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
  name: "HEYAIRIVS180WW",
  components: { SubNav },

  data() {
    return {
      titleList: {
        logoName: "HEYAIRIVS180WW",
        subNavList: [
          {
            title: "概览",
            path: "/heyairivs180ww/overview"
          },
          {
            title: "图集",
            path: "/heyairivs180ww/photo"
          },
          {
            title: "滤芯",
            path: "/heyairivs180ww/filter"
          },
          {
            title: "微信操控",
            path: "/heyairivs180ww/wechatcontrol"
          },
          {
            title: "技术参数",
            path: "/heyairivs180ww/parameter"
          },
          {
            title: "计算器",
            path: "/heyairivs180ww/calculator"
          },
          {
            title: "常见问题",
            path: "/heyairivs180ww/faq"
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