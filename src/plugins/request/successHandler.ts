import Taro from '@tarojs/taro';
import type { ResponseData, RequestOptions } from './requestInterface';
import { codeError } from './errorHandler';
import { removeToken } from '@/utils';
const { redirectTo } = Taro;
// import { message, notification } from 'antd';
// import { isBrowser, removeToken, setHref } from '@utils/util';
// import { stringify } from 'qs';

// 失败 code 码枚举
/**
 * 系统需要兼容 dvm 和云极，两套系统规范可能会有冲突:
 *  1. dvm 规则: code > 0 || code === 500 为失败
 *  2. 云极规则: code !== 200 为失败
 *
*/
const errorCode = [500, 60023]

export default async function (source: ResponseData, requestOptions: RequestOptions) {
  const { withToken, errorHandler, successTipMsg, successHandler, disableCommonSuccessHandler } = requestOptions;
  const { code: businessCode, message: msg, success } = source

  if (businessCode as number < 0 || errorCode.includes(businessCode as any)) { // 业务code 不成功
    if ([-199].includes(businessCode as number)) { // token 过期跳转登陆页
      // if (isBrowser()) {
      //   message.warning({
      //     key: 'tokenTimeOut',
      //     content: '登录已失效，请重新登录',
      //   });
      //   setTimeout(() => {
      //      removeToken()
      //      const { pathname, search } = window?.location || {}
      //      setHref(`/login?${stringify({redirect: pathname + search})}`)
      //   }, 1000)
      //   return
      // }
      setTimeout(() => {
        removeToken()
        withToken && redirectTo({url: '/pages/login/index'})
      }, 1000)
    }
    if (errorHandler) {
      return errorHandler(source, requestOptions);
    }
    return codeError(source, requestOptions);
  }

  if (requestOptions.method !== 'GET' && !disableCommonSuccessHandler) {
    // Toast.success(successTipMsg || '操作成功');
  }
  if (successHandler) {
    return successHandler(source, requestOptions);
  }

  return { ...source, success: true};
}
