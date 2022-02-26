import { requestIntercaptor } from "./interceptor";
/**
 * @author olddog
 * @description 请求封装
 * @date 2022-02-21 15:10
 */
type RequestTaskThen = Omit<UniApp.RequestTask, "then">;
interface ExtendRequestTask<T> extends RequestTaskThen {
  then: (
    onFulfilled?: (fulfillVal: { data:any}) => void,
    onRejected?: () => void
  ) => Promise<any>;
}



const service = <T>(options: UniApp.RequestOptions) => {
  let baseUrl:string = '';
  options.url = baseUrl + options.url;
  options.timeout = 6000;//设置请求超时为6s
  // 请求拦截器在这里加入
  options = requestIntercaptor(options);

  return uni.request(options) as ExtendRequestTask<T>;
};
export default service;
