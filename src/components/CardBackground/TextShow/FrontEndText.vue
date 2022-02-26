<template>
  <div class="front-end-text">
    <div class="front-end-text__title">前端</div>
    是产品的门面担当，也是离用户最近的一部分。前端从PC端到移动端畅游无阻，
    可以开发出高性能的web 、app和小程序，
    你可以通过自己编写的代码把自己的酷炫想法变成真实的页面效果呈现。<br />
    <div class="front-end-text__2">
      随着 node.js的面世，前端也能进行后台开发。热门的TypeScript能极大
      规避错误和提升效率。<br />
    </div>
    <div class="front-end-text__3">加入我们, 从现<br />在开始奔跑吧！</div>
  </div>
</template>

<script setup lang="ts">
/* 
  @description 前端组介绍卡片具体内容
  @author 梁国昊
  @date 2022/2/22
*/
</script>

<style lang="scss" scoped>
.front-end-text {
  padding: 85rpx 40rpx 70rpx 49.03rpx;
  font-family: OPPOSans;
  font-style: normal;
  font-weight: normal;
  font-size: 26rpx;
  line-height: 43rpx;
  letter-spacing: -0.6rpx;
  color: #7b797a;
  &__title {
    display: inline;
    font-size: 35rpx;
    color: #5c7ae7;
    font-weight: normal;
    letter-spacing: -0.6rpx;
  }
  &__2 {
    margin-top: 15rpx;
    width: 330rpx;
  }
  &__3 {
    margin-left: 140rpx;
    margin-top: 15rpx;
    width: 207rpx;
  }
}
</style>
