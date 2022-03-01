<template>
  <div class="ui-background">
    <image
      class="ui-background__robot"
      src="../../static/images/introduce_card/ui-robot.png"
      mode=""
    />
    <image
      class="ui-background__white-star1"
      src="../../static/images/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="ui-background__white-star2"
      src="../../static/images/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="ui-background__white-star3"
      src="../../static/images/introduce_card/white-star.png"
      mode=""
    />
    <UIText />
  </div>
  <image
    class="ui-background__angle"
    src="../../static/images/introduce_card/ui-angle.png"
    mode=""
  />
</template>

<script setup lang="ts">
/*
  @description 设计组介绍卡片
  @author 梁国昊
  @date 2022/2/20
*/
import UIText from "./TextShow/UIText.vue";
</script>

<style lang="scss" scoped>
.ui-background {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 72rpx;
  z-index: 2;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    radial-gradient(
      122.94% 116.24% at 89.4% 0.05%,
      rgba(234, 254, 249, 0.5) 24.89%,
      rgba(243, 225, 249, 0.5) 38.17%,
      rgba(235, 207, 255, 0.5) 60.33%,
      rgba(255, 183, 248, 0.5) 89.53%
    );
  &__robot {
    position: absolute;
    width: 420rpx;
    height: 500rpx;
    left: 180rpx;
    top: -182rpx;
  }
  &__white-star1 {
    position: absolute;
    width: 114.48rpx;
    height: 69.36rpx;
    left: -36.12rpx;
    top: 84.2rpx;

    transform: rotate(-91.35deg);
  }
  &__white-star2 {
    position: absolute;
    width: 144rpx;
    height: 206rpx;
    left: 400rpx;
    top: 344rpx;
  }
  &__white-star3 {
    position: absolute;
    width: 90rpx;
    height: 118rpx;
    left: 405.18rpx;
    top: 597rpx;
  }
  &__angle {
    position: absolute;
    width: 262.92rpx;
    height: 133.32rpx;
    top: 580rpx;
    left: -90rpx;
    transform: rotate(0.08deg);
    z-index: 1;
  }
}
</style>
