<template>
  <div class="android-background">
    <image
      class="android-background__white-star1"
      src="../../static/images/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="android-background__white-star2"
      src="../../static/images/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="android-background__white-star3"
      src="../../static/images/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="android-background__robot"
      src="../../static/images/introduce_card/android-robot.png"
      mode=""
    />
    <AndroidText />
  </div>
</template>

<script setup lang="ts">
/*
  @description 安卓组介绍卡片
  @author 梁国昊
  @date 2022/2/20
*/
import AndroidText from "./TextShow/AndroidText";
</script>

<style lang="scss" scoped>
.android-background {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    radial-gradient(
      119.05% 111.51% at 96.4% 92.88%,
      rgba(255, 250, 244, 0.5) 0%,
      rgba(249, 231, 225, 0.5) 5%,
      rgba(255, 228, 252, 0.5) 31.04%,
      rgba(235, 207, 255, 0.5) 100%
    );
  border-radius: 72rpx;
  &__white-star1 {
    position: absolute;
    width: 114.48rpx;
    height: 69.36rpx;
    left: -71.3rpx;
    top: 668.04rpx;
    transform: rotate(-91.35deg);
  }
  &__white-star2 {
    position: absolute;
    width: 106rpx;
    height: 167.78rpx;
    left: 406rpx;
    top: -25.88rpx;
  }
  &__white-star3 {
    position: absolute;
    width: 90rpx;
    height: 118rpx;
    left: 404rpx;
    top: 602.04rpx;
  }
  &__robot {
    position: absolute;
    width: 476rpx;
    height: 426rpx;
    left: 116rpx;
    top: 440rpx;
  }
}
</style>
