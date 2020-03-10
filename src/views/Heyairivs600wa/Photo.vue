<!-- 图集 -->
<template>
  <div class="photo">
    <div class="section photobox clearfix">
      <div class="container fixed">
        <ul class="photo-list">
          <li @click="handlePic(index+1)" v-for="(item,index) in imgList.photo" :key="index">
            <div class="airmxpic">
              <img :src="item.src" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 蒙版层 -->
    <div v-if="showBigPic" class="mask" @click="showBigPic = false">
      <div class="container">
        <div
          class="imgContainer"
          :style="{backgroundImage:'url('+imgList.photo[currentPic-1].src+')'}"
        >
          <div class="left" :class="currentPic <=1?'hide':''" @click.stop="prevPic"></div>
          <div
            class="right"
            :class="currentPic >=(imgList.photo.length)?'hide':''"
            @click.stop="nextPic"
          ></div>
        </div>
        <div class="imgInfo clearfix">
          <div class="imgInfo-left">
            <p class="name">HEYAIR</p>
            <p class="number">{{currentPic}}/{{imgList.photo.length}}</p>
          </div>
          <div class="imgInfo-right" @click="showBigPic = false">
            <img src="../../assets/img/180ww/close.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "photo",
  data() {
    return {
      showBigPic: false,
      currentPic: 1,
      imgList: {
        photo: [
          { src: require("../../assets/img/600wa/photo-1.jpg") },
          { src: require("../../assets/img/600wa/photo-2.jpg") },
          { src: require("../../assets/img/600wa/photo-3.jpg") },
          { src: require("../../assets/img/600wa/photo-4.jpg") },
          { src: require("../../assets/img/600wa/photo-5.jpg") },
          { src: require("../../assets/img/600wa/photo-6.jpg") },
        ]
      }
    };
  },
  methods: {
    handlePic(index) {
      this.currentPic = index;
      this.showBigPic = true;
    },
    prevPic() {
      if (this.currentPic <= 1) {
        return;
      } else {
        this.currentPic--;
      }
    },
    nextPic() {
      if (this.currentPic >= this.imgList.photo.length) {
        return;
      } else {
        this.currentPic++;
      }
    }
  }
};
</script>
<style scoped>
.section {
  width: 100%;
  padding-top: 80px;
  text-align: center;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center bottom;
}
.photobox {
  min-height: 500px;
  padding-top: 0;
  padding-bottom: 50px;
}
@media only screen and (max-width: 748px) {
  .photobox {
    width: 100%;
    min-height: auto;
    padding-top: 0;
    padding-bottom: 50px;
    background-color: #f4f4f4;
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
  .photobox .container {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    box-sizing: border-box;
  }
}
.photo-list {
  text-align: center;
  margin-left: 95px;
}
@media only screen and (max-width: 748px) {
  .photo-list {
    text-align: center;
    padding-top: 1px;
    margin-left: 0px;
  }
}
.photo-list li {
  margin: 10px;
  background-color: #fff;
  float: left;
}
@media only screen and (max-width: 748px) {
  .photo-list li:nth-child(odd) {
    padding-right: 0;
  }
}
@media only screen and (max-width: 748px) {
  .photo-list li {
    display: block;
    float: left;
    width: 50%;
    height: 115px;
    margin: 1px 0;
    box-sizing: border-box;
    padding: 0 2px;
    background-color: #f4f4f4;
  }
}
.photo-list li .airmxpic {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  width: 320px;
  height: 210px;
  overflow: hidden;
}
@media only screen and (max-width: 748px) {
  .photo-list li .airmxpic:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  }
}
@media only screen and (max-width: 748px) {
  .photo-list li .airmxpic {
    background-color: #fff;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
.photo-list li .airmxpic:hover {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
}
.photo-list li .airmxpic img {
  width: 100%;
  height: 100%;
  display: block;
  transition: all 0.6s;
}
.photo-list li .airmxpic img:hover {
  transform: scale(1.1);
  cursor: pointer;
}
@media only screen and (max-width: 748px) {
  .photo-list li .airmxpic img {
    width: 100%;
    height: auto;
    display: block;
    transition: all 0.6s;
    max-width: 100%;
    min-width: 50%;
  }
}
/* 蒙版层 */
.mask {
  width: 100%;
  height: 1913px;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
}
.mask .container {
  width: 100%;
  position: absolute;
  left: 0;
  top: 50px;
  right: 0;
  bottom: 0;
  margin: 0;
  max-width: 1520px;
  margin: auto;
}
@media only screen and (max-width: 748px) {
  .mask .container {
   min-width: 100%;
  }
}
.mask .container .imgContainer {
  width: 858px;
  height: 554px;
  background-size: cover;
  margin: 0 auto;
}
@media only screen and (max-width: 748px) {
  .mask .container .imgContainer {
   width: 340px;
  height: 221px;
  background-size: cover;
  margin: 0 auto;
  }
}
.mask .container .imgContainer .left,
.right {
  display: inline-block;
  width: 50%;
  height: 100%;
  cursor: pointer;
  transition: opacity 0.6s;
  opacity: 0;
}
.mask .container .imgContainer .left:hover,
.right:hover {
  opacity: 1;
}
.mask .container .imgContainer .left {
  background: url("../../assets/img/180ww/prev.png") no-repeat no-repeat;
  background-position: left center;
}
.mask .container .imgContainer .right {
  background: url("../../assets/img/180ww/next.png") no-repeat no-repeat;
  background-position: right center;
}

.imgInfo {
  width: 858px;
  margin: 0 auto;
  padding-top: 5px;
}
@media only screen and (max-width: 748px) {
  .imgInfo {
   width: 100%;
  }
}
.imgInfo .imgInfo-left {
  float: left;
  padding-left: 3px;
}
.imgInfo-right {
  float: right;
  width: 30px;
  height: 30px;
  opacity: 1;
}
.imgInfo-right img {
  display: block;
  opacity: 0.6;
  transition: opacity 0.2s;
  cursor: pointer;
}
.imgInfo-right img:hover {
  opacity: 1;
}
p.name {
  font-size: 13px;
  font-weight: bold;
  line-height: 1em;
  color: #ccc;
}
p.number {
  font-size: 12px;
  color: #999999;
  letter-spacing: 0.3em;
}
.mask .container .imgContainer .hide {
  background: none;
}
</style>