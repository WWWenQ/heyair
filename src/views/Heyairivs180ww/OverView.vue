<!-- 概览 -->
<template>
  <div class="overview">
    <div class="container">
      <ul>
        <li v-for="item in imgList" :key="item.src">
          <img :src="item.src" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "overView",
  data() {
    return {
      imgList: [
        { src: require("../../assets/img/180ww/overview-1.jpg") },
        { src: require("../../assets/img/180ww/overview-2.jpg") },
        { src: require("../../assets/img/180ww/overview-3.jpg") },
        { src: require("../../assets/img/180ww/overview-4.jpg") },
        { src: require("../../assets/img/180ww/overview-5.jpg") },
        { src: require("../../assets/img/180ww/overview-6.jpg") },
        { src: require("../../assets/img/180ww/overview-7.jpg") },
        { src: require("../../assets/img/180ww/overview-8.jpg") }
      ]
    };
  }
};
</script>
<style scoped>
.overview {
  width: 100%;
  display: flex;
  position: relative;
  top: -2px;
}
.container {
  margin: 0 auto;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0;
}
</style>