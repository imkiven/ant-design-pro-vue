import {
  // monitor01
  adAndFireWall,
  ehtsecServer,
  ehtsecServerAnalysis,
  llzxServerAnalysis,
  llhlwxServerAnalysis,
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

  // middleOffice
  succLine,
  succState
} from '@/api/single'

const single = {
  state: {
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
    succState: {},
    succLine: []
  },

  getters: {
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
            console.log("ehtsecState")
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
