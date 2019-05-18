<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 0px;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
  }
  .el-loading-mask {
      position: fixed !important;
  }
  .defaultCon {
      width: 780px;
      height: 454px;
      background-color: #000;
      margin: 0 auto;
      position: relative;
  }
  .mDefaultCon {
      width: 100%;
      height: 200px;
      background-color: #000;
      margin: 110px auto 0;
      position: relative;
  }
  .mDefaultCon img,
  .defaultCon img {
      max-width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
  }
  .el-loading-spinner i {
      font-size: 2rem;
      margin-bottom: 1rem;
  }
  .el-tabs__item.is-active {
      color: #32cd32;
  }
  .el-loading-spinner i {
      color: #32cd32;
  }
  .el-loading-spinner .el-loading-text {
      color: #32cd32;
  }
  .el-tabs__active-bar {
      background-color: #32cd32;
  }
  .el-tabs__item {
      font-size: 16px;
  }
  a[title='站长统计'] {
      display: none;
  }
</style>
