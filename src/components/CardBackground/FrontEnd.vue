<template>
  <div class="front-end-background">
    <image
      class="front-end-background__white-star1"
      src="../../static/images/introduce_card/white-star.png"
      alt=""
    />
    <image
      class="front-end-background__robot front-end-background__robot-animation"
      alt=""
      src="../../static/images/introduce_card/front-end-robot.png"
    />
    <image
      class="front-end-background__icon"
      alt=""
      src="../../static/images/introduce_card/front-end-icon.png"
    />
    <image
      class="front-end-background__white-star2"
      src="../../static/images/introduce_card/white-star.png"
      alt=""
    />
    <FrontEndText />
  </div>
</template>

<script setup lang="ts" scoped>
/*
  @description 前端组介绍卡片
  @author 梁国昊
  @date 2022/2/22
*/
import FrontEndText from "./TextShow/FrontEndText.vue";
</script>

<style lang="scss">
@keyframes robot-animation {
  0% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(-5px);
  }
}

.front-end-background {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 36rpx;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(
      332.96deg,
      rgba(255, 228, 252, 0.5) -97.91%,
      rgba(247, 219, 72, 0.5) -12.36%,
      rgba(255, 250, 244, 0.5) 39.91%,
      rgba(211, 231, 249, 0.5) 61.3%,
      rgba(187, 221, 251, 0.5) 83.87%,
      rgba(154, 207, 255, 0.5) 119.99%
    );
  &__robot {
    position: absolute;
    width: 294.22rpx;
    height: 375.84rpx;
    transform: rotate(1.28deg);
    left: 291.24rpx;
    top: 339.58rpx;
  }
  &__robot-animation {
    animation: robot-animation 1.5s ease 0s infinite alternate running;
  }
  &__icon {
    position: absolute;
    width: 453rpx;
    height: 390rpx;
    left: -32.94%;
    right: 28.86%;
    top: 72.43%;
  }
  &__white-star1 {
    position: absolute;
    width: 138rpx;
    height: 182rpx;
    left: -6.84%;
    right: 80.59%;
    top: -9.45%;
    bottom: 85.29%;
  }
  &__white-star2 {
    position: absolute;
    width: 90rpx;
    height: 118rpx;
    left: 374.8rpx;
    top: 616rpx;
  }
}
</style>
