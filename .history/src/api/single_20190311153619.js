import { axios } from '@/utils/request'

const api = {
  requirement: '/requirement',
  role: '/role',
  riskOfTrimchange: '/riskOfTrimchange',
  adAndFireWall: '/adAndFireWall',
  ehtsecServer: '/ehtsecServer',
  ehtsecServerAnalysis: 'ehtsecServerAnalysis',
  llzxServerAnalysis: 'llzxServerAnalysis',
  llhlwxServerAnalysis: 'llhlwxServerAnalysis'
}

export default api

export function getUserList (parameter) {
  return axios({
    url: api.requirement + '/all',
    method: 'get',
    params: parameter
  })
}

export function getSystemInfo (parameter) {
  return axios({
    url: api.requirement + '/all?role=运行四部',
    method: 'post',
    data: parameter
  })
}
// id == 0 add     post
// id != 0 update  put
export function getSystemRisk (parameter) {
  return axios({
    url: api.riskOfTrimchange + '/all?role=运行四部',
    method: 'post',
    data: parameter
  })
}

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
