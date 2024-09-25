import { codeMessage } from './requestInterface';
import type { RequestOptions } from './requestInterface';
import Taro from '@tarojs/taro';

export function requestError(error: any = {}, requestOptions: RequestOptions) {
  const { status } = error;
  if (status >= 404 && status < 422) {
    console.log('请求接口不存在');
  }
  const { disableCommonSuccessHandler, errorHandler } = requestOptions;
  if (!disableCommonSuccessHandler) {
    const errortext = codeMessage[error.status] || error.statusText;
  }
  if (errorHandler) {
    errorHandler(error, requestOptions);
  }
}

export function codeError(source: any = {}, requestOptions: RequestOptions) {
  const { code, msg, message: dvmMsg } = source;
  const { codeErrorTipMsgMap, disableCommonErrorHandler } = requestOptions;
  if (disableCommonErrorHandler) {
    return source;
  }
  const errorTipMap: any = { ...codeErrorTipMsgMap };
  const errorMsg: string = errorTipMap[code] || msg || dvmMsg || JSON.stringify(source);
  // isBrowser() && message.error(errorMsg)
  // console.log('xxxxx', errorMsg)
  errorMsg && Taro.showToast({ title: errorMsg, icon: 'none'})
  return source;
}

export function responseIntercept(response: any) {
    console.log('-------->', response)
  const {statusCode, error} = response

  if (statusCode < 200 || statusCode > 399) {
    Taro.showToast({ title: `httpCode: ${statusCode}, 错误信息: ${response?.data?.error}`, icon: 'none'})
  }
  return response.data
}