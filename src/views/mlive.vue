<template>
  <div class="index"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.6)"
  >
    <div class="m_nav">
      <headerCon :isIndex='2'></headerCon>
    </div>
    <div data-v-3073f131="" class="line"></div>
    <div data-v-3073f131="" class="today" v-if="matchDeatil.masterTeamName">
      <div data-v-3073f131="" class="vs-wrap clearfix">
        <div data-v-3073f131="" class="vs">
          <img data-v-3073f131="" :src="matchDeatil.masterTeamLink.indexOf('zhibo8_default')>-1?defaultTeamImg:configData.baseUrl+matchDeatil.masterTeamLink" :onerror="defaultTeamImg" class="gameLogo1 homeTeam_img">
          <p data-v-3073f131="" class="onePlayer homeTeam">{{matchDeatil.masterTeamName}}</p>
        </div>
        <div data-v-3073f131="" class="vs">
          <p data-v-3073f131="" class="name1 matchTime_wap">{{matchDeatil.game}}{{!matchDeatil.rotation?"":matchDeatil.rotation}}</p>
          <p data-v-3073f131="" class="time1 matchTitle" style="margin-top: 40px;">{{matchDeatil.playDateStr}}</p>
        </div>
        <div data-v-3073f131="" class="vs"><img data-v-3073f131=""
            :src="matchDeatil.guestTeamLink.indexOf('zhibo8_default')>-1?defaultTeamImg:configData.baseUrl+matchDeatil.guestTeamLink"
            class="gameLogo2 visitingTeam_img" :onerror="defaultTeamImg">
          {{matchDeatil.guestTeamName}}
        </div>
      </div>
    </div>
      <videoCon :videoSrc="videoSrc" v-if="videoSrc" :isMob="!0"></videoCon>
      <div class="mDefaultCon" v-else>
        <img src="../assets/img/play.png" alt="">
      </div>

      <div data-v-3073f131="" class="info2">
        <div data-v-3073f131=""  class="liveshow">
          <span v-for="(item,i) in matchDeatil.lives" :key="i" >
            <a v-for="(signal,index) in item.signals" :key="index" href="javascript:;"
            class="toLive" @click="chooseSignal(signal.link,i,index)" :class="{'picked':chooseSingalData.f==i&&chooseSingalData.m==index}">{{signal.indexName}}</a>
          </span>
          <!-- <a v-for="(item,i) in matchDeatil.lives" :key="i" href="javascript:;"
            class="toLive" :class="{'picked':matchDeatil.lives.length==1}">信号{{i+1}}</a> -->
          <a data-v-3073f131="" v-for="(item,i) in bannerList" :key="i" :href="item.link" target="_blank" v-if="item.adKey=='MOBILE-LIVE-TOP'"
            class="toLive">{{item.message}}</a>
          </div></div>
      <!-- <bannerCon :bannerList="bannerList" :isMob='isMob'></bannerCon> -->
  </div>
</template>

<script>
  import '../assets/js/flexible.js'
  import headerCon from '../components/Header'
  import bannerCon from '../components/Banner'
  import videoCon from '../components/Video'
  export default {
    name: 'index',
    components: {
      headerCon,
      bannerCon,
      videoCon
    },
    data() {
      return {
        defaultTeamImg: 'this.src="' + require('../assets/img/defaultTeamImg.png') + '"',
        bannerList:[],
        isMob:!0,
        matchID:'',
        videoSrc:'',
        matchDeatil:{
          lives:[]
        },
        chooseSingalData:{
            f:0,
            m:0
        },
        loading:!0
      }
    },
    created() {
      this.matchID = this.$route.query.matchID;
      this.api.getMatchDetail({id:this.matchID}).then((resp)=>{
        console.log(resp.data)
        if(resp.status == 200){
          this.loading = false
          this.matchDeatil = resp.data;
          this.videoSrc = this.matchDeatil.lives[0].link;
        }
      })
      .catch((er)=>{
        console.log(er)
      })
      this.init();
    },
    methods: {
      chooseSignal(signal,topIndex,signalIndex){
          console.log(signal)
          this.chooseSingalData = {
              f:topIndex,
              m:signalIndex
          }
          this.videoSrc = signal;
        //   this.videoSrc = 'http://liveplay.oadql.cn/live/stream2237211.m3u8';
      },
      init(){
        this.api.getBanner().then((resp)=>{
        if(resp.status == 200){
          this.bannerList = resp.data;
        }
      })
      .catch((er)=>{
        console.log(er)
      })
      },
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url('../assets/css/index');
</style>
