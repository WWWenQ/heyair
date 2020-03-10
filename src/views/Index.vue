<!-- 入口首页 -->
<template>
  <div class="index">
    <!-- 头部导航栏 -->
    <Header :headerList="headerList" />
    <!-- 中间路由 -->
    <router-view></router-view>
    <!-- 返回顶部 -->
    <GoTop/>
    <!-- 底部区域 -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import GoTop from "@/components/GoTop";
import Footer from "@/components/Footer";
export default {
  name: "Index",
  components: { Header, GoTop,Footer},
  data() {
    return {
      headerList: {
        logo: {
          path: "/"
        },
        headerTitleList: [
          {
            name: "HEYAIR IVS180WW",
            path: "/heyairivs180ww"
          },
          {
            name: "HEYAIR IVS600WA",
            path: "/heyairivs600wa"
          },
          {
            name: "校园云数据",
            path: "/school"
          },
          {
            name: "联系我们",
            path: "/contact"
          }
        ]
      }
    };
  },
};
</script>
