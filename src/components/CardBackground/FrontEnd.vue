<template>
  <div class="front-end-background">
    <image
      class="front-end-background-white-star1"
      src="../../static/images/introduce_card/white-star.png"
      alt=""
    />
    <image
      class="front-end-background-robot"
      alt=""
      src="../../static/images/introduce_card/front-end-robot.png"
    />
    <image
      class="front-end-background-icon"
      alt=""
      src="../../static/images/introduce_card/front-end-icon.png"
    />
    <image
      class="front-end-background-white-star2"
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
  @date 2022/2/20
*/
import FrontEndText from "./TextShow/FrontEndText";
</script>

<style lang="scss">
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
  &-robot {
    position: absolute;
    width: 147.11px;
    height: 187.92px;
    background: url(.png);
    transform: rotate(1.28deg);
    left: 145.62px;
    top: 169.79px;
  }
  &-icon {
    position: absolute;
    width: 230px;
    height: 201px;
    left: -30.94%;
    right: 28.86%;
    top: 65.43%;
  }
  &-white-star1 {
    position: absolute;
    width: 69px;
    height: 91px;
    left: -6.84%;
    right: 80.59%;
    top: -9.45%;
    bottom: 85.29%;
  }
  &-white-star2 {
    position: absolute;
    width: 45px;
    height: 59px;
    left: 187.4px;
    top: 308px;
  }
}
</style>
