<template>
  <view class="tab-bar">
    <view class="tab-bar__item">
      <image
        mode="heightFix"
        class="tab-bar__item__minor-image"
        :src="getImageSrcByType(currentTabBarTypeList[0])"
        @click="
          setCurrentTabBarList(currentTabBarTypeList[0], 'left'),
            $emit('click', currentTabBarTypeList[0])
        "
      ></image>
    </view>
    <view class="tab-bar__item">
      <image
        mode="heightFix"
        class="tab-bar__item__main-image"
        :src="getImageSrcByType(currentTabBarTypeList[1], true)"
      ></image>
    </view>
    <view class="tab-bar__item">
      <image
        mode="heightFix"
        class="tab-bar__item__minor-image"
        :src="getImageSrcByType(currentTabBarTypeList[2])"
        @click="
          setCurrentTabBarList(currentTabBarTypeList[2], 'right'),
            $emit('click', currentTabBarTypeList[0])
        "
      ></image>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";

type TabBarListType =
  | "Android"
  | "deepLearning"
  | "UI"
  | "backEnd"
  | "lab"
  | "frontEnd";
interface TabBarListItem {
  type: TabBarListType;
  main: string;
  minor: string;
}

defineEmits<{
  (e: "click", type: TabBarListType): void;
}>();

// 从左至右：安卓 深度学习 UI 后台 工作室 前端
const tabBarList: TabBarListItem[] = [
  {
    type: "Android",
    main: "../static/images/tabBarAndroidMainImage.png",
    minor: "../static/images/tabBarAndroidMinorImage.png",
  },
  {
    type: "deepLearning",
    main: "../static/images/tabBarDeepLearningMainImage.png",
    minor: "../static/images/tabBarDeepLearningMinorImage.png",
  },
  {
    type: "UI",
    main: "../static/images/tabBarUIMainImage.png",
    minor: "../static/images/tabBarUIMinorImage.png",
  },
  {
    type: "backEnd",
    main: "../static/images/tabBarBackEndMainImage.png",
    minor: "../static/images/tabBarBackEndMinorImage.png",
  },
  {
    type: "lab",
    main: "../static/images/tabBarLabMainImage.png",
    minor: "../static/images/tabBarLabMinorImage.png",
  },
  {
    type: "frontEnd",
    main: "../static/images/tabBarFrontEndMainImage.png",
    minor: "../static/images/tabBarFrontEndMinorImage.png",
  },
];
const totalTabBarTypeList: TabBarListType[] = [
  "Android",
  "deepLearning",
  "UI",
  "backEnd",
  "lab",
  "frontEnd",
];
const currentTabBarTypeList = ref<TabBarListType[]>([
  "backEnd",
  "lab",
  "frontEnd",
]);
const getImageSrcByType = (type: TabBarListType, isMain: boolean = false) => {
  const item = tabBarList.find(({ type: itemType }) => itemType === type);
  return isMain ? item?.main : item?.minor;
};
const setCurrentTabBarList = (
  type: TabBarListType,
  addition: "left" | "right"
) => {
  let index = totalTabBarTypeList.indexOf(type);
  if (index === totalTabBarTypeList.length - 1) {
    index = 0;
  } else if (index === 0) {
    index = totalTabBarTypeList.length - 1;
  }
  if (addition === "left") {
    currentTabBarTypeList.value.pop();
    currentTabBarTypeList.value.unshift(totalTabBarTypeList[index - 1]);
  } else {
    currentTabBarTypeList.value.shift();
    currentTabBarTypeList.value.push(totalTabBarTypeList[index + 1]);
  }
};
</script>

<style lang="scss">
.tab-bar {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  &__item {
    display: flex;
    align-items: center;
    &__minor-image {
      height: 160rpx;
    }
    &__main-image {
      height: 280rpx;
    }
  }
}
</style>
