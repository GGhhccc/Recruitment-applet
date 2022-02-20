<template>
  <div class="deep-learning-background">
    <image
      class="deep-learning-background-robot"
      src="../../static/images/introduce_card/deep-learning-robot.png"
      mode=""
    />
    <image
      class="deep-learning-background-white-star1"
      src="../../static/images/introduce_card/white-star.png"
      alt=""
    />
    <image
      class="deep-learning-background-white-star2"
      src="../../static/images/introduce_card/white-star.png"
      alt=""
    />
    <image
      class="deep-learning-background-angle"
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
  border-radius: 36px;
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
  border: 1px solid rgba(255, 183, 248, 0.8);
  box-sizing: border-box;
  &-robot {
    position: absolute;
    width: 211.15px;
    height: 238.23px;
    left: 73.68px;
    top: 250.21px;
    background: url(.png);
    z-index: 5;
  }
  &-white-star1 {
    position: absolute;
    width: 70.13px;
    height: 95.27px;
    left: 6px;
    top: -32.63px;
    z-index: 5;
  }
  &-white-star2 {
    position: absolute;
    width: 57.24px;
    height: 34.68px;
    left: -32.92px;
    top: 109.67px;
    transform: matrix(-0.02, -1, 1, -0.03, 0, 0);
    z-index: 5;
  }
  &-angle {
    position: absolute;
    width: 190.16px;
    height: 69.18px;
    top: -19px;
    left: -53px;
    z-index: 1;
  }
}
</style>
