import request from '@/utils/request'

/**
 * 发送验证码
 * @param {Object} params
 */
export function sendCode(params) {
  return request({
    url: 'authentication/sms/send',
    method: 'post',
    params: params
  })
}
