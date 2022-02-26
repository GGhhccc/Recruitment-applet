<template>
  <view class="safe-area">
    <GroupToIntroduce :cardName="cardName"></GroupToIntroduce>
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue";
import GroupToIntroduce from "../../components/GroupToIntroduce";
const cardName = ref("UI");
</script>

<style></style>
