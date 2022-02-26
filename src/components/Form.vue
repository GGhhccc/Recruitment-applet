<template>
  <view class="form" v-if="isShowForm">
    <view class="form_main">
      <!-- 名字-->
      <view class="form_main_name form_main_view">
        <input
          v-model="formData.name"
          type="text"
          class="form_main_name form_main_input"
          placeholder="名字"
          maxlength="10"
        />
      </view>
      <!--学号-->
      <view class="form_main_id form_main_view">
        <input
          v-model="formData.id"
          type="text"
          class="form_main_id_edit form_main_input"
          placeholder="学号"
        />
      </view>
      <!--学院专业 -->
      <view class="form_main_major form_main_view">
        <input
          v-model="formData.major"
          type="text"
          class="form_main_major_edit form_main_input"
          placeholder="**学院**专业"
        />
      </view>
      <!-- 所选方向-->
      <view class="form_main_direction form_main_view">
        <span
          :class="directionClass"
          v-for="(item, index) in directionList"
          :key="index"
          @click="chooseDirection(item)"
          >{{ item }}</span
        >
      </view>
      <!--手机号 -->
      <view class="form_main_phone form_main_view">
        <input
          v-model="formData.phone"
          type="text"
          class="form_main_phone_edit form_main_input"
          placeholder="手机号"
        />
      </view>
      <!-- 自我介绍 -->
      <view class="form_main_introduction">
        <textarea
          v-model="formData.introduction"
          class="form_main_introduction_content"
          placeholder="自我介绍(不超过100字)"
          maxlength="100"
        ></textarea>
      </view>
      <!-- 所学知识-->
      <view class="form_main_learned form_main_view">
        <input
          v-model="formData.learned"
          class="form_main_learned_edit form_main_input"
          placeholder="所学知识"
          maxlength="20"
        />
      </view>
      <!-- 项目经历-->
      <view class="form_main_experience">
        <textarea
          v-model="formData.experience"
          class="form_main_experience_content"
          placeholder="项目经历"
          maxlength="100"
        ></textarea>
      </view>
      <!-- 计划-->
      <view class="form_main_feature">
        <textarea
          v-model="formData.future"
          class="form_main_featire_content"
          placeholder="未来计划"
          maxlength="100"
        ></textarea>
      </view>
      <!-- 看法-->
      <view class="form_main_perspective">
        <textarea
          v-model="formData.perspective"
          class="form_main_perspective_content"
          maxlength="100"
          placeholder="你的看法"
        ></textarea>
      </view>
      <!-- 问题-->
      <view class="form_main_question">
        <textarea
          v-model="formData.question"
          class="form_main_question_content"
          maxlength="100"
          placeholder="问题"
        ></textarea>
      </view>
      <!--报名按钮-->
      <view class="form_main_submit" @click="formCheck() && postQuest()">
        <public-button
          class="form_main_submit_btn"
          @click="formCheck() && postQuest()"
          :disabled="isApplyed"
          >{{ btnText }}</public-button
        >
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
/**
 * @author olddog
 * @description 表单组件
 * @date 2022-02-22 16:08
 */
import { computed, reactive, ref } from "vue";
import { submitForm } from "../api/formUpdate";
import PublicButton from "./PublicButton.vue";

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
//所选方向数组
const directionList = ref(["前端", "后台", "深度学习", "安卓", "UI"]);
const directionClass = ref("form_main_direction_item");
const btnText = ref("提交报名"); //报名按钮的文字
const isAgain = ref(false); //是否重新选择方向
const isApplyed = ref(false); //是否报名成功
const props = defineProps({
  disabled: Boolean,
});
const isShowForm = computed(() => (props.disabled as boolean) || false); //是否显示报名组件报名组件 默认不展示

/**
 * @description 表单验证
 * @returns 表单是否有错误
 */
const formCheck = () => {
  const phoneReg = /^1[3-9]\d{9}$/; //手机号验证
  const idReg = /^3\d{9}$/; //本科生3开头
  //验证提错信息
  const errorList = [
    {
      handler: !formData.name,
      errorMsg: "姓名为空",
    },
    {
      handler: !idReg.test(formData.id),
      errorMsg: "学号格式错误",
    },

    {
      handler: !formData.major,
      errorMsg: "专业班级为空",
    },
    {
      handler: !formData.direction,
      errorMsg: "选择方向为空",
    },
    {
      handler: !phoneReg.test(formData.phone as string),
      errorMsg: "手机格式错误",
    },
    {
      handler: !formData.introduction,
      errorMsg: "个人介绍为空",
    },
    {
      handler: !formData.learned,
      errorMsg: "所学知识为空",
    },
    {
      handler: !formData.experience,
      errorMsg: "项目经验为空",
    },
    {
      handler: !formData.future,
      errorMsg: "未来期望为空",
    },
    {
      handler: !formData.perspective,
      errorMsg: "看法为空",
    },
  ];
  const { errorMsg } = errorList.find((item) => item.handler) || {}; //判断是否出现表单错误
  if (errorMsg) {
    uni.showModal({
      title: errorMsg,
    });
    return false;
  }
  return true;
};
//选择方向
const chooseDirection = (direction: string) => {
  isAgain.value = !isAgain.value;
  directionList.value =
    isAgain.value == true
      ? [direction]
      : ["前端", "后台", "深度学习", "安卓", "UI"];
  formData.direction = isAgain.value == true ? direction : "";
  directionClass.value =
    isAgain.value == true
      ? "form_main_direction_item-choosed"
      : "form_main_direction_item";
};
//报名成功返回主界面
const backHome = (result: boolean) => {
  uni.$emit("backToWatch", result);
};
//报名
const postQuest = () => {
  uni.showLoading({
    title: "报名中",
  });
  submitForm(formData)
    .then(() => {
      uni.hideLoading();
      uni.showToast({
        title: "报名成功!",
      });
      btnText.value = "报名成功";
      isApplyed.value = true;
      backHome(true); //报名成功抛出事件
    })
    .catch(() => {
      return uni.showToast({
        title: "网络错误!",
      });
    });
};
</script>
<style lang="scss" scoped>
.form {
  width: 562rpx;
  margin: auto;

  &_main {
    width: 100%;
    color: #a19ec3;

    &_view {
      width: 100%;
      height: 36px;
      border-radius: 20px;
      line-height: 36px;
      box-shadow: 0px 4px 6px 6px rgba(217, 199, 255, 0.6);
      margin: 20px auto;
      padding-left: 10px;
      line-height: 36px;
      padding-top: 10px;
      background: rgb(255, 255, 255, 0.6);
      &_span {
        margin-left: 8px;
        font-size: 16px;
      }
      &_input {
        font: bold 16px OPPOSans;
        color: #a19ec3;
        margin-top: 5px;
        display: inline-block;
      }
    }
    &_direction {
      background: rgb(255, 255, 255, 0.6);
      padding-top: 0;
      &_item {
        display: inline-block;

        text-align: center;
        padding: 1px 15rpx 1px 15rpx;
        margin: 0 4rpx;
        border-radius: 20px;
        background: rgb(240, 240, 241, 0.6);
      }
      &_item-choosed {
        display: inline-block;
        text-align: center;
        margin: 0 2%;
        border-radius: 20px;
        background: rgba(217, 199, 255, 0.6);
        color: white;
        padding: 2px 20rpx 2px 20rpx;
      }
    }
    &_introduction,
    &_experience,
    &_feature,
    &_perspective,
    &_question {
      width: 100%;
      background: rgb(255, 255, 255, 0.6);
      border-radius: 20px;
      line-height: 36px;
      box-shadow: 0px 4px 6px 6px rgba(217, 199, 255, 0.6);
      margin: 20px auto;
      padding-left: 10px;
      padding-top: 10px;
      &_content {
        height: 100px;
        width: 95%;
      }
    }
  }
}
</style>
