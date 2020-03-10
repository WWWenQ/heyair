<!-- 联系我们 -->
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
  name: "School",
  components: { SubNav },

  data() {
    return {
      titleList:{
        logoName: "联系我们",
        subNavList:[
        {
          title:"联系我们",
          path:"/contact/contactus"
        },
        {
          title:"技术支持",
          path:"/contact/support"
        },
        {
          title:"关于我们",
          path:"/contact/about"
        }
      ]
    }
    }
  },
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