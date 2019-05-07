import {
  // commom
  kcmimPerformance,
  // monitor01
  adAndFireWall,
  ehtsecServer,
  ehtsecServerAnalysis,
  llzxServerAnalysis,
  llhlwxServerAnalysis,
  // moniotr02
  wgqspxLine,
  // internet
  ehtsecLine,
  ehtsecState,
  ehtsecBase,
  ehtsecWaitline,
  ehtsecServerList,
  ehtsecDetailInfo,
  ehtsecPCLine,
  ehtsecPCState,
  ehtsecPCBase,
  ehtsecPCWaitline,
  ehtsecPCServerList,
  ehtsecPCDetailInfo,
  ehfzLine,
  ehfzState,
  ehfzBase,
  ehfzWaitline,
  ehfzServerList,
  ehfzDetailInfo,
  tdxLine,
  tdxState,
  tdxBase,
  tdxWaitline,
  tdxServerList,
  tdxDetailInfo,
  thsLine,
  thsState,
  thsBase,
  thsWaitline,
  thsServerList,
  thsDetailInfo,
  // middleOffice
  succLine,
  succState,
  succBase,
  succServerList,
  openAccountState,
  openAccountLine,
  openAccountBase,
  openAccountServerList,
  accountCenterLine,
  accountCenterState,
  accountCenterBase,
  accountCenterWaitline,
  accountCenterServerList,
  bankTransferLine,
  bankTransferState,
  bankTransferBase,
  bankTransferServerList,
  // mainsystem
  concentratedTradingState,
  concentratedTradingLine,
  concentratedTradingBase,
  concentratedTradingServerList,
  subTradingState,
  subTradingLine,
  subTradingBase,
  subTradingServerList,
  marginState,
  marginLine,
  marginBase,
  marginServerList
} from '@/api/single'

const single = {
  state: {
    kcmimPerformance: [{}, {}, {}],
    wgqspxLine: {},
    adData: [],
    ehtsecData: [],
    ehtsecAnalysisData: [],
    systemInfo: [],
    llzxInfo: [],
    llhlwxInfo: [],
    ehtsecState: {},
    ehtsecLine: {},
    ehtsecBase: {},
    ehtsecWaitline: {},
    ehtsecServerList: [],
    ehtsecDetailInfo: {},
    ehtsecPCState: {},
    ehtsecPCLine: {},
    ehtsecPCBase: {},
    ehtsecPCWaitline: {},
    ehtsecPCServerList: [],
    ehtsecPCDetailInfo: {},
    ehfzState: {},
    ehfzLine: {},
    ehfzBase: {},
    ehfzWaitline: {},
    ehfzServerList: [],
    ehfzDetailInfo: {},
    tdxState: {},
    tdxLine: {},
    tdxBase: {},
    tdxWaitline: {},
    tdxServerList: [],
    tdxDetailInfo: {},
    thsState: {},
    thsLine: [],
    thsBase: {},
    thsServerList: [],
    thsDetailInfo: {},
    thsWaitline: {},
    succState: {},
    succLine: [],
    succBase: [],
    succServerList: [],
    openAccountState: {},
    openAccountLine: [],
    openAccountBase: [],
    openAccountServerList: [],
    accountCenterWaitline: {},
    accountCenterLine: {},
    accountCenterBase: {},
    accountCenterState: {},
    accountCenterServerList: {},
    bankTransferLine: {},
    bankTransferBase: {},
    bankTransferState: {},
    bankTransferServerList: {},
    // mainsystem
    concentratedTradingState: {},
    concentratedTradingLine: [],
    concentratedTradingBase: [],
    concentratedTradingServerList: [],
    subTradingState: {},
    subTradingLine: [],
    subTradingBase: [],
    subTradingServerList: [],
    marginState: {},
    marginLine: [],
    marginBase: [],
    marginServerList: [],
    detailInfo: {}
  },

  getters: {
    getKcmimPerformance: (state, getters) => {
      return getters.kcmimPerformance
    },
    getWgqspxLine: (state, getters) => {
      return getters.wgqspxLine
    },
    getEhtsecState: (state, getters) => {
      return getters.ehtsecState
    },
    getEhtsecBase: (state, getters) => {
      return getters.ehtsecBase
    },
    getEhtsecLine: (state, getters) => {
      return getters.ehtsecLine
    },
    getEhtsecWaitline: (state, getters) => {
      return getters.ehtsecWaitline
    },
    getEhtsecServerList: (state, getters) => {
      return getters.ehtsecServerList
    },
    getEhtsecDetailInfo: (state, getters) => {
      return getters.ehtsecDetailInfo
    },
    getEhtsecPCWaitline: (state, getters) => {
      return getters.ehtsecPCWaitline
    },
    getEhtsecPCState: (state, getters) => {
      return getters.ehtsecPCState
    },
    getEhtsecPCBase: (state, getters) => {
      return getters.ehtsecPCBase
    },
    getEhtsecPCLine: (state, getters) => {
      return getters.ehtsecPCLine
    },
    getEhtsecPCServerList: (state, getters) => {
      return getters.ehtsecPCServerList
    },
    getEhtsecPCDetailInfo: (state, getters) => {
      return getters.ehtsecPCDetailInfo
    },
    getEhfzState: (state, getters) => {
      return getters.ehfzState
    },
    getEhfzBase: (state, getters) => {
      return getters.ehfzBase
    },
    getEhfzLine: (state, getters) => {
      return getters.ehfzLine
    },
    getEhfzWaitline: (state, getters) => {
      return getters.ehfzWaitline
    },
    getEhfzServerList: (state, getters) => {
      return getters.ehfzServerList
    },
    getEhfzDetailInfo: (state, getters) => {
      return getters.ehfzDetailInfo
    },
    getTdxState: (state, getters) => {
      return getters.tdxState
    },
    getTdxBase: (state, getters) => {
      return getters.tdxBase
    },
    getTdxLine: (state, getters) => {
      return getters.tdxLine
    },
    getTdxWaitline: (state, getters) => {
      return getters.tdxWaitline
    },
    getTdxServerList: (state, getters) => {
      return getters.tdxServerList
    },
    getTdxDetailInfo: (state, getters) => {
      return getters.tdxDetailInfo
    },
    getThsState: (state, getters) => {
      return getters.thsState
    },
    getThsBase: (state, getters) => {
      return getters.thsBase
    },
    getThsLine: (state, getters) => {
      return getters.thsLine
    },
    getThsWaitline: (state, getters) => {
      return getters.thsWaitline
    },
    getThsServerList: (state, getters) => {
      return getters.thsServerList
    },
    getThsDetailInfo: (state, getters) => {
      return getters.thsDetailInfo
    },
    getSuccState: (state, getters) => {
      return getters.succState
    },
    getSuccBase: (state, getters) => {
      return getters.succBase
    },
    getSuccLine: (state, getters) => {
      return getters.succLine
    },
    getSuccServerList: (state, getters) => {
      return getters.succServerList
    },
    getOpenAccountState: (state, getters) => {
      return getters.openAccountState
    },
    getOpenAccountBase: (state, getters) => {
      return getters.openAccountBase
    },
    getOpenAccountLine: (state, getters) => {
      return getters.openAccountLine
    },
    getOpenAccountServerList: (state, getters) => {
      return getters.openAccountServerList
    },
    getBankTransferState: (state, getters) => {
      return getters.bankTransferState
    },
    getBankTransferBase: (state, getters) => {
      return getters.bankTransferBase
    },
    getBankTransferLine: (state, getters) => {
      return getters.bankTransferLine
    },
    getBankTransferServerList: (state, getters) => {
      return getters.bankTransferServerList
    },
    getAccountCenterState: (state, getters) => {
      return getters.accountCenterState
    },
    getAccountCenterBase: (state, getters) => {
      return getters.accountCenterBase
    },
    getAccountCenterLine: (state, getters) => {
      return getters.accountCenterLine
    },
    getAccountCenterWaitline: (state, getters) => {
      return getters.accountCenterWaitline
    },
    getAccountCenterServerList: (state, getters) => {
      return getters.accountCenterServerList
    },
    getConcentratedTradingState: (state, getters) => {
      return getters.concentratedTradingState
    },
    getConcentratedTradingBase: (state, getters) => {
      return getters.concentratedTradingBase
    },
    getConcentratedTradingLine: (state, getters) => {
      return getters.concentratedTradingLine
    },
    getConcentratedTradingServerList: (state, getters) => {
      return getters.concentratedTradingServerList
    },
    getSubTradingState: (state, getters) => {
      return getters.subTradingState
    },
    getSubTradingBase: (state, getters) => {
      return getters.subTradingBase
    },
    getSubTradingLine: (state, getters) => {
      return getters.subTradingLine
    },
    getSubTradingServerList: (state, getters) => {
      return getters.subTradingServerList
    },
    getMarginState: (state, getters) => {
      return getters.marginState
    },
    getMarginBase: (state, getters) => {
      return getters.marginBase
    },
    getMarginLine: (state, getters) => {
      return getters.marginLine
    },
    getMarginServerList: (state, getters) => {
      return getters.marginServerList
    }
  },

  mutations: {
    SET_KCMIMPERFORMANCE: (state, kcmimPerformance) => {
      state.kcmimPerformance = kcmimPerformance
    },
    SET_ADDATA: (state, adData) => {
      state.adData = adData
    },
    SET_EHTSECDATA: (state, ehtsecData) => {
      state.ehtsecData = ehtsecData
    },
    SET_EHTSECANADATA: (state, ehtsecAnalysisData) => {
      state.ehtsecAnalysisData = ehtsecAnalysisData
    },
    SET_LLZXDATA: (state, llzxInfo) => {
      state.llzxInfo = llzxInfo
    },
    SET_LLHLWXDATA: (state, llhlwxInfo) => {
      state.llhlwxInfo = llhlwxInfo
    },
    SET_WGQSPXLINE: (state, wgqspxLine) => {
      state.wgqspxLine = wgqspxLine
    },
    SET_EHTSECLINE: (state, ehtsecLine) => {
      state.ehtsecLine = ehtsecLine
    },
    SET_EHTSECSTATE: (state, ehtsecState) => {
      state.ehtsecState = ehtsecState
    },
    SET_EHTSECBASE: (state, ehtsecBase) => {
      state.ehtsecBase = ehtsecBase
    },
    SET_EHTSECWAITLINE: (state, ehtsecWaitline) => {
      state.ehtsecWaitline = ehtsecWaitline
    },
    SET_EHTSECSERVERLIST: (state, ehtsecServerList) => {
      state.ehtsecServerList = ehtsecServerList
    },
    SET_EHTSECDETAILINFO: (state, ehtsecDetailInfo) => {
      state.ehtsecDetailInfo = ehtsecDetailInfo
    },
    SET_EHTSECPCLINE: (state, ehtsecPCLine) => {
      state.ehtsecPCLine = ehtsecPCLine
    },
    SET_EHTSECPCSTATE: (state, ehtsecPCState) => {
      state.ehtsecPCState = ehtsecPCState
    },
    SET_EHTSECPCBASE: (state, ehtsecPCBase) => {
      state.ehtsecPCBase = ehtsecPCBase
    },
    SET_EHTSECPCWAITLINE: (state, ehtsecPCWaitline) => {
      state.ehtsecPCWaitline = ehtsecPCWaitline
    },
    SET_EHTSECPCSERVERLIST: (state, ehtsecPCServerList) => {
      state.ehtsecPCServerList = ehtsecPCServerList
    },
    SET_EHTSECPCDETAILINFO: (state, ehtsecPCDetailInfo) => {
      state.ehtsecPCDetailInfo = ehtsecPCDetailInfo
    },
    SET_EHFZLINE: (state, ehfzLine) => {
      state.ehfzLine = ehfzLine
    },
    SET_EHFZSTATE: (state, ehfzState) => {
      state.ehfzState = ehfzState
    },
    SET_EHFZBASE: (state, ehfzBase) => {
      state.ehfzBase = ehfzBase
    },
    SET_EHFZWAITLINE: (state, ehfzWaitline) => {
      state.ehfzWaitline = ehfzWaitline
    },
    SET_EHFZSERVERLIST: (state, ehfzServerList) => {
      state.ehfzServerList = ehfzServerList
    },
    SET_EHFZDETAILINFO: (state, ehfzDetailInfo) => {
      state.ehfzDetailInfo = ehfzDetailInfo
    },
    SET_TDXLINE: (state, tdxLine) => {
      state.tdxLine = tdxLine
    },
    SET_TDXSTATE: (state, tdxState) => {
      state.tdxState = tdxState
    },
    SET_TDXBASE: (state, tdxBase) => {
      state.tdxBase = tdxBase
    },
    SET_TDXWAITLINE: (state, tdxWaitline) => {
      state.tdxWaitline = tdxWaitline
    },
    SET_TDXSERVERLIST: (state, tdxServerList) => {
      state.tdxServerList = tdxServerList
    },
    SET_TDXDETAILINFO: (state, tdxDetailInfo) => {
      state.tdxDetailInfo = tdxDetailInfo
    },
    SET_THSLINE: (state, thsLine) => {
      state.thsLine = thsLine
    },
    SET_THSSTATE: (state, thsState) => {
      state.thsState = thsState
    },
    SET_THSBASE: (state, thsBase) => {
      state.thsBase = thsBase
    },
    SET_THSWAITLINE: (state, thsWaitline) => {
      state.thsWaitline = thsWaitline
    },
    SET_THSSERVERLIST: (state, thsServerList) => {
      state.thsServerList = thsServerList
    },
    SET_THSDETAILINFO: (state, thsDetailInfo) => {
      state.thsDetailInfo = thsDetailInfo
    },
    SET_SUCCLINE: (state, succLine) => {
      state.succLine = succLine
    },
    SET_SUCCSTATE: (state, succState) => {
      state.succState = succState
    },
    SET_SUCCBASE: (state, succBase) => {
      state.succBase = succBase
    },
    SET_SUCCSERVERLIST: (state, succServerList) => {
      state.succServerList = succServerList
    },
    SET_OPENACCOUNTLINE: (state, openAccountLine) => {
      state.openAccountLine = openAccountLine
    },
    SET_OPENACCOUNTSTATE: (state, openAccountState) => {
      state.openAccountState = openAccountState
    },
    SET_OPENACCOUNTBASE: (state, openAccountBase) => {
      state.openAccountBase = openAccountBase
    },
    SET_OPENACCOUNTSERVERLIST: (state, openAccountServerList) => {
      state.openAccountServerList = openAccountServerList
    },
    SET_BANKTRANSFERLINE: (state, bankTransferLine) => {
      state.bankTransferLine = bankTransferLine
    },
    SET_BANKTRANSFERSTATE: (state, bankTransferState) => {
      state.bankTransferState = bankTransferState
    },
    SET_BANKTRANSFERBASE: (state, bankTransferBase) => {
      state.bankTransferBase = bankTransferBase
    },
    SET_BANKTRANSFERSERVERLIST: (state, bankTransferServerList) => {
      state.bankTransferServerList = bankTransferServerList
    },
    SET_ACCOUNTCENTERBASE: (state, accountCenterBase) => {
      state.accountCenterBase = accountCenterBase
    },
    SET_ACCOUNTCENTERLINE: (state, accountCenterLine) => {
      state.accountCenterLine = accountCenterLine
    },
    SET_ACCOUNTCENTERSTATE: (state, accountCenterState) => {
      state.accountCenterState = accountCenterState
    },
    SET_ACCOUNTCENTERWAITLINE: (state, accountCenterWaitline) => {
      state.accountCenterWaitline = accountCenterWaitline
    },
    SET_ACCOUNTCENTERSERVERLIST: (state, accountCenterServerList) => {
      state.accountCenterServerList = accountCenterServerList
    },
    SET_CONCENTRATEDTRADINGLINE: (state, concentratedTradingLine) => {
      state.concentratedTradingLine = concentratedTradingLine
    },
    SET_CONCENTRATEDTRADINGSTATE: (state, concentratedTradingState) => {
      state.concentratedTradingState = concentratedTradingState
    },
    SET_CONCENTRATEDTRADINGBASE: (state, concentratedTradingBase) => {
      state.concentratedTradingBase = concentratedTradingBase
    },
    SET_CONCENTRATEDTRADINGSERVERLIST: (state, concentratedTradingServerList) => {
      state.concentratedTradingServerList = concentratedTradingServerList
    },
    SET_SUBTRADINGLINE: (state, subTradingLine) => {
      state.subTradingLine = subTradingLine
    },
    SET_SUBTRADINGSTATE: (state, subTradingState) => {
      state.subTradingState = subTradingState
    },
    SET_SUBTRADINGBASE: (state, subTradingBase) => {
      state.subTradingBase = subTradingBase
    },
    SET_SUBTRADINGSERVERLIST: (state, subTradingServerList) => {
      state.subTradingServerList = subTradingServerList
    },
    SET_MARGINLINE: (state, marginLine) => {
      state.marginLine = marginLine
    },
    SET_MARGINSTATE: (state, marginState) => {
      state.marginState = marginState
    },
    SET_MARGINBASE: (state, marginBase) => {
      state.marginBase = marginBase
    },
    SET_MARGINSERVERLIST: (state, marginServerList) => {
      state.marginServerList = marginServerList
    }
  },

  actions: {
    // 获取具体性能数据 CPU、内存、磁盘
    doKcmimPerformance({ commit }, payload) {
      return new Promise((resolve, reject) => {
        kcmimPerformance(payload)
          .then(response => {
            const result = response.data
            commit('SET_KCMIMPERFORMANCE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 网关数据
    doAdAndFireWall({ commit }) {
      return new Promise((resolve, reject) => {
        adAndFireWall()
          .then(response => {
            const result = response.data
            commit('SET_ADDATA', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海通財
    doEhtsecServerAnalysis({ commit }) {
      return new Promise((resolve, reject) => {
        ehtsecServerAnalysis()
          .then(response => {
            const result = response.data
            commit('SET_EHTSECANADATA', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海通財
    doEhtsecServer({ commit }) {
      return new Promise((resolve, reject) => {
        ehtsecServer()
          .then(response => {
            const result = response.data
            commit('SET_EHTSECDATA', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 流量数据分析
    doLlhlwxServerAnalysis({ commit }) {
      return new Promise((resolve, reject) => {
        llhlwxServerAnalysis()
          .then(response => {
            const result = response.data
            commit('SET_LLHLWXDATA', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 流量数据分析
    doLlzxServerAnalysis({ commit }) {
      return new Promise((resolve, reject) => {
        llzxServerAnalysis()
          .then(response => {
            const result = response.data
            commit('SET_LLZXDATA', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    doWgqspxLine({ commit }) {
      return new Promise((resolve, reject) => {
        wgqspxLine()
          .then(response => {
            const result = response.data
            commit('SET_WGQSPXLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海通财流量
    doEhtsecLine({ commit }) {
      return new Promise((resolve, reject) => {
        ehtsecLine()
          .then(response => {
            const result = response.data
            commit('SET_EHTSECLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海通财状态
    doEhtsecState({ commit }) {
      return new Promise((resolve, reject) => {
        ehtsecState()
          .then(response => {
            const result = response.data
            commit('SET_EHTSECSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海通财基线
    doEhtsecBase({ commit }) {
      return new Promise((resolve, reject) => {
        ehtsecBase()
          .then(response => {
            const result = response.data
            commit('SET_EHTSECBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海通财状态延迟
    doEhtsecWaitline({ commit }) {
      return new Promise((resolve, reject) => {
        ehtsecWaitline()
          .then(response => {
            const result = response.data
            commit('SET_EHTSECWAITLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // e海通财服务器列表
    doEhtsecServerList({ commit }, payload) {
      return new Promise((resolve, reject) => {
        ehtsecServerList(payload)
          .then(response => {
            const result = response.data
            commit('SET_EHTSECSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海通财具体服务器信息
    doEhtsecDetailInfo({ commit }, payload) {
      return new Promise((resolve, reject) => {
        ehtsecDetailInfo(payload)
          .then(response => {
            const result = response.data
            commit('SET_EHTSECDETAILINFO', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // e海通财流量
    doEhtsecPCLine({ commit }) {
      return new Promise((resolve, reject) => {
        ehtsecPCLine()
          .then(response => {
            const result = response.data
            commit('SET_EHTSECPCLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海通财状态
    doEhtsecPCState({ commit }) {
      return new Promise((resolve, reject) => {
        ehtsecPCState()
          .then(response => {
            const result = response.data
            commit('SET_EHTSECPCSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海通财基线
    doEhtsecPCBase({ commit }) {
      return new Promise((resolve, reject) => {
        ehtsecPCBase()
          .then(response => {
            const result = response.data
            commit('SET_EHTSECPCBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海通财状态延迟
    doEhtsecPCWaitline({ commit }) {
      return new Promise((resolve, reject) => {
        ehtsecPCWaitline()
          .then(response => {
            const result = response.data
            commit('SET_EHTSECPCWAITLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // e海通财服务器列表
    doEhtsecPCServerList({ commit }, payload) {
      return new Promise((resolve, reject) => {
        ehtsecPCServerList(payload)
          .then(response => {
            const result = response.data
            commit('SET_EHTSECPCSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海通财具体服务器信息
    doEhtsecPCDetailInfo({ commit }, payload) {
      return new Promise((resolve, reject) => {
        ehtsecPCDetailInfo(payload)
          .then(response => {
            const result = response.data
            commit('SET_EHTSECPCDETAILINFO', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海方舟流量
    doEhfzLine({ commit }) {
      return new Promise((resolve, reject) => {
        ehfzLine()
          .then(response => {
            const result = response.data
            commit('SET_EHFZLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海方舟财状态
    doEhfzState({ commit }) {
      return new Promise((resolve, reject) => {
        ehfzState()
          .then(response => {
            const result = response.data
            commit('SET_EHFZSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    //  e海方舟基线
    doEhfzBase({ commit }) {
      return new Promise((resolve, reject) => {
        ehfzBase()
          .then(response => {
            const result = response.data
            commit('SET_EHFZBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // e海方舟状态延迟
    doEhfzWaitline({ commit }) {
      return new Promise((resolve, reject) => {
        ehfzWaitline()
          .then(response => {
            const result = response.data
            commit('SET_EHFZWAITLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    //  e海方舟服务器列表
    doEhfzServerList({ commit }, payload) {
      return new Promise((resolve, reject) => {
        ehfzServerList(payload)
          .then(response => {
            const result = response.data
            commit('SET_EHFZSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    //  e海方舟具体服务器信息
    doEhfzDetailInfo({ commit }, payload) {
      return new Promise((resolve, reject) => {
        ehfzDetailInfo(payload)
          .then(response => {
            const result = response.data
            commit('SET_EHFZDETAILINFO', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 通达信流量
    doTdxLine({ commit }) {
      return new Promise((resolve, reject) => {
        tdxLine()
          .then(response => {
            const result = response.data
            commit('SET_TDXLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 通达信状态
    doTdxState({ commit }) {
      return new Promise((resolve, reject) => {
        tdxState()
          .then(response => {
            const result = response.data
            commit('SET_TDXSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 通达信基线
    doTdxBase({ commit }) {
      return new Promise((resolve, reject) => {
        tdxBase()
          .then(response => {
            const result = response.data
            commit('SET_TDXBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 通达信状态延迟
    doTdxWaitline({ commit }) {
      return new Promise((resolve, reject) => {
        tdxWaitline()
          .then(response => {
            const result = response.data
            commit('SET_TDXWAITLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 通达信服务器列表
    doTdxServerList({ commit }, payload) {
      return new Promise((resolve, reject) => {
        tdxServerList(payload)
          .then(response => {
            const result = response.data
            commit('SET_TDXSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 通达信具体服务器信息
    doTdxDetailInfo({ commit }, payload) {
      return new Promise((resolve, reject) => {
        tdxDetailInfo(payload)
          .then(response => {
            const result = response.data
            commit('SET_TDXDETAILINFO', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 同花顺流量
    doThsLine({ commit }) {
      return new Promise((resolve, reject) => {
        thsLine()
          .then(response => {
            const result = response.data
            commit('SET_THSLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 同花顺状态
    doThsState({ commit }) {
      return new Promise((resolve, reject) => {
        thsState()
          .then(response => {
            const result = response.data
            commit('SET_THSSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 同花顺基线
    doThsBase({ commit }) {
      return new Promise((resolve, reject) => {
        thsBase()
          .then(response => {
            const result = response.data
            commit('SET_THSBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 同花顺状态延迟
    doThsWaitline({ commit }) {
      return new Promise((resolve, reject) => {
        thsWaitline()
          .then(response => {
            const result = response.data
            commit('SET_THSWAITLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 同花顺服务器列表
    doThsServerList({ commit }, payload) {
      return new Promise((resolve, reject) => {
        thsServerList(payload)
          .then(response => {
            const result = response.data
            commit('SET_THSSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 同花顺具体服务器信息
    doThsDetailInfo({ commit }, payload) {
      return new Promise((resolve, reject) => {
        thsDetailInfo(payload)
          .then(response => {
            const result = response.data
            commit('SET_THSDETAILINFO', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 员工平台
    doSuccLine({ commit }, payload) {
      return new Promise((resolve, reject) => {
        succLine(payload)
          .then(response => {
            const result = response.data
            commit('SET_SUCCLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 员工平台状态
    doSuccState({ commit }) {
      return new Promise((resolve, reject) => {
        succState()
          .then(response => {
            const result = response.data
            commit('SET_SUCCSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 员工平台基线
    doSuccBase({ commit }) {
      return new Promise((resolve, reject) => {
        succBase()
          .then(response => {
            const result = response.data
            commit('SET_SUCCBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 员工平台服务器列表
    doSuccServerList({ commit }) {
      return new Promise((resolve, reject) => {
        succServerList()
          .then(response => {
            const result = response.data
            commit('SET_SUCCSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 网上开户
    doOpenAccountLine({ commit }) {
      return new Promise((resolve, reject) => {
        openAccountLine()
          .then(response => {
            const result = response.data
            commit('SET_OPENACCOUNTLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 网上开户状态
    doOpenAccountState({ commit }) {
      return new Promise((resolve, reject) => {
        openAccountState()
          .then(response => {
            const result = response.data
            commit('SET_OPENACCOUNTSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 网上开户基线
    doOpenAccountBase({ commit }) {
      return new Promise((resolve, reject) => {
        openAccountBase()
          .then(response => {
            const result = response.data
            commit('SET_OPENACCOUNTBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 网上开户服务器列表
    doOpenAccountServerList({ commit }) {
      return new Promise((resolve, reject) => {
        openAccountServerList()
          .then(response => {
            const result = response.data
            commit('SET_OPENACCOUNTSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 银证转账
    doBankTransferLine({ commit }, payload) {
      return new Promise((resolve, reject) => {
        bankTransferLine(payload)
          .then(response => {
            const result = response.data
            commit('SET_BANKTRANSFERLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 银证转账状态
    doBankTransferState({ commit }) {
      return new Promise((resolve, reject) => {
        bankTransferState()
          .then(response => {
            const result = response.data
            commit('SET_BANKTRANSFERSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 银证转账基线
    doBankTransferBase({ commit }) {
      return new Promise((resolve, reject) => {
        bankTransferBase()
          .then(response => {
            const result = response.data
            commit('SET_BANKTRANSFERBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 银证转账服务器列表
    doBankTransferServerList({ commit }) {
      return new Promise((resolve, reject) => {
        bankTransferServerList()
          .then(response => {
            const result = response.data
            commit('SET_BANKTRANSFERSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 账户中心
    doAccountCenterLine({ commit }, payload) {
      return new Promise((resolve, reject) => {
        accountCenterLine(payload)
          .then(response => {
            const result = response.data
            commit('SET_ACCOUNTCENTERLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 账户中心状态
    doAccountCenterState({ commit }) {
      return new Promise((resolve, reject) => {
        accountCenterState()
          .then(response => {
            const result = response.data
            commit('SET_ACCOUNTCENTERSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 账户中心基线
    doAccountCenterBase({ commit }) {
      return new Promise((resolve, reject) => {
        accountCenterBase()
          .then(response => {
            const result = response.data
            commit('SET_ACCOUNTCENTERBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 账户中心基线
    doAccountCenterBase({ commit }, payload) {
      return new Promise((resolve, reject) => {
        accountCenterBase(payload)
          .then(response => {
            const result = response.data
            commit('SET_ACCOUNTCENTERBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 账户中心服务器列表
    doAccountCenterServerList({ commit }, payload) {
      return new Promise((resolve, reject) => {
        accountCenterServerList(payload)
          .then(response => {
            const result = response.data
            commit('SET_ACCOUNTCENTERSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 集中交易
    doConcentratedTradingLine({ commit }, payload) {
      return new Promise((resolve, reject) => {
        concentratedTradingLine(payload)
          .then(response => {
            const result = response.data
            commit('SET_CONCENTRATEDTRADINGLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 集中交易状态
    doConcentratedTradingState({ commit }) {
      return new Promise((resolve, reject) => {
        concentratedTradingState()
          .then(response => {
            const result = response.data
            commit('SET_CONCENTRATEDTRADINGSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 集中交易基线
    doConcentratedTradingBase({ commit }) {
      return new Promise((resolve, reject) => {
        concentratedTradingBase()
          .then(response => {
            const result = response.data
            commit('SET_CONCENTRATEDTRADINGBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 集中交易服务器列表
    doConcentratedTradingServerList({ commit }) {
      return new Promise((resolve, reject) => {
        concentratedTradingServerList()
          .then(response => {
            const result = response.data
            commit('SET_CONCENTRATEDTRADINGSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 子交易
    doSubTradingLine({ commit }, payload) {
      return new Promise((resolve, reject) => {
        subTradingLine(payload)
          .then(response => {
            const result = response.data
            commit('SET_SUBTRADINGLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 子交易状态
    doSubTradingState({ commit }) {
      return new Promise((resolve, reject) => {
        subTradingState()
          .then(response => {
            const result = response.data
            commit('SET_SUBTRADINGSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 子交易基线
    doSubTradingBase({ commit }) {
      return new Promise((resolve, reject) => {
        subTradingBase()
          .then(response => {
            const result = response.data
            commit('SET_SUBTRADINGBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 子交易服务器列表
    doSubTradingServerList({ commit }) {
      return new Promise((resolve, reject) => {
        subTradingServerList()
          .then(response => {
            const result = response.data
            commit('SET_SUBTRADINGSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 两融
    doMarginLine({ commit }, payload) {
      return new Promise((resolve, reject) => {
        marginLine(payload)
          .then(response => {
            const result = response.data
            commit('SET_MARGINLINE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 两融状态
    doMarginState({ commit }) {
      return new Promise((resolve, reject) => {
        marginState()
          .then(response => {
            const result = response.data
            commit('SET_MARGINSTATE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 两融基线
    doMarginBase({ commit }) {
      return new Promise((resolve, reject) => {
        marginBase()
          .then(response => {
            const result = response.data
            commit('SET_MARGINBASE', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 两融服务器列表
    doMarginServerList({ commit }) {
      return new Promise((resolve, reject) => {
        marginServerList()
          .then(response => {
            const result = response.data
            commit('SET_MARGINGSERVERLIST', result)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default single
