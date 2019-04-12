import {
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
  ehtsecPCLine,
  ehtsecPCState,
  ehtsecPCBase,
  ehtsecPCWaitline,
  tdxLine,
  tdxState,
  tdxBase,
  tdxWaitline,
  thsLine,
  thsState,
  thsBase,
  thsWaitline,

  // middleOffice
  succLine,
  succState
} from '@/api/single'

const single = {
  state: {
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
    ehtsecPCState: {},
    ehtsecPCLine: {},
    ehtsecPCBase: {},
    ehtsecPCWaitline: {},
    tdxState: {},
    tdxLine: {},
    tdxBase: {},
    tdxWaitline: {},
    thsState: {},
    thsLine: {},
    thsBase: {},
    thsWaitline: {},
    succState: {},
    succLine: []
  },

  getters: {
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
    getEhtsecWaitline: (state, getters) => {
      return getters.ehtsecWaitline
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
    }
  },

  mutations: {
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
    SET_SUCCLINE: (state, succLine) => {
      state.succLine = succLine
    },
    SET_SUCCSTATE: (state, succState) => {
      state.succState = succState
    }
  },

  actions: {
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
        wgqspxLine().then(
          response => {
            const result = response.data
            commit('SET_WGQSPXLINE', result)
            resolve(response)
          }
        ).catch(error => {
          reject(error)
        })
      })
    },
    // e海通财流量charts
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

    // e海通财流量charts
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

    // 通达信流量charts
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
    // 通达信流量charts
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
    // 通达信状态
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
    // 通达信基线
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
    // 通达信状态延迟
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
    // 员工平台charts
    doSuccLine({ commit }) {
      return new Promise((resolve, reject) => {
        succLine()
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
    }
  }
}

export default single
