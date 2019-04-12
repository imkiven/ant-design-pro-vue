import { axios } from '@/utils/request'

const api = {
  // monitor01
  adAndFireWall: '/adAndFireWall',
  ehtsecServer: '/ehtsecServer',
  ehtsecServerAnalysis: '/ehtsecServerAnalysis',
  llzxServerAnalysis: '/llzxServerAnalysis',
  llhlwxServerAnalysis: '/llhlwxServerAnalysis',
  // monitor02
  wgqspxLine: '/wgqspx/line',
  // internet
  ehtsecState: '/ehtsec/state',
  ehtsecLine: '/ehtsec/line',
  ehtsecWaitline: '/ehtsec/waitline',
  ehtsecBase: '/ehtsec/base',

  ehtsecPCState: '/ehtsecPC/state',
  ehtsecPCLine: '/ehtsecPC/line',
  ehtsecPCWaitline: '/ehtsecPC/waitline',
  ehtsecPCBase: '/ehtsecPC/base',

  tdxState: '/tdx/state',
  tdxLine: '/tdx/line',
  tdxWaitline: '/tdx/waitline',
  tdxBase: '/tdx/base',

  thsState: '/ths/state',
  thsLine: '/ths/line',
  thsWaitline: '/ths/waitline',
  thsBase: '/ths/base',

  // middleOffice
  succState: '/succ/state',
  succLine: '/succ/line'
}

const wangluoService = '/wangluoService17'
const qiquanService = '/qiquanService25'


export default api

export function adAndFireWall() {
  return axios({
    url: wangluoService + api.adAndFireWall,
    method: 'get',
    params: ''
  })
}

export function ehtsecServer() {
  return axios({
    url: wangluoService + api.ehtsecServer,
    method: 'get',
    params: ''
  })
}

export function ehtsecServerAnalysis() {
  return axios({
    url: wangluoService + api.ehtsecServerAnalysis,
    method: 'get',
    params: ''
  })
}

export function llzxServerAnalysis() {
  return axios({
    url: wangluoService + api.llzxServerAnalysis,
    method: 'get',
    params: ''
  })
}

export function llhlwxServerAnalysis() {
  return axios({
    url: wangluoService + api.llhlwxServerAnalysis,
    method: 'get',
    params: ''
  })
}

export function wgqspxLine() {
  return axios({
    url: qiquanService + api.wgqspxLine,
    method: 'get',
    params: ''
  })
}

export function ehtsecState() {
  return axios({
    url: wangluoService + api.ehtsecState,
    method: 'get',
    params: ''
  })
}

export function ehtsecWaitline() {
  return axios({
    url: wangluoService + api.ehtsecWaitline,
    method: 'get',
    params: ''
  })
}

export function ehtsecBase() {
  return axios({
    url: wangluoService + api.ehtsecBase,
    method: 'get',
    params: ''
  })
}

export function ehtsecLine() {
  return axios({
    url: wangluoService + api.ehtsecLine,
    method: 'get',
    params: ''
  })
}

// ehtsec pc 

export function ehtsecPCState() {
  return axios({
    url: wangluoService + api.ehtsecPCState,
    method: 'get',
    params: ''
  })
}

export function ehtsecPCWaitline() {
  return axios({
    url: wangluoService + api.ehtsecPCWaitline,
    method: 'get',
    params: ''
  })
}

export function ehtsecPCBase() {
  return axios({
    url: wangluoService + api.ehtsecPCBase,
    method: 'get',
    params: ''
  })
}

export function ehtsecPCLine() {
  return axios({
    url: wangluoService + api.ehtsecPCLine,
    method: 'get',
    params: ''
  })
}

// tdx

export function tdxState() {
  return axios({
    url: wangluoService + api.tdxState,
    method: 'get',
    params: ''
  })
}

export function tdxWaitline() {
  return axios({
    url: wangluoService + api.tdxWaitline,
    method: 'get',
    params: ''
  })
}

export function tdxBase() {
  return axios({
    url: wangluoService + api.tdxBase,
    method: 'get',
    params: ''
  })
}

export function tdxLine() {
  return axios({
    url: wangluoService + api.tdxLine,
    method: 'get',
    params: ''
  })
}

// tdx

export function thsState() {
  return axios({
    url: wangluoService + api.thsState,
    method: 'get',
    params: ''
  })
}

export function thsWaitline() {
  return axios({
    url: wangluoService + api.thsWaitline,
    method: 'get',
    params: ''
  })
}

export function thsBase() {
  return axios({
    url: wangluoService + api.thsBase,
    method: 'get',
    params: ''
  })
}

export function thsLine() {
  return axios({
    url: wangluoService + api.thsLine,
    method: 'get',
    params: ''
  })
}

// 员工平台
export function succState() {
  return axios({
    url: wangluoService + api.succState,
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
    url: wangluoService + api.succLine,
    method: 'get',
    params: param
  })
}
