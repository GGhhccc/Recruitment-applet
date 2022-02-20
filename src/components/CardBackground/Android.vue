<template>
  <div class="android-background">
    <image
      class="android-background-white-star1"
      src="../../static/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="android-background-white-star2"
      src="../../static/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="android-background-white-star3"
      src="../../static/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="android-background-robot"
      src="../../static/introduce_card/android-robot.png"
      mode=""
    />
    <AndroidText />
  </div>
</template>

<script setup lang="ts">
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
  border-radius: 36px;
  &-white-star1 {
    position: absolute;
    width: 57.24px;
    height: 34.68px;
    left: -35.65px;
    top: 334.02px;
    transform: rotate(-91.35deg);
  }
  &-white-star2 {
    position: absolute;
    width: 53px;
    height: 83.89px;
    left: 203px;
    top: -12.94px;
  }
  &-white-star3 {
    position: absolute;
    width: 45px;
    height: 59px;
    left: 202px;
    top: 301.02px;
  }
  &-robot {
    position: absolute;
    width: 238px;
    height: 213px;
    left: 58px;
    top: 220px;
    background: url(.png);
  }
}
</style>
