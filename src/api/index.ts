import request from "@/plugins/request"

const BaseUrl = 'https://mock.mengxuegu.com/mock/6253dd7c560e3d1eabd76a57'

export const testApi = () => request({
    url: `${BaseUrl}/customer/knowledgeBase/hot`,
    method: 'GET'
})
