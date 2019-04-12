<template>
  <div>
    <a-divider style="font-weight:600;font-size: 1.25rem;">站点防火墙及AD设备性能展示</a-divider>
    <a-row :gutter="50">
      <a-col :span="12">
        <a-table
          :rowKey="(record)=>record.ip"
          :columns="adColumns"
          :dataSource="adData1"
          size="small"
          :pagination="false"
        ></a-table>
      </a-col>
      <a-col :span="12">
        <a-table
          :rowKey="(record)=>record.ip"
          :columns="adColumns"
          :dataSource="adData2"
          size="small"
          :pagination="false"
        ></a-table>
      </a-col>
    </a-row>
    <a-divider style="font-weight:600;font-size: 1.25rem;">e海通财交易监控</a-divider>
    <a-row :gutter="50">
      <a-col :span="12">
        <a-table
          :rowKey="(record)=>record.ip"
          :columns="ehtsecAnalysisColumns"
          :dataSource="ehtsecAnalysisData1"
          size="small"
          :pagination="false"
        ></a-table>
      </a-col>
      <a-col :span="12">
        <a-table
          :rowKey="(record)=>record.ip"
          :columns="ehtsecAnalysisColumns"
          :dataSource="ehtsecAnalysisData2"
          size="small"
          :pagination="false"
        ></a-table>
      </a-col>
    </a-row>
    <!-- <a-row>
      <a-table
        :rowKey="(record)=>record.ip"
        :columns="ehtsecColumns"
        :dataSource="ehtsecData"
        :scroll="{ x: 4200, y:1000 }"
        size="small"
        :pagination="false"
      ></a-table>
    </a-row>-->
    <a-divider style="font-weight:600;font-size: 1.25rem;">交易站点--广域网专线</a-divider>
    <a-row>
      <a-table
        :rowKey="(record)=>record.ipaddr+record.indexname"
        :columns="llAnalysisColumns"
        :dataSource="llzxInfo"
        size="small"
        :pagination="false"
      ></a-table>
    </a-row>
    <a-divider style="font-weight:600;font-size: 1.25rem;">交易站点--互联网线路</a-divider>
    <a-row>
      <a-table
        :rowKey="(record)=>record.ipaddr+record.indexname"
        :columns="llAnalysisColumns"
        :dataSource="llhlwxInfo"
        size="small"
        :pagination="false"
      ></a-table>
    </a-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      adColumns: [
        { title: '站点', dataIndex: 'name', width: 200 },
        { title: 'ip地址', dataIndex: 'ip', width: 150 },
        { title: 'CPU利用率(%)', width: 100, dataIndex: 'cpuPercent' },
        { title: 'MEM利用率(%)', dataIndex: 'mem', width: 150 },
        { title: '当前连接数', width: 100, dataIndex: 'conn' },
        { title: '新建连接数', width: 100, dataIndex: 'newConn' }
      ],
      ehtsecAnalysisColumns: [
        { title: '站点', dataIndex: 'location', width: 150 },
        { title: '当前用户数', dataIndex: 'dqyhs', width: 100 },
        { title: '最大用户数', width: 100, dataIndex: 'zdyh' },
        { title: '当前等待', dataIndex: 'dqdd', width: 100 },
        { title: '最大等待', width: 100, dataIndex: 'zddd' },
        { title: '总请求', width: 100, dataIndex: 'zqq' },
        { title: '成功数', width: 100, dataIndex: 'cgs' },
        { title: '失败数', width: 100, dataIndex: 'sbs' },
        { title: '异常数', width: 100, dataIndex: 'ycs' }
      ],
      llAnalysisColumns: [
        { title: '线路名称', dataIndex: 'lineName', width: 150 },
        { title: '设备名称', dataIndex: 'name', width: 150 },
        {
          title: 'IP地址',
          width: 100,
          dataIndex: 'ipaddr',
          sorter: (a, b) => {
            const aArr = a.ip.split('.')
            const bArr = b.ip.split('.')
            if (aArr[0] - bArr[0] != 0) {
              return aArr[0] - bArr[0]
            } else if (aArr[1] - bArr[1] != 0) {
              return aArr[1] - bArr[1]
            } else if (aArr[2] - bArr[2] != 0) {
              return aArr[2] - bArr[2]
            } else {
              return aArr[3] - bArr[3]
            }
          }
        },
        { title: '网络端口', dataIndex: 'indexname', width: 150 },
        { title: '进流量(Mbps)', width: 100, dataIndex: 'ifIn', sorter: (a, b) => a.ifIn - b.ifIn },
        { title: '出流量(Mbps)', width: 100, dataIndex: 'ifOut', sorter: (a, b) => a.ifOut - b.ifOut },
        { title: '进流量利用率(%)', width: 100, dataIndex: 'ifInUse', sorter: (a, b) => a.ifInUse - b.ifInUse },
        { title: '出流量利用率(%)', width: 100, dataIndex: 'ifOutUse', sorter: (a, b) => a.ifOutUse - b.ifOutUse }
      ],
      ehtsecColumns: [
        {
          title: '站点',
          dataIndex: 'location',
          width: 120,
          fixed: 'left'
        },
        {
          title: 'ip地址',
          dataIndex: 'ip',
          width: 150,
          fixed: 'left',
          sorter: (a, b) => {
            const aArr = a.ip.split('.')
            const bArr = b.ip.split('.')
            if (aArr[0] - bArr[0] != 0) {
              return aArr[0] - bArr[0]
            } else if (aArr[1] - bArr[1] != 0) {
              return aArr[1] - bArr[1]
            } else if (aArr[2] - bArr[2] != 0) {
              return aArr[2] - bArr[2]
            } else {
              return aArr[3] - bArr[3]
            }
          }
        },
        // { title: '标题', dataIndex: 'title', width: 100},
        { title: '当前用户', dataIndex: 'user_cnt', width: 120, sorter: (a, b) => a.user_cnt - b.user_cnt },
        { title: '最大用户', dataIndex: 'max_user_cnt', width: 120, sorter: (a, b) => a.max_user_cnt - b.max_user_cnt },
        {
          title: '当前等待',
          dataIndex: 'current_inqueue',
          width: 120,
          sorter: (a, b) => a.current_inqueue - b.current_inqueue
        },
        { title: '最大等待', dataIndex: 'max_inqueue', width: 120, sorter: (a, b) => a.max_inqueue - b.max_inqueue },
        {
          title: '总 请 求',
          dataIndex: 'total_enqueue',
          width: 120,
          sorter: (a, b) => a.total_enqueue - b.total_enqueue
        },
        {
          title: '已 处 理',
          dataIndex: 'total_dequeue',
          width: 120,
          sorter: (a, b) => a.total_dequeue - b.total_dequeue
        },
        {
          title: '已发转发',
          dataIndex: 'current_transing',
          width: 120,
          sorter: (a, b) => a.current_transing - b.current_transing
        },
        {
          title: '已收转发',
          dataIndex: 'current_transed',
          width: 120,
          sorter: (a, b) => a.current_transed - b.current_transed
        },
        {
          title: '待收转发',
          dataIndex: 'trans_wait_rev_cnt',
          width: 120,
          sorter: (a, b) => a.trans_wait_rev_cnt - b.trans_wait_rev_cnt
        },
        {
          title: '转发超时',
          dataIndex: 'overt_time_cnt',
          width: 120,
          sorter: (a, b) => a.overt_time_cnt - b.overt_time_cnt
        },
        { title: '成 功 数', dataIndex: 'succuss_cnt', width: 120, sorter: (a, b) => a.succuss_cnt - b.succuss_cnt },
        { title: '失 败 数', dataIndex: 'failed_cnt', width: 120, sorter: (a, b) => a.failed_cnt - b.failed_cnt },
        {
          title: '异 常 数',
          dataIndex: 'exception_cnt',
          width: 120,
          sorter: (a, b) => a.exception_cnt - b.exception_cnt
        },
        {
          title: '心 跳 包',
          dataIndex: 'heartbeat_cnt',
          width: 120,
          sorter: (a, b) => a.heartbeat_cnt - b.heartbeat_cnt
        },

        {
          title: '当前处理/秒',
          dataIndex: 'total_dequeue_speed',
          width: 150,
          sorter: (a, b) => a.total_dequeue_speed - b.total_dequeue_speed
        },
        {
          title: '最大处理/秒',
          dataIndex: 'max_deal_speed',
          width: 150,
          sorter: (a, b) => a.max_deal_speed - b.max_deal_speed
        },
        {
          title: '当前转发/秒',
          dataIndex: 'current_transed_speed',
          width: 150,
          sorter: (a, b) => a.current_transed_speed - b.current_transed_speed
        },
        {
          title: '最大转发/秒',
          dataIndex: 'max_trans_speed',
          width: 150,
          sorter: (a, b) => a.max_trans_speed - b.max_trans_speed
        },
        { title: 'cpu利用率', dataIndex: 'cpu_usage', width: 120, sorter: (a, b) => a.cpu_usage - b.cpu_usage },
        // { title: '当前时间', dataIndex: 'time_stamp', width: 120,sorter: (a, b) => a.time_stamp - b.time_stamp},

        { title: 'A股笔数', dataIndex: 'entrust_cnt', width: 120, sorter: (a, b) => a.entrust_cnt - b.entrust_cnt },
        {
          title: '买入笔数',
          dataIndex: 'buy_entrust_cnt',
          width: 120,
          sorter: (a, b) => a.buy_entrust_cnt - b.buy_entrust_cnt
        },
        {
          title: '卖出笔数',
          dataIndex: 'sell_entrust_cnt',
          width: 120,
          sorter: (a, b) => a.sell_entrust_cnt - b.sell_entrust_cnt
        },

        {
          title: 'A股金额',
          dataIndex: 'entrust_balance',
          width: 120,
          sorter: (a, b) => a.entrust_balance - b.entrust_balance
        },
        {
          title: '买入金额',
          dataIndex: 'buy_entrust_bal',
          width: 120,
          sorter: (a, b) => a.buy_entrust_bal - b.buy_entrust_bal
        },
        {
          title: '卖出金额',
          dataIndex: 'sell_entrust_bal',
          width: 120,
          sorter: (a, b) => a.sell_entrust_bal - b.sell_entrust_bal
        },

        {
          title: 'H股笔数',
          dataIndex: 'entrust_cnt_hh',
          width: 120,
          sorter: (a, b) => a.entrust_cnt_hh - b.entrust_cnt_hh
        },
        {
          title: '买入笔数',
          dataIndex: 'buy_entrust_cnt_hh',
          width: 120,
          sorter: (a, b) => a.buy_entrust_cnt_hh - b.buy_entrust_cnt_hh
        },
        {
          title: '卖出笔数',
          dataIndex: 'sell_entrust_cnt_hh',
          width: 120,
          sorter: (a, b) => a.sell_entrust_cnt_hh - b.sell_entrust_cnt_hh
        },

        {
          title: 'H股金额',
          dataIndex: 'entrust_bal_hh',
          width: 120,
          sorter: (a, b) => a.entrust_bal_hh - b.entrust_bal_hh
        },
        {
          title: '买入金额',
          dataIndex: 'buy_entrust_bal_hh',
          width: 120,
          sorter: (a, b) => a.buy_entrust_bal_hh - b.buy_entrust_bal_hh
        },
        {
          title: '卖出金额',
          dataIndex: 'sell_entrust_bal_hh',
          width: 120,
          sorter: (a, b) => a.sell_entrust_bal_hh - b.sell_entrust_bal_hh
        }
        // { title: 'TransMid_Common_time', dataIndex: 'TransMid_Common_time', width: 120},
      ],
      adData1: [],
      adData2: [],
      ehtsecAnalysisData1: [],
      ehtsecAnalysisData2: [],
      ehtsecData: [],
      llzxInfo: [],
      llhlwxInfo: []
    }
  },
  created() {
    this.adAndFireWall().then(res => {
      this.adData1 = res.data.slice(0, parseInt(res.data.length / 2))
      this.adData2 = res.data.slice(parseInt(res.data.length / 2), res.data.length)
    })
    this.ehtsecServerAnalysis().then(res => {
      this.ehtsecAnalysisData1 = res.data.slice(0, parseInt(res.data.length / 2))
      this.ehtsecAnalysisData2 = res.data.slice(parseInt(res.data.length / 2), res.data.length)
    })
    // this.ehtsecServer().then(res => {
    //   this.ehtsecData = res.data
    // })
    this.llzxServerAnalysis().then(res => {
      this.llzxInfo = res.data
    })
    this.llhlwxServerAnalysis().then(res => {
      this.llhlwxInfo = res.data
    })
    this.intervalid = setInterval(() => {
      this.adAndFireWall().then(res => {
        this.adData1 = res.data.slice(0, parseInt(res.data.length / 2))
        this.adData2 = res.data.slice(parseInt(res.data.length / 2), res.data.length)
      })
      this.ehtsecServerAnalysis().then(res => {
        this.ehtsecAnalysisData1 = res.data.slice(0, parseInt(res.data.length / 2))
        this.ehtsecAnalysisData2 = res.data.slice(parseInt(res.data.length / 2), res.data.length)
      })
      // this.ehtsecServer().then(res => {
      //   this.ehtsecData = res.data
      // })
      this.llzxServerAnalysis().then(res => {
        this.llzxInfo = res.data
      })
      this.llhlwxServerAnalysis().then(res => {
        this.llhlwxInfo = res.data
      })
    }, 10000)
  },
  methods: {
    ...mapActions([
      'adAndFireWall',
      'ehtsecServerAnalysis',
      'llServerAnalysis',
      'llzxServerAnalysis',
      'llhlwxServerAnalysis'
    ])
  },
  beforeDestroy() {
    clearInterval(this.intervalid)
  }
}
</script>

<style lang="less" scoped>
</style>
