import { axios } from '@/utils/request'

const api = {
  // common
  kcmimPerformance: '/kcmim/performance',

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
  ehtsecServerList: '/ehtsec/serverList',
  ehtsecDetailInfo: '/ehtsec/getInfoByIp',

  ehtsecPCState: '/ehtsecPC/state',
  ehtsecPCLine: '/ehtsecPC/line',
  ehtsecPCWaitline: '/ehtsecPC/waitline',
  ehtsecPCBase: '/ehtsecPC/base',
  ehtsecPCServerList: '/ehtsecPC/serverList',
  ehtsecPCDetailInfo: '/ehtsecPC/getInfoByIp',

  ehfzState: '/ehfz/state',
  ehfzLine: '/ehfz/line',
  ehfzWaitline: '/ehfz/waitline',
  ehfzBase: '/ehfz/base',
  ehfzServerList: '/ehfz/serverList',
  ehfzDetailInfo: '/ehfz/getInfoByIp',

  tdxState: '/tdx/state',
  tdxLine: '/tdx/line',
  tdxWaitline: '/tdx/waitline',
  tdxBase: '/tdx/base',
  tdxServerList: '/tdx/serverList',
  tdxDetailInfo: '/tdx/getInfoByIp',

  thsState: '/ths/state',
  thsLine: '/ths/line',
  thsWaitline: '/ths/waitline',
  thsBase: '/ths/base',
  thsServerList: '/ths/serverList',
  thsDetailInfo: '/ths/getInfoByIp',

  // middleOffice
  succState: '/succ/state',
  succLine: '/succ/line',
  succBase: '/succ/base',
  succServerList: '/succ/serverList',
  succDetailInfo: '/succ/getInfoByIp',

  openAccountState: '/openAccount/state',
  openAccountLine: '/openAccount/line',
  openAccountBase: '/openAccount/base',
  openAccountServerList: '/openAccount/serverList',
  openAccountDetailInfo: '/openAccount/getInfoByIp',

  bankTransferState: '/bankTransfer/state',
  bankTransferLine: '/bankTransfer/line',
  bankTransferBase: '/bankTransfer/base',
  bankTransferServerList: '/bankTransfer/serverList',
  bankTransferDetailInfo: '/bankTransfer/getInfoByIp',

  accountCenterState: '/accountCenter/state',
  accountCenterLine: '/accountCenter/line',
  accountCenterBase: '/accountCenter/base',
  accountCenterWaitline: '/accountCenter/waitline',
  accountCenterServerList: '/accountCenter/serverList',
  accountCenterDetailInfo: '/accountCenter/getInfoByIp',

  // mainSystem
  marginState: '/margin/state',
  marginLine: '/margin/line',
  marginBase: '/margin/base',
  marginServerList: '/margin/serverList',
  marginDetailInfo: '/margin/getInfoByIp',

  concentratedTradingState: '/concentratedTrading/state',
  concentratedTradingLine: '/concentratedTrading/line',
  concentratedTradingBase: '/concentratedTrading/base',
  concentratedTradingServerList: '/concentratedTrading/serverList',
  concentratedTradingDetailInfo: '/concentratedTrading/getInfoByIp',

  subTradingState: '/subTrading/state',
  subTradingLine: '/subTrading/line',
  subTradingBase: '/subTrading/base',
  subTradingServerList: '/subTrading/serverList',
  subTradingDetailInfo: '/subTrading/getInfoByIp'

}

const internetService = '/wangluoService17'
const kafkaService = '/qiquanService25'
const databaseService = '/databaseService'

// const internetService = ''
// const kafkaService = ''
// const databaseService = ''

export default api

export function kcmimPerformance (payload) {
  return axios({
    url: internetService + api.kcmimPerformance,
    method: 'get',
    params: payload
  })
}

export function adAndFireWall () {
  return axios({
    url: internetService + api.adAndFireWall,
    method: 'get',
    params: ''
  })
}

export function ehtsecServer () {
  return axios({
    url: internetService + api.ehtsecServer,
    method: 'get',
    params: ''
  })
}

export function ehtsecServerAnalysis () {
  return axios({
    url: internetService + api.ehtsecServerAnalysis,
    method: 'get',
    params: ''
  })
}

export function llzxServerAnalysis () {
  return axios({
    url: internetService + api.llzxServerAnalysis,
    method: 'get',
    params: ''
  })
}

export function llhlwxServerAnalysis () {
  return axios({
    url: internetService + api.llhlwxServerAnalysis,
    method: 'get',
    params: ''
  })
}

export function wgqspxLine () {
  return axios({
    url: kafkaService + api.wgqspxLine,
    method: 'get',
    params: ''
  })
}

export function ehtsecState () {
  return axios({
    url: internetService + api.ehtsecState,
    method: 'get',
    params: ''
  })
}

export function ehtsecWaitline () {
  return axios({
    url: internetService + api.ehtsecWaitline,
    method: 'get',
    params: ''
  })
}

export function ehtsecBase () {
  return axios({
    url: internetService + api.ehtsecBase,
    method: 'get',
    params: ''
  })
}

export function ehtsecLine () {
  return axios({
    url: internetService + api.ehtsecLine,
    method: 'get',
    params: ''
  })
}

export function ehtsecServerList (payload) {
  return axios({
    url: internetService + api.ehtsecServerList,
    method: 'get',
    params: payload
  })
}

export function ehtsecDetailInfo (payload) {
  return axios({
    url: internetService + api.ehtsecDetailInfo,
    method: 'get',
    params: payload
  })
}

// ehtsec pc

export function ehtsecPCState () {
  return axios({
    url: internetService + api.ehtsecPCState,
    method: 'get',
    params: ''
  })
}

export function ehtsecPCWaitline () {
  return axios({
    url: internetService + api.ehtsecPCWaitline,
    method: 'get',
    params: ''
  })
}

export function ehtsecPCBase () {
  return axios({
    url: internetService + api.ehtsecPCBase,
    method: 'get',
    params: ''
  })
}

export function ehtsecPCLine () {
  return axios({
    url: internetService + api.ehtsecPCLine,
    method: 'get',
    params: ''
  })
}

export function ehtsecPCServerList (payload) {
  return axios({
    url: internetService + api.ehtsecPCServerList,
    method: 'get',
    params: payload
  })
}

export function ehtsecPCDetailInfo (payload) {
  return axios({
    url: internetService + api.ehtsecPCDetailInfo,
    method: 'get',
    params: payload
  })
}

// ehfz
export function ehfzState () {
  return axios({
    url: internetService + api.ehfzState,
    method: 'get',
    params: ''
  })
}

export function ehfzWaitline () {
  return axios({
    url: internetService + api.ehfzWaitline,
    method: 'get',
    params: ''
  })
}
export function ehfzBase () {
  return axios({
    url: internetService + api.ehfzBase,
    method: 'get',
    params: ''
  })
}

export function ehfzLine () {
  return axios({
    url: internetService + api.ehfzLine,
    method: 'get',
    params: ''
  })
}

export function ehfzServerList (payload) {
  return axios({
    url: internetService + api.ehfzServerList,
    method: 'get',
    params: payload
  })
}

export function ehfzDetailInfo (payload) {
  return axios({
    url: internetService + api.ehfzDetailInfo,
    method: 'get',
    params: payload
  })
}

// tdx

export function tdxState () {
  return axios({
    url: internetService + api.tdxState,
    method: 'get',
    params: ''
  })
}

export function tdxWaitline () {
  return axios({
    url: internetService + api.tdxWaitline,
    method: 'get',
    params: ''
  })
}

export function tdxBase () {
  return axios({
    url: internetService + api.tdxBase,
    method: 'get',
    params: ''
  })
}

export function tdxLine () {
  return axios({
    url: internetService + api.tdxLine,
    method: 'get',
    params: ''
  })
}

export function tdxServerList (payload) {
  return axios({
    url: internetService + api.tdxServerList,
    method: 'get',
    params: payload
  })
}

export function tdxDetailInfo (payload) {
  return axios({
    url: internetService + api.tdxDetailInfo,
    method: 'get',
    params: payload
  })
}

// ths

export function thsState () {
  return axios({
    url: internetService + api.thsState,
    method: 'get',
    params: ''
  })
}

export function thsWaitline () {
  return axios({
    url: internetService + api.thsWaitline,
    method: 'get',
    params: ''
  })
}

export function thsBase () {
  return axios({
    url: internetService + api.thsBase,
    method: 'get',
    params: ''
  })
}

export function thsLine () {
  return axios({
    url: internetService + api.thsLine,
    method: 'get',
    params: ''
  })
}

export function thsServerList (payload) {
  return axios({
    url: internetService + api.thsServerList,
    method: 'get',
    params: payload
  })
}

export function thsDetailInfo (payload) {
  return axios({
    url: internetService + api.thsDetailInfo,
    method: 'get',
    params: payload
  })
}

// 员工平台
export function succState () {
  return axios({
    url: internetService + api.succState,
    method: 'get',
    params: ''
  })
}

export function succLine (payload) {
  return axios({
    url: internetService + api.succLine,
    method: 'get',
    params: payload
  })
}

export function succBase () {
  return axios({
    url: internetService + api.succBase,
    method: 'get',
    params: ''
  })
}

export function succServerList (payload) {
  return axios({
    url: internetService + api.succServerList,
    method: 'get',
    params: payload
  })
}

// 网上开户
export function openAccountState () {
  return axios({
    url: databaseService + api.openAccountState,
    method: 'get',
    params: ''
  })
}

export function openAccountLine () {
  return axios({
    url: databaseService + api.openAccountLine,
    method: 'get',
    params: ''
  })
}

export function openAccountBase () {
  return axios({
    url: databaseService + api.openAccountBase,
    method: 'get',
    params: ''
  })
}

export function openAccountServerList (payload) {
  return axios({
    url: databaseService + api.openAccountServerList,
    method: 'get',
    params: payload
  })
}

// 账户中心
export function accountCenterState () {
  return axios({
    url: kafkaService + api.accountCenterState,
    method: 'get',
    params: ''
  })
}

export function accountCenterWaitline (payload) {
  return axios({
    url: kafkaService + api.accountCenterWaitline,
    method: 'get',
    params: payload
  })
}

export function accountCenterBase () {
  return axios({
    url: kafkaService + api.accountCenterBase,
    method: 'get',
    params: ''
  })
}

export function accountCenterLine (payload) {
  return axios({
    url: kafkaService + api.accountCenterLine,
    method: 'get',
    params: payload
  })
}

export function accountCenterServerList (payload) {
  return axios({
    url: kafkaService + api.accountCenterServerList,
    method: 'get',
    params: payload
  })
}

// 银证转账
export function bankTransferState () {
  return axios({
    url: kafkaService + api.bankTransferState,
    method: 'get',
    params: ''
  })
}

export function bankTransferBase () {
  return axios({
    url: kafkaService + api.bankTransferBase,
    method: 'get',
    params: ''
  })
}

export function bankTransferLine (payload) {
  return axios({
    url: kafkaService + api.bankTransferLine,
    method: 'get',
    params: payload
  })
}

export function bankTransferServerList (payload) {
  return axios({
    url: kafkaService + api.bankTransferServerList,
    method: 'get',
    params: payload
  })
}

// mainSystem
// 两融
export function marginState () {
  return axios({
    url: internetService + api.marginState,
    method: 'get',
    params: ''
  })
}

export function marginLine (payload) {
  return axios({
    url: internetService + api.marginLine,
    method: 'get',
    params: payload
  })
}

export function marginBase () {
  return axios({
    url: internetService + api.marginBase,
    method: 'get',
    params: ''
  })
}

export function marginServerList (payload) {
  return axios({
    url: internetService + api.marginServerList,
    method: 'get',
    params: payload
  })
}
// 集中交易
export function concentratedTradingState () {
  return axios({
    url: internetService + api.concentratedTradingState,
    method: 'get',
    params: ''
  })
}

export function concentratedTradingLine (payload) {
  return axios({
    url: internetService + api.concentratedTradingLine,
    method: 'get',
    params: payload
  })
}

export function concentratedTradingBase () {
  return axios({
    url: internetService + api.concentratedTradingBase,
    method: 'get',
    params: ''
  })
}

export function concentratedTradingServerList (payload) {
  return axios({
    url: internetService + api.concentratedTradingServerList,
    method: 'get',
    params: payload
  })
}
// 子交易
export function subTradingState () {
  return axios({
    url: internetService + api.subTradingState,
    method: 'get',
    params: ''
  })
}

export function subTradingLine (payload) {
  return axios({
    url: internetService + api.subTradingLine,
    method: 'get',
    params: payload
  })
}

export function subTradingBase () {
  return axios({
    url: internetService + api.subTradingBase,
    method: 'get',
    params: ''
  })
}

export function subTradingServerList (payload) {
  return axios({
    url: internetService + api.subTradingServerList,
    method: 'get',
    params: payload
  })
}
