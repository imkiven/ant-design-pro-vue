import { axios } from '@/utils/request'

const api = {
  adAndFireWall: '/adAndFireWall',
  ehtsecServer: '/ehtsecServer',
  ehtsecServerAnalysis: '/ehtsecServerAnalysis',
  llzxServerAnalysis: '/llzxServerAnalysis',
  llhlwxServerAnalysis: '/llhlwxServerAnalysis'
  ehtsec: '/ehtsec/state'
  llhlwxServerAnalysis: '/ehtsec/getLine'
}

export default api

export function adAndFireWall () {
  return axios({
    url: api.adAndFireWall,
    method: 'get',
    params: ''
  })
}

export function ehtsecServer () {
  return axios({
    url: api.ehtsecServer,
    method: 'get',
    params: ''
  })
}

export function ehtsecServerAnalysis () {
  return axios({
    url: api.ehtsecServerAnalysis,
    method: 'get',
    params: ''
  })
}

export function llzxServerAnalysis () {
  return axios({
    url: api.llzxServerAnalysis,
    method: 'get',
    params: ''
  })
}

export function llhlwxServerAnalysis () {
  return axios({
    url: api.llhlwxServerAnalysis,
    method: 'get',
    params: ''
  })
}