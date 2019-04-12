import { axios } from '@/utils/request'

const api = {
  // monitor01
  adAndFireWall: '/adAndFireWall',
  ehtsecServer: '/ehtsecServer',
  ehtsecServerAnalysis: '/ehtsecServerAnalysis',
  llzxServerAnalysis: '/llzxServerAnalysis',
  llhlwxServerAnalysis: '/llhlwxServerAnalysis',
  // internet
  ehtsecState: '/ehtsec/state',
  ehtsecLine: '/ehtsec/line',
  ehtsecWaitline: '/ehtsec/waitline',
  ehtsecBase: '/ehtsec/base',

  ehtsecPCState: '/ehtsecPC/state',
  ehtsecPCLine: '/ehtsecPC/line',
  ehtsecPCWaitline: '/ehtsecPC/waitline',
  ehtsecPCBase: '/ehtsecPC/base',

  // middleOffice
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

export function ehtsecWaitline() {
  return axios({
    url: api.ehtsecWaitline,
    method: 'get',
    params: ''
  })
}

export function ehtsecBase() {
  return axios({
    url: api.ehtsecBase,
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
    start: '1553529600',
    end: '1553562852'
  }
  return axios({
    url: api.succLine,
    method: 'get',
    params: param
  })
}
