<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">

  ::-webkit-scrollbar
  {
    width: 10px;
    height: 10px;
    background-color: #2C2E32;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #16181C;
  }
  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #2C2E32;
  }

  .el-loading-spinner{
    top: 30px!important;
  }

</style>
