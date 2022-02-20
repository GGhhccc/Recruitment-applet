<template>
  <div class="back-end-background">
    <image
      class="back-end-background-white-star1"
      src="../../static/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="back-end-background-robot"
      src="../../static/introduce_card/back-end-robot.png"
      mode=""
    />
    <image
      class="back-end-background-white-star2"
      src="../../static/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="back-end-background-icon"
      src="../../static/introduce_card/back-end-icon.png"
      mode=""
    />
    <image
      class="back-end-background-angle"
      src="../../static/introduce_card/back-end-angle.png"
      mode=""
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
  border-radius: 36px;
  &-white-star1 {
    position: absolute;
    width: 51.6px;
    height: 31.26px;
    left: -21.65px;
    top: 142.01px;
    transform: matrix(-0.02, -1, 1, -0.03, 0, 0);
    background: url(.png);
  }
  &-white-star2 {
    position: absolute;
    width: 48.4px;
    height: 71.61px;
    left: 2px;
    top: 324px;
  }
  &-robot {
    position: absolute;
    width: 161.95px;
    height: 175.15px;
    left: -59.48px;
    top: 168.43px;
    background: url(.png);
  }
  &-icon {
    position: absolute;
    width: 183.91px;
    height: 143.34px;
    left: 125px;
    top: -81px;
    background: url(.png);
  }
  &-angle {
    position: absolute;
    width: 92.97px;
    height: 37.17px;
    left: -45.62px;
    top: 7.77px;
  }
}
</style>
