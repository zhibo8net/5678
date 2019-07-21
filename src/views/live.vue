<template>
  <div class="live">
    <headerCon></headerCon>
    <div class="today" style="margin-top: 90px;">
      <div class="info">
        <img
          src="data:image/jpeg;base64,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"
          width="781px" alt="" class="bg">

        <a href="index.html" class="back"></a>
        <div class="infoWrap">
          <div class="list1">
            <img :src="matchDeatil.masterTeamLink.indexOf('zhibo8_default')>-1?defaultTeamImg:configData.baseUrl+matchDeatil.masterTeamLink" class="first homeTeam_img" :onerror="defaultTeamImg">
            <span class="name1 homeTeam">{{matchDeatil.masterTeamName}}</span>
          </div>
          <div class="list2">
            <p class="gameName matchTitle">{{matchDeatil.game}}</p>
            <p class="gameTime matchTime_pc">{{matchDeatil.playDateStr}}</p>
          </div>
          <div class="list3">
            <img :src="matchDeatil.guestTeamLink.indexOf('zhibo8_default')>-1?defaultTeamImg:configData.baseUrl+matchDeatil.guestTeamLink" class="second visitingTeam_img" :onerror="defaultTeamImg">
            <span class="name2 visitingTeam">{{matchDeatil.guestTeamName}}</span>
          </div>
        </div>
      </div>
      <div class="info2">
        <div class="liveshow">
          <span v-for="(item,i) in matchDeatil.lives" :key="i">
            <a v-for="(signal,index) in item.signals" :key="index" href="javascript:;" class="toLive"
              @click="chooseSignal(signal.link,i,index)"
              :class="{'picked':chooseSingalData.f==i&&chooseSingalData.m==index}">{{signal.indexName}}</a>
          </span>
          <a v-for="(item,i) in bannerList" :key="i" :href="item.link" target="_blank"
            class="toLive">{{item.message}}</a>
          <!-- <a href="http://www.yabet1567.com/" target="_blank" class="toLive">安全购彩</a> -->
        </div>
      </div>
      <videoCon :videoSrc="videoSrc" v-if="videoSrc"></videoCon>
      <div class="defaultCon" v-else>
        <img src="../assets/img/play.png" alt="">
      </div>
      <!---->
      <div style="margin: 0px auto; width: 780px;">
        <a href="https://www.yabox7.com/?i_code=39914" target="_blank">
          <img width="780px" height="80px" src="../assets/img/img1.png" alt="" style="margin-top: 10px;">
        </a>
      </div>
    </div>
    <footerCon :defaultStyle="1"></footerCon>
  </div>
</template>
<script>
  import headerCon from '../components/Header'
  import footerCon from '../components/Footer'
  import videoCon from '../components/Video'
  export default {
    name: 'live',
    components: {
      headerCon,
      footerCon,
      videoCon
    },
    data() {
      return {
        defaultTeamImg: 'this.src="' + require('../assets/img/defaultTeamImg.png') + '"',
        matchID: '',
        matchDeatil: {
          lives: []
        },
        bannerList: [],
        videoSrc: '',
        chooseSingalData: {
          f: 0,
          m: 0
        }
      }
    },
    methods: {
      init() {
        this.api.getBanner().then((resp) => {
            if (resp.status == 200) {
              let arr = [];
              resp.data.map((data) => {
                if (data.adKey == 'LIVE-TOP') {
                  arr.push(data);
                }
              });
              this.bannerList = arr;
            }
          })
          .catch((er) => {
            console.log(er)
          })
      },
      chooseSignal(signal, topIndex, signalIndex) {
        console.log(signal)
        this.videoSrc = '';
        this.chooseSingalData = {
          f: topIndex,
          m: signalIndex
        }
        this.$nextTick(() => {
          this.videoSrc = signal;
        })
        //   this.videoSrc = 'http://liveplay.oadql.cn/live/stream2237211.m3u8';
      }
    },
    mounted() {
      this.matchID = this.$route.query.matchID;
      this.api.getMatchDetail({
          id: this.matchID
        }).then((resp) => {
          console.log(resp.data)
          if (resp.status == 200) {
            this.matchDeatil = resp.data;
            this.videoSrc = this.matchDeatil.lives[0].link;
          }
        })
        .catch((er) => {
          console.log(er)
        })
      this.init();
    }
  }

</script>
<style lang="css">
  @import url('../assets/css/index');

</style>
