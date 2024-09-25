import Taro from '@tarojs/taro';
import type { RequestOptions } from './requestInterface';
import { stringify } from 'qs'
import successHandler from './successHandler';
import { requestError, responseIntercept } from './errorHandler';
import { TOKENKEY, getToken } from '@/utils';

export default function request<T>(options: RequestOptions): Promise<T>{
  const { url, headers = {}, data, withToken, ...rest } = {withToken: true, ...options}
  const newOptions: Record<string, any> = {
      credentials: 'include',
      method: 'POST',
      header: headers || {Accept: 'application/json'},
      data,
      ...rest
  }

  if (['POST', 'PUT'].includes(newOptions.method)) {
      if (newOptions.body) {
          newOptions.header = Object.assign({
              Accept: 'application/json',
              'Content-Type': 'application/json; charset=utf-8',
          }, headers)
      } else {
          newOptions.header = Object.assign({
              Accept: 'application/json',
          },headers)
      }
  }
  const requestUrl = !['GET'].includes(newOptions.method) ? url : `${url}?${stringify(data)}`;
  
  (getToken() && withToken) && Object.assign(newOptions.header, {
      [TOKENKEY]: getToken()
  })
  return Taro.request({ ...newOptions, url: requestUrl })
         .then(responseIntercept)
         .then((source: RequestOptions) => successHandler(source, newOptions as any))
         .catch((error: any) => requestError(error, newOptions as any))
}
