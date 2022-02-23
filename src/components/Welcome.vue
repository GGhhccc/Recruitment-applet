<template>
  <view
    class="welcome"
    :style="{ height: isShowAnimation ? '260rpx' : '100vh' }"
  >
    <view
      :class="['welcome__text', { 'welcome__text-animation': isShowAnimation }]"
    >
      <view class="welcome__text__hello">你好，</view>
      <view class="welcome__text__explore-text"
        ><text>欢迎探索，</text>
        <br />
        <text>你的精彩生活</text>
      </view>
    </view>
    <view
      v-if="isShowCentralImage"
      class="welcome__central-image"
      :style="{ opacity: isShowAnimation ? 0 : 1 }"
    >
      <image
        class="welcome__central-image__image"
        src="../static/images/welcomeImage.png"
        mode="widthFix"
      />
    </view>
    <view
      class="welcome__lab-name"
      :style="{ opacity: isShowAnimation ? 1 : 0 }"
    >
      <text>数智工作室</text>
    </view>
    <view
      :class="['welcome__logo', { 'welcome__logo-animation': isShowAnimation }]"
      @click="(isShowAnimation = true), $emit('click')"
    >
      <view v-if="!isShowAnimation" class="welcome__logo__shadow-wrap"></view>
      <image
        class="welcome__logo__image"
        src="../static/images/welcomeLogo.png"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

defineProps<{
  (e: "click"): void;
}>();

const isShowAnimation = ref(false);
const isShowCentralImage = ref(true);
watch(
  () => isShowAnimation.value,
  (val) => val && setTimeout(() => (isShowCentralImage.value = false), 300)
);
</script>

<style lang="scss">
@keyframes welcome-text-animation {
  0% {
    top: 58rpx;
  }
  30% {
    top: 80rpx;
  }
  100% {
    top: -250rpx;
  }
}
@keyframes logo-animation {
  0% {
    top: 1080rpx;
  }
  30% {
    top: 1102rpx;
  }
  70% {
    top: 0;
  }
  100% {
    top: 38rpx;
  }
}

.welcome {
  width: 100vh;
  height: 100vh;
  &__text {
    position: fixed;
    left: 54rpx;
    top: 58rpx;
    display: flex;
    flex-direction: column;
    gap: 20rpx;
    &__hello {
      font-family: OPPOSans;
      font-size: 84rpx;
      color: #4f4c4c;
    }
    &__explore-text {
      font-family: OPPOSans;
      font-size: 40rpx;
      color: #a7a7a7;
    }
  }
  &__text-animation {
    animation: welcome-text-animation 0.5s ease 0s 1 normal forwards running;
  }
  &__central-image {
    position: fixed;
    left: 50%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 750rpx;
    height: 886rpx;
    transform: translate(-50%, -50%);
    transition: opacity 0.2s 0.3s;
  }
  &__lab-name {
    position: fixed;
    left: 50%;
    top: 206rpx;
    z-index: 1;
    font-family: OPPOSans;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.3px;
    color: #7e7c8e;
    transform: translateX(-50%);
    transition: opacity 0.2s 0.3s;
  }
  &__logo {
    position: fixed;
    left: 50%;
    top: 1080rpx;
    height: 206rpx;
    border-radius: 48rpx;
    transform: translateX(-50%);
    &__shadow-wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 48rpx;
      box-shadow: inset 0 -12px 14px -7px rgba(0, 0, 0, 0.3);
    }
    &__image {
      width: 206rpx;
      height: 206rpx;
    }
  }
  &__logo-animation {
    animation: logo-animation 0.7s ease 0s 1 normal forwards running;
  }
}
</style>
