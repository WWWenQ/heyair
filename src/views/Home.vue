<!-- 首页中间展示区域 -->
<template>
  <div class="home">
    <!-- banner图片 -->
    <Banner/>
    <!-- 商品展示区域 -->
    <ProductPic :products="products"/>
  </div>
</template>

<script>
import Banner from "@/components/Banner"
import ProductPic from "@/components/ProductPic"
export default {
  name:'Home' ,
  components: {Banner,ProductPic},
  data () {
    return {
      products:[
          {
            path:"/heyairivs180ww",
            url:require('@/assets/img/ivs180ww-main.jpg')
          },
          {
            path:"/heyairivs600wa",
            url:require('@/assets/img/ivs600wa-main.jpg')
          }
      ]
      }
    }
  }
</script>
<style scoped>
 .home{
   padding-top: 68px;
 }
 @media only screen and (max-width: 748px) {
  .home {
    padding-top: 48px;
  }
}
</style>