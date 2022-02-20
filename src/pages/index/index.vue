<template>
  <view class="safe-area">
    <GroupToIntroduction :cardName="cardName" />
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue";
import GroupToIntroduction from "../../components/GroupToIntroduce";
const cardName = ref("backEnd"); //"Android"、"deepLearning”、"UI"、"backEnd"、"lab"、"frontEnd";输入不同名称切换组件
</script>

<style></style>
