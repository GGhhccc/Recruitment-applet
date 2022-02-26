<template>
  <div class="deep-learning-background">
    <image
      class="deep-learning-background__robot"
      src="../../static/images/introduce_card/deep-learning-robot.png"
      mode=""
    />
    <image
      class="deep-learning-background__white-star1"
      src="../../static/images/introduce_card/white-star.png"
      alt=""
    />
    <image
      class="deep-learning-background__white-star2"
      src="../../static/images/introduce_card/white-star.png"
      alt=""
    />
    <image
      class="deep-learning-background__angle"
      src="../../static/images/introduce_card/deep-learn-angle.png"
      mode=""
    />
    <DeepLearningText />
  </div>
</template>

<script setup lang="ts">
/*
  @description 深度学习组介绍卡片
  @author 梁国昊
  @date 2022/2/20
*/
import DeepLearningText from "./TextShow/DeepLearningText";
</script>

<style lang="scss" scoped>
.deep-learning-background {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 72rpx;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    radial-gradient(
      96.23% 68.9% at 100.15% 73.74%,
      rgba(255, 221, 214, 0.5) 0.01%,
      rgba(255, 241, 214, 0.5) 0.02%,
      rgba(248, 240, 224, 0.5) 14.06%,
      rgba(197, 213, 255, 0.5) 100%
    );
  border: 2rpx solid rgba(255, 183, 248, 0.8);
  box-sizing: border-box;
  &__robot {
    position: absolute;
    width: 422.3rpx;
    height: 476.46rpx;
    left: 147.36rpx;
    top: 500.42rpx;
    z-index: 5;
  }
  &__white-star1 {
    position: absolute;
    width: 140.26rpx;
    height: 190.54rpx;
    left: 12rpx;
    top: -65.26rpx;
    z-index: 5;
  }
  &__white-star2 {
    position: absolute;
    width: 114.48rpx;
    height: 69.36rpx;
    left: -65.84rpx;
    top: 219.34rpx;
    transform: matrix(-0.02, -1, 1, -0.03, 0, 0);
    z-index: 5;
  }
  &__angle {
    position: absolute;
    width: 380.32rpx;
    height: 138.36rpx;
    top: -38rpx;
    left: -106rpx;
    z-index: 1;
  }
}
</style>
