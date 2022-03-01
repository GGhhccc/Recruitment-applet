<template>
  <view
    v-show="isShowView"
    class="welcome"
    :class="{ 'welcome-animation': isShowAnimation }"
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
      :style="{
        opacity: isShowAnimation ? 0 : 1,
        transition: isShowAnimation ? 'opacity 0.2s 0.3s' : 'none',
      }"
    >
      <image
        class="welcome__central-image__image"
        src="../static/images/welcomeImage.png"
        mode="widthFix"
        @load="isShowView = true"
      />
    </view>
    <view
      class="welcome__lab-name"
      :style="{
        opacity: isShowAnimation ? 1 : 0,
        transition: isShowAnimation ? 'opacity 0.2s 0.3s' : 'none',
      }"
    >
      <text>数智工作室</text>
      <text class="welcome__lab-name__tip">点击下方的星球有惊喜哦</text>
    </view>
    <view
      :class="['welcome__logo', { 'welcome__logo-animation': isShowAnimation }]"
      ref="logo"
      @click="(isShowAnimation = true), exposeEmit()"
    >
      <view
        :class="[
          'welcome__logo__shadow-wrap',
          { 'welcome__logo__shadow-wrap-animation': isShowAnimation },
        ]"
      ></view>
      <image
        class="welcome__logo__image"
        src="../static/images/welcomeLogo.png"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

const emits = defineEmits<{
  (e: "click"): void;
}>();

const isShowView = ref(false);
const isShowAnimation = ref(false);
const isShowCentralImage = ref(true);
watch(
  () => isShowAnimation.value,
  (val) => val && setTimeout(() => (isShowCentralImage.value = false), 1000)
);
const exposeEmit = () => {
  setTimeout(() => emits("click"), 500);
};
</script>

<style lang="scss">
@keyframes welcome-animation {
  0% {
    height: 100vh;
  }
  99% {
    height: 100vh;
  }
  100% {
    height: 240rpx;
  }
}
@keyframes welcome-text-animation {
  0% {
    top: 58rpx;
  }
  30% {
    top: 80rpx;
  }
  100% {
    top: -280rpx;
  }
}
@keyframes logo-animation {
  0% {
    top: 73%;
  }
  30% {
    top: 78%;
  }
  70% {
    top: -40rpx;
  }
  100% {
    top: -20rpx;
  }
}
@keyframes logo__shadow-wrap-animation {
  0% {
    border-radius: 48rpx;
    box-shadow: inset 0 -12px 14px -7px rgba(0, 0, 0, 0.1);
  }
  30% {
    border-radius: 48rpx;
    box-shadow: inset 0 -12px 14px -7px rgba(0, 0, 0, 0.1);
  }
  100% {
    border-radius: 0;
    box-shadow: none;
  }
}

.welcome {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 12;
  width: 100vh;
  height: 100vh;
  font-weight: bold;
  &__text {
    position: fixed;
    left: 54rpx;
    top: 58rpx;
    display: flex;
    flex-direction: column;
    gap: 15rpx;
    height: 120px;
    &__hello {
      font-family: OPPOSans;
      font-size: 84rpx;
      color: #4f4c4c;
    }
    &__explore-text {
      font-family: OPPOSans;
      line-height: 50rpx;
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
  }
  &__lab-name {
    display: flex;
    flex-direction: column;
    gap: 15rpx;
    position: fixed;
    left: 50%;
    top: 156rpx;
    z-index: 1;
    font-family: OPPOSans;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #7e7c8e;
    transform: translateX(-50%);
    transition: opacity 0.2s 0.3s;
    &__tip {
      font-family: OPPOSans;
      font-weight: 400;
      font-size: 28rpx;
      line-height: 36rpx;
      text-align: center;
      letter-spacing: -0.3px;
      color: #d6d6d6;
    }
  }
  &__logo {
    position: fixed;
    left: 50%;
    top: 73%;
    height: 206rpx;
    border-radius: 48rpx;
    transform: translateX(-50%);
    &__shadow-wrap {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 48rpx;
      box-shadow: inset 0 -12px 14px -7px rgba(0, 0, 0, 0.1);
    }
    &__image {
      width: 206rpx;
      height: 206rpx;
    }
  }
  &__logo-animation {
    animation: logo-animation 0.7s ease 0s 1 normal forwards running;
  }
  &__logo__shadow-wrap-animation {
    animation: logo__shadow-wrap-animation 0.7s ease 0s 1 normal forwards
      running;
  }
}
.welcome-animation {
  animation: welcome-animation 0.5s ease 0s 1 normal forwards running;
}
</style>
