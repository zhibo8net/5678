<template>
  <div :class="{'banner':!isMob,'mobBanner':isMob}" >
    <el-carousel :interval="3000" :indicator-position="isMob?'none':''" :arrow="isMob?'never':'hover'" v-if="bannerList.length>0">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index" v-if="(item.adKey=='INDEX-TOP'&&!isMob)||(item.adKey=='MOBILE-LIVE-BOTTOM'&&isMob)">
        <h3>
          <a :href="item.link" target="_blank">
            <img :src="item.image" alt="">
          </a></h3>
      </el-carousel-item>
    </el-carousel>
    <el-carousel :interval="3000" :indicator-position="isMob?'none':''" :arrow="isMob?'never':'hover'" v-else>
      <el-carousel-item>
        <h3>
          <a href="" target="_blank">
            <img src="../assets/img/banner1.png" alt="" v-if="!isMob">
            <img src="../assets/img/mbanner.png" alt="" v-else>
          </a></h3>
      </el-carousel-item>
    </el-carousel>



  </div>
</template>
<script>
import banner1 from '../assets/img/banner1.png'
import banner2 from '../assets/img/banner2.png'
import mbanner from '../assets/img/mbanner.png'
  export default {
    props: {
      // bannerList: {
      //   default: () => {
      //     return []
      //   },
      //   type: Array
      // },
      isMob:{
        default:false,
        type:Boolean
      }
    },
    name: 'banner',
    data() {
      return {
        bannerList:[{
        image: banner1,
        link:'https://www.yabox12.com/?i_code=39914',
        adKey:'INDEX-TOP'
    },{
        image: banner2,
        link:'https://aff.sports918.net/22324/1',
        adKey:'INDEX-TOP'

    },{
        image: mbanner,
        link:'https://www.yabox7.com/?i_code=39914',
        adKey:'MOBILE-LIVE-BOTTOM'
    }]
      }
    }
  }

</script>
<style scoped>
  img {
      width: 100%;
  }
</style>
