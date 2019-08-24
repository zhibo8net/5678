<template>
    <div class="liveCotainer" :data-v-3073f131="isMob">
        <div class="guangg" :data-v-3073f131="isMob" style="display: none;">
          <div :data-v-3073f131="isMob" class="timeOff">10 秒钟后自动关闭 x</div>
        </div>
        <div :data-v-3073f131="isMob" id="video" class="video">
            <!-- <div class="ckplayerchcibnbibhcozinnmu" style="background-color: rgb(0, 0, 0); width: 100%; height: 100%;"></div> -->
            <video id="my-video" class="video-js" controls autoplay="autoplay" preload="auto" width="780" height="454" poster="m.jpg" data-setup="{}">
                <source :src="videoSrc" type="application/x-mpegURL">
                <p class="vjs-no-js"> To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a> </p>
            </video>
        </div>
        <p v-show="false">{{videoSrc}}</p>
    </div>
</template>
<script>
export default {
    name:'Video',
    props:{
        videoSrc:{
            default:'',
            type:String,
            required:true
        },
        isMob:{
            default:false,
            type:Boolean
        }
    },
    data(){
        return{
            player:'',
            videoObject : {
                container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
                variable: 'player', //该属性必需设置，值等于下面的new chplayer()的对象
                loaded: 'loadedHandler', //监听播放器加载成功
                autoplay: true, //自动播放
                live: true,
                width: 16,
                height: 9,
                video:''  //视频地址
            }
        }
    },
    methods:{
        initPlay(src){
            // this.videoObject.video = src || this.videoSrc.replace(/(^\s*)|(\s*$)/g, ""); //视频地址
            // var player = new ckplayer(this.videoObject);
			void 0 != src && null != src && "" != src || (this.videoSrc.startsWith("https://") || this.videoSrc.indexOf(".m3u8") > -1 && this.videoSrc.indexOf("liveplay.oadql.cn") < 0 ? this.player = new this.DPlayer({
                        container: document.getElementById("video"),
                        video: {
                            url: this.videoSrc.replace(/(^\s*)|(\s*$)/g, "")
                        },
                        preload: "auto",
                        autoplay: !0,
                        live: !0,
                        lang: "zh-cn"
                    }) : (this.videoObject.video = src || this.videoSrc.replace(/(^\s*)|(\s*$)/g, ""),
                    this.player = new ckplayer(this.videoObject)))
        }
    },
    mounted(){
        this.initPlay();
    },
    watch:{
        videoSrc(now,old){
            this.initPlay();
        }
    }
}
</script>
<style>
    .my-video-dimensions {
        width: 100%;
        height: 100%;
    }
    .video-js .vjs-big-play-button {
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;

    }
    .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-modal-dialog, .vjs-button>.vjs-icon-placeholder:before, .vjs-modal-dialog .vjs-modal-dialog-content{
        line-height: 1.4;
    }
    video {
        width: 100% !important;
        height: 100% !important;
        background-color: rgb(0, 0, 0);
    }
</style>

