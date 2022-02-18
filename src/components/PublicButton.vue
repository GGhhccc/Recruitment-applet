<template>
  <button class="button">
    <slot>一个按钮</slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  color?: string;
}
const props = withDefaults(defineProps<Props>(), {
  color: "#5379FF99",
});
</script>

<style lang="scss">
.button {
  width: 228rpx;
  height: 44px;
  line-height: 44px;
  border: 2rpx solid #ffffff;
  border-radius: 10px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #dfc1fd 0%,
    rgba(223, 193, 253, 0) 100%
  );
  font-family: OPPOSans;
  font-size: 18px;
  color: v-bind("props.color");
}
</style>
