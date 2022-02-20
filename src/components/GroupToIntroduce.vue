<template>
  <div class="introduction-card">
    <div class="introduction-card-1" v-if="!show.isDeepLearing">
      <div class="introduction-card-1-back"></div>
      <div class="introduction-card-1-front">
        <FrontEnd v-if="show.showList[0].isShow" />
        <BackEnd v-if="show.showList[1].isShow" />
        <Android v-if="show.showList[3].isShow" />
        <UI v-if="show.showList[2].isShow" />
      </div>
    </div>
    <div class="introduction-card-2" v-if="show.isDeepLearing">
      <div class="introduction-card-2-back"></div>
      <div class="introduction-card-2-front">
        <DeepLearning v-if="show.showList[4].isShow" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FrontEnd from "./CardBackground/FrontEnd";
import BackEnd from "./CardBackground/BackEnd";
import Android from "./CardBackground/Android";
import UI from "./CardBackground/UI";
import DeepLearning from "./CardBackground/DeepLearning";
import { reactive } from "vue";

interface ShowList {
  name: String;
  isShow: Boolean;
}

interface Show {
  isDeepLearing: Boolean;
  showList: Array<ShowList>;
}

const props = defineProps({ cardName: { type: String } });
const show: Show = reactive({
  isDeepLearing: false,
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

show.showList.map((item: ShowList): void => {
  if (props.cardName === item.name) {
    item.isShow = true;
    if (props.cardName === "DeepLearning") {
      show.isDeepLearing = true;
    } else {
      show.isDeepLearing = false;
    }
  } else {
    item.isShow = false;
  }
});
</script>

<style lang="scss">
.introduction-card {
  &-1,
  &-2 {
    position: relative;
    top: 50px;
    left: 50px;
    &-back {
      width: 243.43px;
      height: 372.67px;
      border: 2px solid #f6c0ff;
      box-sizing: border-box;
      border-radius: 36px;
    }
    &-front {
      position: absolute;
      top: -42.17rpx;
      left: 49.97rpx;
      width: 243.43px;
      height: 372.67px;

      // border: 1px solid rgba(217, 199, 255, 0.6);
      box-sizing: border-box;
      border-radius: 36px;
      // transform-style: preserve-3d;
      // transition: 2s;
    }
    // &-front:hover {
    //   transform: rotateY(180deg);
    // }
  }

  &-2 {
    &-front {
      top: 44.83rpx;
      left: 39.97rpx;
    }
  }
}
</style>
