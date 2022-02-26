<template>
  <view class="lab-to-introduce">
    <view
      :class="[
        'lab-to-introduce__text-box',
        { 'lab-to-introduce__text-box-1': !animationStatusList[0] },
        { 'lab-to-introduce__text-box-1-animation': animationStatusList[0] },
      ]"
    >
      数字通向世界， <br />智能开创未来。
    </view>
    <view
      :class="[
        'lab-to-introduce__text-box',
        { 'lab-to-introduce__text-box-2': !animationStatusList[1] },
        { 'lab-to-introduce__text-box-2-animation': animationStatusList[1] },
      ]"
    >
      <text
        :class="{
          'lab-to-introduce__text-box-2__text-1': !animationStatusList[1],
          'lab-to-introduce__text-box-2__text-1-animation-1':
            animationStatusList[1],
        }"
        >数智工作室</text
      >
      <text>成立于</text>
      <text
        :class="{
          'lab-to-introduce__text-box-2__text-1': !animationStatusList[1],
          'lab-to-introduce__text-box-2__text-1-animation-2':
            animationStatusList[1],
        }"
        >2017</text
      >
      <text>年，团队的主要方向有</text>
      <text
        :class="{
          'lab-to-introduce__text-box-2__text-1': !animationStatusList[1],
          'lab-to-introduce__text-box-2__text-1-animation-2':
            animationStatusList[1],
        }"
        >前端</text
      >
      <text>、</text>
      <text
        :class="{
          'lab-to-introduce__text-box-2__text-1': !animationStatusList[1],
          'lab-to-introduce__text-box-2__text-1-animation-3':
            animationStatusList[1],
        }"
        >后台</text
      >
      <text>、</text>
      <text
        :class="{
          'lab-to-introduce__text-box-2__text-1': !animationStatusList[1],
          'lab-to-introduce__text-box-2__text-1-animation-4':
            animationStatusList[1],
        }"
        >安卓</text
      >
      <text>、</text>
      <text
        :class="{
          'lab-to-introduce__text-box-2__text-1': !animationStatusList[1],
          'lab-to-introduce__text-box-2__text-1-animation-4':
            animationStatusList[1],
        }"
        >深度学习</text
      >
      <text>、</text>
      <text
        :class="{
          'lab-to-introduce__text-box-2__text-1': !animationStatusList[1],
          'lab-to-introduce__text-box-2__text-1-animation-3':
            animationStatusList[1],
        }"
        >UI设计</text
      >
      <text>。</text>
    </view>
    <view
      :class="[
        'lab-to-introduce__text-box',
        { 'lab-to-introduce__text-box-3': !animationStatusList[2] },
        { 'lab-to-introduce__text-box-3-animation': animationStatusList[2] },
      ]"
    >
      <text>成立以来，团队已经协作完成多个项目如</text>
      <text
        :class="{
          'lab-to-introduce__text-box-3__text-1': !animationStatusList[2],
          'lab-to-introduce__text-box-3__text-1-animation-1':
            animationStatusList[2],
        }"
      >
        手持气体监测仪App开发
      </text>
      <text>、</text>
      <text
        :class="{
          'lab-to-introduce__text-box-3__text-1': !animationStatusList[2],
          'lab-to-introduce__text-box-3__text-1-animation-2':
            animationStatusList[2],
        }"
        >6603网课预约系统</text
      >
      <text>、</text>
      <text
        :class="{
          'lab-to-introduce__text-box-3__text-1': !animationStatusList[2],
          'lab-to-introduce__text-box-3__text-1-animation-2':
            animationStatusList[2],
        }"
        >悬赏平台</text
      >
      <text>、</text>
      <text
        :class="{
          'lab-to-introduce__text-box-3__text-1': !animationStatusList[2],
          'lab-to-introduce__text-box-3__text-1-animation-2':
            animationStatusList[2],
        }"
        >蓝牙签到</text
      >
      <text> 等。</text>
    </view>
    <view
      :class="[
        'lab-to-introduce__text-box',
        'lab-to-introduce__text-box-4',
        { 'lab-to-introduce__text-box-4-animation': animationStatusList[3] },
      ]"
    >
      目前，我们仍有多个项目正在开发，欢迎有想法、有创意、想把自己的想法落地的你加入我们，共同协作，一起进步！
    </view>
    <view
      :class="[
        'lab-to-introduce__text-box',
        'lab-to-introduce__text-box-5',
        { 'lab-to-introduce__text-box-5-animation': animationStatusList[4] },
      ]"
    >
      <PublicButton @click="$emit('click')">加入我们</PublicButton></view
    >
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import PublicButton from "./PublicButton.vue";

defineEmits<{
  (e: "click"): void;
}>();

const animationStatusList = ref([false, false, false, false, false]);
const animationHandler = () => {
  let currentIndex = 0;
  return () => {
    animationStatusList.value[currentIndex] = true;
    currentIndex++;
  };
};
const runAnimation = animationHandler();
runAnimation();
const intervalFlag = setInterval(() => {
  runAnimation();
  if (animationStatusList.value[3]) {
    setTimeout(runAnimation, 1000);
    clearInterval(intervalFlag);
  }
}, 4000);
</script>

<style lang="scss">
@keyframes text-1-animation {
  0% {
    top: 290rpx;
    left: 90rpx;
    width: 334rpx;
    font-size: 48rpx;
    line-height: 64rpx;
    color: #716969;
  }
  70% {
    top: 290rpx;
    left: 90rpx;
    width: 334rpx;
    font-size: 48rpx;
    line-height: 64rpx;
    color: #716969;
  }
  80% {
    top: 300rpx;
    left: 100rpx;
    width: 334rpx;
    font-size: 48rpx;
    line-height: 64rpx;
    color: #716969;
  }
  90% {
    top: 34rpx;
    left: 50rpx;
    width: 368rpx;
    font-size: 28rpx;
    line-height: 36rpx;
    color: #958f8f;
  }
  100% {
    top: 40rpx;
    left: 56rpx;
    width: 368rpx;
    font-size: 28rpx;
    line-height: 36rpx;
    color: #958f8f;
  }
}
@keyframes text-2-animation {
  0% {
    left: 54rpx;
    top: 298rpx;
    width: 354rpx;
    font-family: OPPOSans;
    font-size: 36rpx;
    line-height: 48rpx;
    text-align: center;
    letter-spacing: -0.3px;
    color: #716969;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  99% {
    left: 54rpx;
    top: 298rpx;
    width: 354rpx;
    font-family: OPPOSans;
    font-size: 36rpx;
    line-height: 48rpx;
    text-align: center;
    letter-spacing: -0.3px;
    color: #716969;
    opacity: 1;
  }
  100% {
    top: 110rpx;
    left: 56rpx;
    width: 368rpx;
    font-size: 28rpx;
    line-height: 36rpx;
    color: #958f8f;
    opacity: 1;
  }
}
@keyframes text-2__text-1-animation-1 {
  0% {
    font-size: 48rpx;
  }
  99% {
    font-size: 48rpx;
  }
  100% {
    font-size: 28rpx;
  }
}
@keyframes text-2__text-1-animation-2 {
  0% {
    color: #5c7ae7;
  }
  99% {
    color: #5c7ae7;
  }
  100% {
    color: #958f8f;
  }
}
@keyframes text-2__text-1-animation-3 {
  0% {
    color: #8345e9;
  }
  99% {
    color: #8345e9;
  }
  100% {
    color: #958f8f;
  }
}
@keyframes text-2__text-1-animation-4 {
  0% {
    color: #766de2;
  }
  99% {
    color: #766de2;
  }
  100% {
    color: #958f8f;
  }
}
@keyframes text-3-animation {
  0% {
    left: 60rpx;
    top: 316rpx;
    width: 356rpx;
    font-family: OPPOSans;
    font-size: 36rpx;
    line-height: 48rpx;
    text-align: center;
    letter-spacing: -0.3px;
    color: #716969;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  99% {
    left: 60rpx;
    top: 316rpx;
    width: 356rpx;
    font-family: OPPOSans;
    font-size: 36rpx;
    line-height: 48rpx;
    text-align: center;
    letter-spacing: -0.3px;
    color: #716969;
    opacity: 1;
  }
  100% {
    top: 216rpx;
    left: 56rpx;
    width: 368rpx;
    font-size: 28rpx;
    line-height: 36rpx;
    color: #958f8f;
    opacity: 1;
  }
}
@keyframes text-3__text-1-animation-1 {
  0% {
    color: #d774b5;
  }
  99% {
    color: #d774b5;
  }
  100% {
    color: #958f8f;
  }
}
@keyframes text-3__text-1-animation-2 {
  0% {
    color: #dd89fb;
  }
  99% {
    color: #dd89fb;
  }
  100% {
    color: #958f8f;
  }
}
@keyframes text-4-animation {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes text-5-animation {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

.lab-to-introduce {
  position: relative;
  width: 480rpx;
  height: 756rpx;
  padding: 36rpx 56rpx;
  background: rgba(255, 255, 255, 0.71);
  border: 2rpx solid rgba(255, 203, 247, 0.57);
  border-radius: 40rpx;
  backdrop-filter: blur(8rpx);
  box-sizing: border-box;
  &__text-box {
    position: absolute;
    width: 368rpx;
    font-family: OPPOSans;
    font-size: 28rpx;
    font-style: normal;
    font-weight: normal;
    line-height: 36rpx;
    text-align: left;
    letter-spacing: -0.3px;
    color: #958f8f;
  }
  &__text-box-1 {
    top: 290rpx;
    left: 90rpx;
    width: 334rpx;
    font-family: OPPOSans;
    font-size: 44rpx;
    line-height: 64rpx;
    letter-spacing: -0.3px;
    color: #716969;
  }
  &__text-box-1-animation {
    animation: text-1-animation 2s ease 0s 1 normal forwards running;
  }
  &__text-box-2 {
    left: 54rpx;
    top: 298rpx;
    width: 354rpx;
    font-family: OPPOSans;
    font-size: 32rpx;
    line-height: 48rpx;
    text-align: center;
    letter-spacing: -0.3px;
    color: #716969;
    opacity: 0;
    &__text-1 {
      font-size: 48rpx;
    }
    &__text-2,
    &__text-3 {
      color: #5c7ae7;
    }
    &__text-4,
    &__text-7 {
      color: #8345e9;
    }
    &__text-5,
    &__text-6 {
      color: #766de2;
    }
  }
  &__text-box-2-animation {
    animation: text-2-animation 2s ease 0s 1 normal forwards running;
  }
  &__text-box-2__text-1-animation-1 {
    animation: text-2__text-1-animation-1 2s ease 0s 1 normal forwards running;
  }
  &__text-box-2__text-1-animation-2 {
    animation: text-2__text-1-animation-2 2s ease 0s 1 normal forwards running;
  }
  &__text-box-2__text-1-animation-3 {
    animation: text-2__text-1-animation-3 2s ease 0s 1 normal forwards running;
  }
  &__text-box-2__text-1-animation-4 {
    animation: text-2__text-1-animation-4 2s ease 0s 1 normal forwards running;
  }
  &__text-box-3 {
    left: 60rpx;
    top: 316rpx;
    width: 356rpx;
    font-family: OPPOSans;
    font-size: 32rpx;
    line-height: 48rpx;
    text-align: center;
    letter-spacing: -0.3px;
    color: #716969;
    opacity: 0;
    &__text-1 {
      color: #d774b5;
    }
    &__text-2,
    &__text-3,
    &__text-4 {
      color: #dd89fb;
    }
  }
  &__text-box-3-animation {
    animation: text-3-animation 2s ease 0s 1 normal forwards running;
  }
  &__text-box-3__text-1-animation-1 {
    animation: text-3__text-1-animation-1 2s ease 0s 1 normal forwards running;
  }
  &__text-box-3__text-1-animation-2 {
    animation: text-3__text-1-animation-2 2s ease 0s 1 normal forwards running;
  }
  &__text-box-4 {
    left: 33rpx;
    top: 386rpx;
    width: 410rpx;
    font-family: OPPOSans;
    font-size: 32rpx;
    line-height: 48rpx;
    text-align: center;
    letter-spacing: -0.3px;
    color: #716969;
    opacity: 0;
  }
  &__text-box-4-animation {
    animation: text-4-animation 1s ease 0s 1 normal forwards running;
  }
  &__text-box-5 {
    left: 50%;
    bottom: 42rpx;
    transform: translateX(-50%);
    opacity: 0;
  }
  &__text-box-5-animation {
    animation: text-5-animation 1s ease 0s 1 normal forwards running;
  }
}
</style>
