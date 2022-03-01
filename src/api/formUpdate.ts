/**
 * @author olddog
 * @description 提交表单
 * @date 2022-02-21 15:22
 */
import service from "../network/service";

interface FormRequest {
  id: string;
  name: string;
  major: string; //专业班级
  direction: string; //选择方向 单选
  phone: string;
  introduction: string; //自我介绍 不超过50字
  learned: string; //所学东西 不超过50字
  experience: string;
  future: string;
  perspective: string; //看法
  question: string;
}
export function submitForm(params: FormRequest) {
  return service({
    url: "https://www.tkoath.top/add",
    method: "POST",
    data: JSON.stringify(params),
  });
}

export function checkState() {
  return service({
    url: "https://www.tkoath.top/state",
  });
}
