import { request } from '@/api/_service.js'

/**
 * @description 上传文件
 * @param file 文件
 * @param file_type 文件类型
 */
export function GET_DATA (params = {}) {
  // 接口请求
  return request({
    url: '/user',
    method: 'get',
    params: params
  })
}