<template>
  <view class="index safe-area">
    <Welcome
      :class="{ 'hide-component': !isShowWelcome }"
      @click="routes[0].handler"
    />
    <LabToIntroduce
      :class="{ index__item: true, 'hide-component': !isShowLabCard }"
      :style="{
        transition: isSetTransition ? 'opacity 0.3s' : 'opacity 0s',
        'z-index': isShowLabCard ? '11' : '0',
      }"
      :run="isShowLabCard"
      @done="isDisableTabBar = false"
      @click="routes[7].handler"
    />
    <GroupToIntroduce
      :class="{ index__item: true, 'hide-component': !isShowGroupCard }"
      :card-name="groupType"
      :style="{
        transition: isSetTransition ? 'opacity 0.3s' : 'opacity 0s',
        'z-index': 1,
      }"
    />
    <SubmitForm
      class="index__form"
      :isShow="isShowForm"
      :style="{
        transition: isSetTransition ? 'opacity 0.3s' : 'opacity 0s',
        'z-index': isShowForm ? '9' : '0',
      }"
      @click="routes[8].handler"
    />
    <TabBar
      :class="{ 'index__tab-bar': true, 'hide-component': !isShowTabBar }"
      style="transition: opacity 0.3s"
      :style="{
        transition: isSetTransition ? 'opacity 0.3s' : 'opacity 0s',
        'z-index': isShowForm ? 7 : 9,
      }"
      :disabled="isDisableTabBar"
      @click="switchTab"
    />
  </view>
  <image
    class="background-image"
    src="../../static/images/background.svg"
    mode="widthFix"
  />
</template>

<script setup lang="ts">
import LabToIntroduce from "../../components/LabToIntroduce.vue";
import TabBar from "../../components/TabBar.vue";
import Welcome from "../../components/Welcome.vue";
import GroupToIntroduce from "../../components/GroupToIntroduce.vue";
import SubmitForm from "../../components/Form.vue";
import { ref } from "vue";

type TabBarListType =
  | "Android"
  | "deepLearning"
  | "UI"
  | "backEnd"
  | "lab"
  | "frontEnd";
const isSetTransition = ref(false);
setTimeout(() => (isSetTransition.value = true), 500);
const isShowWelcome = ref(true);
const isShowTabBar = ref(false);
const isDisableTabBar = ref(true);
const isShowLabCard = ref(false);
const isShowForm = ref(false);
const isShowGroupCard = ref(false);
const groupType = ref<TabBarListType | undefined>(undefined);
const routes = [
  // 欢迎切换到工作室
  {
    type: "welcomeToLab",
    handler: () => {
      isShowTabBar.value = true;
      setTimeout(() => {
        isShowLabCard.value = true;
      }, 1000);
    },
  },
  // 前端
  {
    type: "frontEnd",
    handler: () => {
      isShowLabCard.value = false;
      groupType.value = "frontEnd";
    },
  },
  // 后台
  {
    type: "backEnd",
    handler: () => {
      isShowLabCard.value = false;
      groupType.value = "backEnd";
    },
  },
  // 安卓
  {
    type: "Android",
    handler: () => {
      isShowLabCard.value = false;
      groupType.value = "Android";
    },
  },
  // 深度学习
  {
    type: "deepLearning",
    handler: () => {
      isShowLabCard.value = false;
      groupType.value = "deepLearning";
    },
  },
  // UI
  {
    type: "UI",
    handler: () => {
      isShowLabCard.value = false;
      groupType.value = "UI";
    },
  },
  // 小组切换到工作室
  {
    type: "lab",
    handler: () => {
      isShowLabCard.value = true;
      isShowGroupCard.value = false;
      groupType.value = undefined;
    },
  },
  // 工作室切换到表单
  {
    type: "labToForm",
    handler: () => {
      isShowLabCard.value = false;
      isShowTabBar.value = false;
      isShowWelcome.value = false;
      isDisableTabBar.value = true;
      isShowForm.value = true;
    },
  },
  // 表单切换到工作室
  {
    type: "formToLab",
    handler: () => {
      isShowLabCard.value = true;
      isShowTabBar.value = true;
      isShowWelcome.value = true;
      isDisableTabBar.value = false;
      isShowForm.value = false;
    },
  },
];
const switchTab = (type: TabBarListType) => {
  isShowLabCard.value = false;
  isShowGroupCard.value = false;
  isShowTabBar.value = false;
  isDisableTabBar.value = true;
  const route = routes.find(({ type: routeType }) => routeType === type);
  setTimeout(() => {
    isShowGroupCard.value = true;
    isShowTabBar.value = true;
    route?.handler();
  }, 300);
  setTimeout(() => {
    isDisableTabBar.value = false;
  }, 500);
};
</script>

<style lang="scss">
.index {
  position: relative;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  &__item {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &__tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
  }
  &__form {
    width: 100vw;
    height: 100vh;
  }
}
.background-image {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
}
.hide-component {
  opacity: 0;
}
</style>
