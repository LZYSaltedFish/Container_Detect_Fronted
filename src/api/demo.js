import { request } from '@/api/_service.js'

/**
 * @description 上传图片
 * @param file 文件
 */
export function UPLOAD_IMAGE (params = {}) {
  // 接口请求
  return request({
    url: '/upload',
    method: 'post',
    data: params
  })
}