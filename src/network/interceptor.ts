// 配置拦截器
/**
 * @author olddog
 * @description  请求拦截器设置 无登录功能
 * @date 2022-02-21 14:59
 */

// 请求拦截
export const requestIntercaptor = (options: UniApp.RequestOptions) => {
  return options;
};
// 响应拦截
const responseIntercaptor = ({ data }: { data: any }) => {
  const code = parseInt(data.code as string);
  switch (code) {
    case 101:
      uni.showToast({
        title: "报名已截止",
      });
      break;
    case 200:
      break;
    default:
      uni.showToast({
        title: "",
      });
      break;
  }
};

// 错误拦截
// 请求超时的情况在这里拦截
const errorIntercaptor = () => {
  uni.showToast({
    title: "请求超时，稍后再试试吧~",
  });
};

uni.addInterceptor("request", {
  fail() {
    errorIntercaptor();
  },
  success(res) {
    responseIntercaptor(res);
  },
});
