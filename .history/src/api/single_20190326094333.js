import { axios } from '@/utils/request'

const api = {
  adAndFireWall: '/adAndFireWall',
  ehtsecServer: '/ehtsecServer',
  ehtsecServerAnalysis: '/ehtsecServerAnalysis',
  llzxServerAnalysis: '/llzxServerAnalysis',
  llhlwxServerAnalysis: '/llhlwxServerAnalysis',
  ehtsecState: '/ehtsec/state',
  ehtsecLine: '/ehtsec/line',
  succState: '/succ/state',
  succLine: '/succ/line'
}

export default api

export function adAndFireWall() {
  return axios({
    url: api.adAndFireWall,
    method: 'get',
    params: ''
  })
}

export function ehtsecServer() {
  return axios({
    url: api.ehtsecServer,
    method: 'get',
    params: ''
  })
}

export function ehtsecServerAnalysis() {
  return axios({
    url: api.ehtsecServerAnalysis,
    method: 'get',
    params: ''
  })
}

export function llzxServerAnalysis() {
  return axios({
    url: api.llzxServerAnalysis,
    method: 'get',
    params: ''
  })
}

export function llhlwxServerAnalysis() {
  return axios({
    url: api.llhlwxServerAnalysis,
    method: 'get',
    params: ''
  })
}

export function ehtsecState() {
  return axios({
    url: api.ehtsecState,
    method: 'get',
    params: ''
  })
}

export function ehtsecLine() {
  return axios({
    url: api.ehtsecLine,
    method: 'get',
    params: ''
  })
}

export function succState() {
  return axios({
    url: api.succState,
    method: 'get',
    params: ''
  })
}

export function succLine() {
  const param = {
    end: '1553529600'
    start: '1553562852',
  }
  return axios({
    url: api.succLine,
    method: 'get',
    params: param
  })
}