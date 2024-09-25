// 权限相关的 api
import Taro from '@tarojs/taro';
export const TOKENKEY: string = 'X-Access-Token'  // token 名
// const { getStorageSync: getStorage, setStorageSync: setStorage, removeStorageSync: removeStorage } = Taro;

export const getToken = () => Taro.getStorageSync(TOKENKEY)
export const setToken = (token: any) => Taro.setStorageSync(TOKENKEY, token)
export const removeToken = () => Taro.removeStorageSync(TOKENKEY)
