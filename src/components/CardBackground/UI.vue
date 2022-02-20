<template>
  <div class="ui-background">
    <image
      class="ui-background-robot"
      src="../../static/introduce_card/ui-robot.png"
      mode=""
    />
    <image
      class="ui-background-white-star1"
      src="../../static/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="ui-background-white-star2"
      src="../../static/introduce_card/white-star.png"
      mode=""
    />
    <image
      class="ui-background-white-star3"
      src="../../static/introduce_card/white-star.png"
      mode=""
    />
    <UIText />
  </div>
  <image
    class="ui-background-angle"
    src="../../static/introduce_card/ui-angle.png"
    mode=""
  />
</template>

<script setup lang="ts">
import UIText from "./TextShow/UIText";
</script>

<style lang="scss" scoped>
.ui-background {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 36px;
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
  &-robot {
    position: absolute;
    width: 210px;
    height: 250px;
    left: 90px;
    top: -91px;
    background: url(.png);
  }
  &-white-star1 {
    position: absolute;
    width: 57.24px;
    height: 34.68px;
    left: -18.06px;
    top: 42.1px;

    transform: rotate(-91.35deg);
  }
  &-white-star2 {
    position: absolute;
    width: 72px;
    height: 103px;
    left: 200px;
    top: 172px;
  }
  &-white-star3 {
    position: absolute;
    width: 45px;
    height: 59px;
    left: 202.59px;
    top: 298.5px;
  }
  &-angle {
    position: absolute;
    width: 131.46px;
    height: 66.66px;
    top: 290px;
    left: -45px;
    transform: rotate(0.08deg);
    z-index: 1;
  }
}
</style>
