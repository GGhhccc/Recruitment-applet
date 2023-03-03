<template>
  <button class="button" @click="!props.disabled && $emit('click')">
    <slot>一个按钮</slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  color?: string;
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  color: "#5379FF99",
  disabled: false,
});
defineEmits<{
  (e: "click"): void;
}>();
</script>

<style lang="scss">
.button {
  width: 228rpx;
  height: 88rpx;
  line-height: 88rpx;
  border: 2rpx solid #ffffff;
  border-radius: 10px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #dfc1fd 0%,
    rgba(223, 193, 253, 0) 100%
  );
  font-family: Monospaced Number,Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif!important;
  font-size: 38rpx;
  color: v-bind("props.color");
  box-sizing: border-box;
}
</style>
