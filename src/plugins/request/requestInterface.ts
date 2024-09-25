// http code maps
export const codeMessage: {[code: string]: string} = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  
    3101: 'session过期',
    3102: '页面无权限',
  };
  
  // 业务code maps
  export const businessCodeMsg: {[code: string]: string} = {
    200: '操作成功',
    401: '非法访问',
    403: '没有权限',
    404: '你请求的资源不存在',
    500: '操作失败',
    4000: '登陆失败,请检查账号密码',
    5000: '系统异常',
    /** 参数校验级Code: 5001 - 6000 */
    5001: '请求参数校验异常',
    /** 业务级Code: 6001 - 7000 */
    6001: '未授权，请先授权再访问',
    6003: '该账号已被注册',
    6004: '账号过期',
    6005: '请求无效，没有有效token',
    6011: '修改密码失败，传入的新密码不正确，请重新获取',
    6012: '修改密码失败，请检查原密码',
  }
  
  export interface RequestOptions {
    url: string;
    data?: any;
    method?: 'GET' | 'POST' | 'DELETE' | 'PUT';
    headers?: {[key: string]: string};
    body?: any;
    credentials?: string;
    withToken?: boolean;
    responseType? : string;
    disableCommonErrorHandler?: true;
    disableCommonSuccessHandler?: true;
    codeErrorTipMsgMap?: {[key: string]: string};
    successTipMsg?: string;
    successHandler?: (response: any, requestOptions: RequestOptions) => null;
    errorHandler?: (response: any, requestOptions: RequestOptions) => null;
  }
  
  export interface ResponseData {
    code?: number;
    data?: any;
    msg?: string;
    message?: string;
    success?: boolean;
  }
  
  