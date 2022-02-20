<template>
  <div class="back-end-background">
    <image
      class="back-end-background__white-star1"
      src="../../static/images/introduce_card/white-star.png"
    />
    <image
      class="back-end-background__robot"
      src="../../static/images/introduce_card/back-end-robot.png"
    />
    <image
      class="back-end-background__white-star2"
      src="../../static/images/introduce_card/white-star.png"
    />
    <image
      class="back-end-background__icon"
      src="../../static/images/introduce_card/back-end-icon.png"
    />
    <image
      class="back-end-background__angle"
      src="../../static/images/introduce_card/back-end-angle.png"
    />
    <BackEndText />
  </div>
</template>

<script setup lang="ts">
/*
  @description 后台组介绍卡片
  @author 梁国昊
  @date 2022/2/20
*/
import BackEndText from "./TextShow/BackEndText";
</script>

<style lang="scss">
.back-end-background {
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    radial-gradient(
      152.15% 88.76% at -20.42% 23.11%,
      rgba(255, 196, 187, 0.5) 0%,
      rgba(255, 228, 225, 0.5) 0.01%,
      rgba(211, 196, 255, 0.5) 100%
    );
  border-radius: 72rpx;
  &__white-star1 {
    position: absolute;
    width: 103.2rpx;
    height: 62.52rpx;
    left: -43.3rpx;
    top: 284.02rpx;
    transform: matrix(-0.02, -1, 1, -0.03, 0, 0);
    background: url(.png);
  }
  &__white-star2 {
    position: absolute;
    width: 96.8rpx;
    height: 143.22rpx;
    left: 4rpx;
    top: 648rpx;
  }
  &__robot {
    position: absolute;
    width: 323.9rpx;
    height: 350.3rpx;
    left: -118.96rpx;
    top: 336.86rpx;
    background: url(.png);
  }
  &__icon {
    position: absolute;
    width: 367.82rpx;
    height: 286.68rpx;
    left: 250rpx;
    top: -162rpx;
    background: url(.png);
  }
  &__angle {
    position: absolute;
    width: 185.94rpx;
    height: 74.34rpx;
    left: -91.24rpx;
    top: 15.54rpx;
  }
}
</style>
