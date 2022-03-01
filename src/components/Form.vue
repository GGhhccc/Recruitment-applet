<template>
  <view
    class="form"
    :style="{
      opacity: props.isShow ? '1' : '0',
      position: props.isShow ? 'absolute' : 'fixed',
      transition: props.isShow ? 'opacity 0.5s' : 'opacity 0s',
    }"
  >
    <view class="form__title">加入我们</view>
    <view v-if="!props.isShow" class="form__mask"></view>
    <view class="form_main">
      <!-- 名字-->
      <view class="form_main_name form_main_view">
        <input
          v-model.trim="formData.name"
          type="text"
          class="form_main_name form_main_view_input"
          placeholder="名字"
          placeholder-class="form_main_placeholder-class"
          maxlength="10"
          :disabled="!props.isShow"
        />
      </view>
      <!--学号-->
      <view class="form_main_id form_main_view">
        <input
          v-model.trim="formData.id"
          type="text"
          class="form_main_id_edit form_main_view_input"
          placeholder="学号"
          placeholder-class="form_main_placeholder-class"
          maxlength="10"
          :disabled="!props.isShow"
        />
      </view>
      <!--学院专业 -->
      <view class="form_main_major form_main_view">
        <input
          v-model.trim="formData.major"
          type="text"
          class="form_main_major_edit form_main_view_input"
          placeholder="学院专业"
          placeholder-class="form_main_placeholder-class"
          :disabled="!props.isShow"
        />
      </view>
      <!-- 所选方向-->
      <view class="form_main_direction">
        <text class="form_main_direction_title">方向</text>
        <view class="form_main_direction_list">
          <view
            v-for="item in directionList"
            :class="{
              form_main_direction_list_item: true,
              'form_main_direction_list_item-choosed':
                formData.direction === item,
            }"
            :style="{
              'box-shadow':
                formData.direction !== item
                  ? '0 8rpx 16rpx 8rpx rgba(217, 199, 255, 0.6)'
                  : 'none',
            }"
            :key="item"
            @click="props.isShow && (formData.direction = item)"
            >{{ item }}</view
          ></view
        >
      </view>
      <!--手机号 -->
      <view class="form_main_phone form_main_view">
        <input
          v-model.trim="formData.phone"
          type="number"
          class="form_main_phone_edit form_main_view_input"
          placeholder="手机号"
          placeholder-class="form_main_placeholder-class"
          maxlength="11"
          :disabled="!props.isShow"
        />
      </view>
      <!-- 自我介绍 -->
      <view class="form_main_introduction">
        <textarea
          v-model.trim="formData.introduction"
          class="form_main_introduction_content"
          placeholder="一段简短的自我介绍~"
          placeholder-class="form_main_placeholder-class"
          maxlength="200"
          :disabled="!props.isShow"
        ></textarea>
      </view>
      <!-- 所学知识-->
      <view class="form_main_learned form_main_introduction">
        <textarea
          v-model.trim="formData.learned"
          class="form_main_learned_edit form_main_introduction_content"
          placeholder="你有什么计算机或与所选方向相关的知识储备吗"
          placeholder-class="form_main_placeholder-class"
          maxlength="200"
          :disabled="!props.isShow"
        ></textarea>
      </view>
      <!-- 项目经历-->
      <view class="form_main_experience">
        <textarea
          v-model.trim="formData.experience"
          class="form_main_experience_content"
          placeholder="有尝试过用所学知识实现一些小成果吗？（或者参加过比赛吗?）"
          placeholder-class="form_main_placeholder-class"
          maxlength="100"
          :disabled="!props.isShow"
        ></textarea>
      </view>
      <!-- 计划-->
      <view class="form_main_feature">
        <textarea
          v-model.trim="formData.future"
          class="form_main_feature_content"
          placeholder="有职业规划吗：考研？就业？其它？"
          placeholder-class="form_main_placeholder-class"
          maxlength="100"
          :disabled="!props.isShow"
        ></textarea>
      </view>
      <!-- 看法-->
      <view class="form_main_perspective">
        <textarea
          v-model.trim="formData.perspective"
          class="form_main_perspective_content"
          maxlength="100"
          placeholder="你为什么想加入数智工作室？"
          placeholder-class="form_main_placeholder-class"
          :disabled="!props.isShow"
        ></textarea>
      </view>
      <!-- 问题-->
      <view class="form_main_question">
        <textarea
          v-model.trim="formData.question"
          class="form_main_question_content"
          maxlength="100"
          placeholder="你还存在哪些疑问？（选填）"
          placeholder-class="form_main_placeholder-class"
          :disabled="!props.isShow"
        ></textarea>
      </view>
    </view>
    <view class="form_buttons">
      <PublicButton :color="'#5D616F99'" @click="$emit('click')"
        >回去看看</PublicButton
      >
      <PublicButton
        class="form_submit-button"
        :color="'#2F5DFF99'"
        @click="formCheck() && postQuest()"
        :disabled="isApplyed"
        >{{ btnText }}</PublicButton
      >
    </view>
  </view>
</template>

<script setup lang="ts">
/**
 * @author olddog
 * @description 表单组件
 * @date 2022-02-22 16:08
 */
import { reactive, ref } from "vue";
import { submitForm } from "../api/formUpdate";
import PublicButton from "./PublicButton.vue";

const props = defineProps<{
  isShow: boolean;
}>();
defineEmits<{
  (e: "click"): void;
}>();

const formData = reactive({
  id: "",
  name: "",
  major: "",
  direction: "",
  phone: "",
  introduction: "",
  learned: "",
  experience: "",
  future: "",
  perspective: "",
  question: "",
});
const directionList = ["前端", "后台", "安卓", "深度学习", "UI"];
const btnText = ref("确认提交"); //报名按钮的文字
const isApplyed = ref(false); //是否报名成功

const formCheck = () => {
  const phoneReg = /^1[3-9]\d{9}$/; //手机号验证
  //验证提错信息
  const errorList = [
    {
      handler: !formData.name,
      errorMsg: "请输入你的名字",
    },
    {
      handler: !formData.id,
      errorMsg: "请输入你的学号",
    },
    {
      handler: !formData.major,
      errorMsg: "请输入你的学院专业",
    },
    {
      handler: !formData.direction,
      errorMsg: "请选择你的方向",
    },
    {
      handler: !phoneReg.test(formData.phone as string),
      errorMsg: "手机格式错误",
    },
    {
      handler: !formData.introduction,
      errorMsg: "自我介绍不能为空哦",
    },
    {
      handler: !formData.learned,
      errorMsg: "请描述所学知识，没有请填无",
    },
    {
      handler: !formData.experience,
      errorMsg: "请描述相关经历，没有请填无",
    },
    {
      handler: !formData.future,
      errorMsg: "请描述一下未来规划，没有请填无",
    },
    {
      handler: !formData.perspective,
      errorMsg: "请描述加入工作室的理由",
    },
  ];
  const { errorMsg } = errorList.find((item) => item.handler) || {}; //判断是否出现表单错误
  if (errorMsg) {
    uni.showToast({
      title: errorMsg,
      icon: "none",
    });
    return false;
  }
  return true;
};

//报名
const postQuest = () => {
  uni.showToast({
    title: "正在提交",
    icon: "none",
  });
  submitForm(formData).then(() => {
    uni.showToast({
      title: "报名成功！",
      icon: "none",
    });
    btnText.value = "已报名";
    isApplyed.value = true;
  });
};
</script>

<style lang="scss">
.form {
  position: absolute;
  z-index: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: auto;
  font-weight: bold;
  overflow: scroll;
  &__title {
    width: 460rpx;
    height: 180rpx;
    border: 2rpx solid #ffffff;
    border-radius: 20rpx;
    background: radial-gradient(
      50% 50% at 50% 50%,
      #dfc1fd 0%,
      rgba(223, 193, 253, 0) 100%
    );
    font-family: OPPOSans;
    font-size: 36rpx;
    line-height: 180rpx;
    text-align: center;
    letter-spacing: -0.3px;
    color: rgba(47, 93, 255, 0.6);
    box-sizing: border-box;
  }
  &__mask {
    position: absolute;
    z-index: 5;
    width: 562rpx;
    height: 3000rpx;
  }
  &_main {
    display: flex;
    flex-direction: column;
    gap: 40rpx;
    width: 562rpx;
    height: 2520rpx;
    margin-top: 36rpx;
    margin-bottom: 160rpx;
    color: #a19ec3;
    &_view {
      width: 562rpx;
      height: 72rpx;
      border: 1px solid #ffffff;
      border-radius: 40rpx;
      box-shadow: 0 8rpx 16rpx 8rpx rgba(217, 199, 255, 0.6);
      background: rgba(255, 255, 255, 0.6);
      line-height: 72rpx;
      box-sizing: border-box;
      &_input {
        width: 562rpx;
        height: 72rpx;
        padding-left: 30rpx;
        font-family: OPPOSans;
        font-weight: bold;
        font-size: 32rpx;
        line-height: 72rpx;
        letter-spacing: -0.3px;
        color: #a19ec4;
        box-sizing: border-box;
      }
    }
    &_direction {
      display: flex;
      flex-direction: column;
      gap: 40rpx;
      width: 562rpx;
      background: transparent;
      box-sizing: border-box;
      &_title {
        padding-left: 30rpx;
      }
      &_list {
        display: flex;
        gap: 38rpx 46rpx;
        flex-wrap: wrap;
        width: 550rpx;
        &_item {
          padding: 6rpx 32rpx;
          border-radius: 40rpx;
          background: rgba(255, 255, 255, 0.6);
          font-size: 28rpx;
        }
        &_item-choosed {
          background: rgba(217, 199, 255, 0.6);
          color: #fff;
        }
      }
    }
    &_introduction,
    &_experience,
    &_feature,
    &_perspective,
    &_question {
      width: 562rpx;
      height: 254rpx;
      border: 2rpx solid #ffffff;
      border-radius: 40rpx;
      background: rgba(255, 255, 255, 0.6);
      box-shadow: 8rpx 16rpx 8rpx rgba(217, 199, 255, 0.6);
      box-sizing: border-box;
      &_content {
        width: inherit;
        height: 254rpx;
        padding-left: 30rpx;
        padding-top: 20rpx;
        line-height: 72rpx;
        box-sizing: border-box;
      }
    }
    &_placeholder-class {
      font-weight: bold;
      color: #a19ec3;
    }
  }
  &_buttons {
    display: flex;
    justify-content: space-between;
    width: 562rpx;
    margin-bottom: 100rpx;
  }
}
</style>
