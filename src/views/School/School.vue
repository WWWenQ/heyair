<!-- 校园云数据 -->
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
        logoName: "校园云数据",
        subNavList:[
        {
          title:"概览",
          path:"/school/overview"
        },
        {
          title:"家长端",
          path:"/school/parents"
        },
        {
          title:"教室端",
          path:"/school/room"
        },
        {
          title:"管理端",
          path:"/school/manage"
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