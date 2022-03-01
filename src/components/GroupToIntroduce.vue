<template>
  <div class="introduction-card" v-if="show.isIntroduction">
    <div class="introduction-card_1" v-if="!show.isDeepLearing">
      <div class="introduction-card_1--back"></div>
      <div class="introduction-card_1--front">
        <FrontEnd v-if="show.showList[0].isShow" />
        <BackEnd v-if="show.showList[1].isShow" />
        <Android v-if="show.showList[3].isShow" />
        <UI v-if="show.showList[2].isShow" />
      </div>
    </div>
    <div class="introduction-card_2" v-if="show.isDeepLearing">
      <div class="introduction-card_2--back"></div>
      <div class="introduction-card_2--front">
        <DeepLearning v-if="show.showList[4].isShow" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * @description 小组卡片介绍组件
 * @author 梁国昊
 * @date 2022/2/22
 */

// 引入前端卡片
import FrontEnd from "./CardBackground/FrontEnd.vue";

// 引入后台卡片
import BackEnd from "./CardBackground/BackEnd.vue";

// 引入安卓卡片
import Android from "./CardBackground/Android.vue";

// 引入UI卡片
import UI from "./CardBackground/UI.vue";

// 引入深度学习卡片
import DeepLearning from "./CardBackground/DeepLearning.vue";

import { reactive, watch } from "vue";

interface ShowList {
  name: "Android" | "deepLearning" | "UI" | "backEnd" | "lab" | "frontEnd";
  isShow: boolean;
}

interface Show {
  isDeepLearing: Boolean;
  isIntroduction: Boolean;
  showList: Array<ShowList>;
}

const props = defineProps({ cardName: { type: String } });
const show: Show = reactive({
  isDeepLearing: false,
  isIntroduction: true,
  showList: [
    {
      name: "frontEnd",
      isShow: true,
    },
    {
      name: "backEnd",
      isShow: false,
    },
    {
      name: "UI",
      isShow: false,
    },
    {
      name: "Android",
      isShow: false,
    },
    {
      name: "deepLearning",
      isShow: false,
    },
  ],
});

// 控制小组介绍卡片显示与隐藏
function controlShow() {
  show.showList.map((item: ShowList): void => {
    if (props.cardName === item.name) {
      item.isShow = true;
      if (props.cardName === "deepLearning") {
        show.isDeepLearing = true;
      } else {
        show.isDeepLearing = false;
      }
    } else {
      item.isShow = false;
    }
  });
}

// 判断是否为小组介绍卡片
const controlIsIntroduceCard = () => {
  if (
    show.showList.find((item) => item.name === props.cardName) !== undefined
  ) {
    show.isIntroduction = true;
    controlShow();
  } else {
    show.isIntroduction = false;
  }
};

// 立即调用判断卡片函数
controlIsIntroduceCard();

// 监听卡片名称变更
watch(
  () => props.cardName,
  () => {
    controlIsIntroduceCard();
  }
);
</script>

<style lang="scss">
.introduction-card {
  margin: 50px;
  &_1,
  &_2 {
    position: relative;
    &--back,
    &--front {
      width: 446.86rpx;
      height: 685.34rpx;
    }
    &--back {
      border: 4rpx solid #f6c0ff;
      box-sizing: border-box;
      border-radius: 72rpx;
    }
    &--back {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-8%, 6%);

      box-sizing: border-box;
      border-radius: 72rpx;
    }
  }

  &_2 {
    &--back {
      transform: translate(-8%, -5%);
    }
  }
}
</style>
