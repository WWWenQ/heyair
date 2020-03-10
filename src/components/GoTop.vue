<!-- 返回顶部组件 -->
<template>
  <div v-if="btnFlag" @click="backTop" class="gotop"></div>
</template>
<script>
export default {
  name: "GoTop",
  data() {
    return {
      btnFlag: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    // 点击图片回到顶部
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 60) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  }
};
</script>
<style scoped>
.gotop {
  width: 54px;
  height: 54px;
  background: url(../assets/img/gotop.png);
  background-position: center center;
  border-radius: 50%;
  background-size: cover;
  position: fixed;
  right: 20px;
  bottom: 90px;
  z-index: 998;
}
.gotop:hover {
  background: url(../assets/img/gotop_hover.png);
  background-position: center center;
  background-size: cover;
}
</style>
