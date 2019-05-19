<template>
  <div id="footer" :class="{'detail':isIndex=='0'}">
    <div class="fglo_bg">
      <div id="js_link" class="link fl">
        <div class="link_c">
          <!-- <div>
            <span style="color: rgb(136, 136, 136); margin-right: 20px;">友情链接</span>
            <a :href="item.link.indexOf('80zhibo')>-1||item.link.indexOf('zhibo8')>-1||item.link.indexOf ('mp.weixin.qq.com')>-1?'javascript:;':item.link" target="_blank"
            v-for="(item,i) in list" :key="i">{{item.name}}</a>
              </div> -->
        </div>
      </div>
      <div class="foot_global">
        <p>5678直播网所有视频数据均调用第三方资源，不提供任何视听上传服务，如有版权问题请联系我们。</p>
        <!-- <p>QQ客服 5583670</p> -->
        <p>Copyright @ 2019 5678直播网</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      isIndex: {
        default () {
          return 0
        },
        type: Number
      }
    },
    name: 'Footer',
    data(){
      return {
        list:[]
      }
    },
    created() {
      this.api.getFriendsList().then((resp)=>{
        if(resp.status == 200){
          this.list = resp.data;
        }
      })
      .catch((er)=>{
        console.log(er)
      });
    }
  }

</script>
<style lang="scss">
</style>
