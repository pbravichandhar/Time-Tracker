/**
 *
 * API
 *
 */

import { create } from 'axios'

const axiosInstance = create({
  baseURL: 'http://ec2-18-212-206-46.compute-1.amazonaws.com:7077/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

function postApi (endpoint, data) {
  return axiosInstance
    .post(endpoint, data)
    .then(function (res) {
      return res
    })
    .catch(function (error) {
      return error
    })
}

export const ApiService = {
  postApi
}
