<template>
  <div class="ht-container">
    <a-row>
      <a-col :sm="24" :md="24" :lg="11">
        <section class="ht-left-section">
          <header class="ht-header">ECC监控系统-中台</header>
          <a-card title="网上开户">
            <a-row>
              <a-col :sm="24" :md="24" :lg="{ span: 12}">
                <p class="ht-content">
                  当日开户数
                  <strong class="ht-number">564,900</strong>
                  <small class="ht-percent">11.38%</small>
                  <small class="ht-percent-tips">
                    <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                  </small>
                </p>
                <p class="ht-content">
                  开户失败数
                  <strong class="ht-number">564,900</strong>
                  <small class="ht-percent">11.38%</small>
                  <small class="ht-percent-tips">
                    <a-icon type="fall" class="ht-percent-icon-down"/>同比昨日
                  </small>
                </p>
              </a-col>
              <a-col :sm="{ span: 10}" :md="{ span: 10}" :lg="{ span:4}">
                <div class="ht-content" style="margin-top:1rem;text-align:center">
                  时延
                  <strong class="ht-number">4ms</strong>
                  <a-progress
                    type="line"
                    :percent="75"
                    :showInfo="false"
                    strokeColor="#188882"
                    status="active"
                  />
                </div>
              </a-col>
              <a-col :sm="{ span: 4}" :md="{ span: 4}" :lg="{ span: 3}">
                <div class="ht-content" style="margin-top:1rem;text-align:right">成功率</div>
              </a-col>
              <a-col :sm="{ span: 10}" :md="{ span: 10}" :lg="{ span: 4}">
                <div id="wskhSuccessRateCharts" style="height: 6rem;"></div>
              </a-col>
            </a-row>
            <a-row>
              <a-col>
                <div id="wskhEcharts" style="height: 24rem;"></div>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="融资融券">
            <a-row>
              <a-col :xs="24" :sm="24" :md="{ span: 18}" :lg="{ span:18}">
                <div id="rzrqCharts" style="height: 16rem;"></div>
              </a-col>
              <a-col :xs="24" :sm="24" :md="{ span: 4}" :lg="{ span: 4}">
                <div class="ht-content" style="margin-top:2rem">
                  时延
                  <strong class="ht-number">4ms</strong>
                  <a-progress
                    type="line"
                    :percent="75"
                    :showInfo="false"
                    strokeColor="#188882"
                    status="active"
                  />
                </div>
                <div class="ht-content" style="margin-top:2rem">
                  成功率
                  <strong class="ht-number">98%</strong>
                  <a-progress
                    type="line"
                    :percent="98"
                    :showInfo="false"
                    strokeColor="#0C6FC3"
                    status="active"
                  />
                </div>
              </a-col>
            </a-row>
          </a-card>
        </section>
      </a-col>
      <a-col :sm="24" :md="24" :lg="13">
        <section class="ht-right-section">
          <a-row>
            <a-col :sm="24" :md="24" :lg="13">
              <a-card title="账户中心">
                <a-row>
                  <a-col :sm="24" :md="24" :lg="16">
                    <p class="ht-content">
                      业 务 量
                      <strong class="ht-number">564,900</strong>
                      <small class="ht-percent">11.38%</small>
                      <small class="ht-percent-tips">
                        <a-icon type="rise" class="ht-percent-icon-up"/>
                      </small>
                    </p>
                    <p class="ht-content">
                      在线用户数
                      <strong class="ht-number">564,900</strong>
                      <small class="ht-percent">11.38%</small>
                      <small class="ht-percent-tips">
                        <a-icon type="fall" class="ht-percent-icon-down"/>
                      </small>
                    </p>
                    <p class="ht-content">
                      服务器负载
                      <strong class="ht-number">564,900</strong>
                    </p>
                  </a-col>
                  <a-col :sm="24" :md="24" :lg="8">
                    <div class="ht-content">
                      时延
                      <strong class="ht-number">4ms</strong>
                      <a-progress
                        type="line"
                        :percent="75"
                        :showInfo="false"
                        strokeColor="#188882"
                        status="active"
                      />
                      <div class="ht-content" style="margin-top:1.2rem">
                        成功率
                        <strong class="ht-number">98%</strong>
                        <a-progress
                          type="line"
                          :percent="98"
                          :showInfo="false"
                          strokeColor="#0C6FC3"
                          status="active"
                        />
                      </div>
                    </div>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="24">
                    <div id="zhzxCharts" style="height: 15rem;"></div>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
            <a-col :sm="24" :md="24" :lg="11">
              <a-card title="银证转账">
                <a-row>
                  <a-col :sm="24" :md="24" :lg="14">
                    <p class="ht-content">
                      转入金额
                      <strong class="ht-number">564,900</strong>
                    </p>
                    <p class="ht-content">
                      转出金额
                      <strong class="ht-number">564,900</strong>
                    </p>
                    <p class="ht-content">
                      服务器负载
                      <strong class="ht-number">564,900</strong>
                    </p>
                  </a-col>
                  <a-col :sm="24" :md="24" :lg="10">
                    <div class="ht-content">
                      时延
                      <strong class="ht-number">4ms</strong>
                      <a-progress
                        type="line"
                        :percent="75"
                        :showInfo="false"
                        strokeColor="#188882"
                        status="active"
                      />
                      <div class="ht-content" style="margin-top:1.2rem">
                        成功率
                        <strong class="ht-number">98%</strong>
                        <a-progress
                          type="line"
                          :percent="98"
                          :showInfo="false"
                          strokeColor="#0C6FC3"
                          status="active"
                        />
                      </div>
                    </div>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="24">
                    <div id="yzzzCharts" style="height: 15rem;"></div>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-card title="员工平台" class="ht-section">
                <a-row>
                  <a-col :span="12">
                    <p class="ht-content">
                      当前在线用户数
                      <strong class="ht-number">564,900</strong>
                    </p>
                    <p class="ht-content">
                      当日最大在线用户数
                      <strong class="ht-number">564,900</strong>
                      <small class="ht-percent">11.38%</small>
                      <small class="ht-percent-tips">
                        <a-icon type="fall" class="ht-percent-icon-down"/>
                      </small>
                    </p>
                    <p class="ht-content">
                      各服务器应用负载
                      <strong class="ht-number">564,900</strong>
                    </p>
                  </a-col>
                  <a-col :span="3" :offset="1">
                    <div class="ht-content" style="margin-top:1.2rem;text-align:center">
                      时延
                      <strong class="ht-number">4ms</strong>
                      <a-progress
                        type="line"
                        :percent="75"
                        :showInfo="false"
                        strokeColor="#188882"
                        status="active"
                        style="margin-top:1rem"
                      />
                    </div>
                  </a-col>
                  <a-col :span="2" :offset="1">
                    <div class="ht-content" style="margin-top:1.2rem;text-align:right">成功率</div>
                  </a-col>
                  <a-col :span="3" :offset="1">
                    <div id="ygptSuccessRateCharts" style="height: 8rem;"></div>
                  </a-col>
                </a-row>
                <a-row>
                  <div id="ygptEcharts" style="height: 18rem;"></div>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
        </section>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import './index.less'
import echarts from 'echarts'
import { mapActions } from 'vuex'
export default {
  name: 'middleOffice',
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
  mounted() {
    this.succLine().then(res => {
      console.log(res.data)
    })
    this.drawLine()
  },
  methods: {
    ...mapActions(['ehtsecState', 'ehtsecLine','succState', 'succLine']),
    drawLine() {
      let wskhEcharts = echarts.init(document.getElementById('wskhEcharts'))
      let wskhSuccessRateCharts = echarts.init(document.getElementById('wskhSuccessRateCharts'))
      let rzrqCharts = echarts.init(document.getElementById('rzrqCharts'))
      let zhzxCharts = echarts.init(document.getElementById('zhzxCharts'))
      let yzzzCharts = echarts.init(document.getElementById('yzzzCharts'))
      let ygptSuccessRateCharts = echarts.init(document.getElementById('ygptSuccessRateCharts'))
      let ygptEcharts = echarts.init(document.getElementById('ygptEcharts'))

      window.onresize = function() {
        wskhEcharts.resize()
        wskhSuccessRateCharts.resize()
        rzrqCharts.resize()
        zhzxCharts.resize()
        yzzzCharts.resize()
        ygptSuccessRateCharts.resize()
        ygptEcharts.resize()
      }

      ygptEcharts.setOption({
        title: {
          left: 'left',
          text: '请求数',
          textStyle: {
            color: '#106ad3'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: {
            lineStyle: {
              color: '#1C5F88',
              width: 0
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0F1D3A'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#1C5F88',
              width: 1
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0F1D3A'
            }
          }
        },
        series: [
          {
            name: '今日',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            itemStyle: {
              color: 'rgb(90, 196, 243)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(33, 82, 188)'
                },
                {
                  offset: 1,
                  color: 'rgb(19, 37, 71)'
                }
              ])
            },
            smooth: true
          }
        ]
      })

      ygptSuccessRateCharts.setOption({
        tooltip: {
          formatter: '{b} : {d}%'
        },
        color: ['#20273E'],
        graphic: {
          type: 'text',
          left: 'center',
          top: 'center',
          z: 2,
          zlevel: 100,
          style: {
            text: '98%',
            fill: '#fff',
            font: 'bolder 1.5rem cursive'
          }
        },
        series: [
          {
            name: '网上开户',
            type: 'pie',
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false
              }
            },
            data: [
              {
                value: 98,
                name: '成功率',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0.5,
                        color: 'rgb(74, 141, 230)'
                      },
                      {
                        offset: 1,
                        color: 'rgb(25, 43, 90)'
                      }
                    ])
                  }
                }
              },
              { value: 2, name: '失败率' }
            ]
          }
        ]
      })

      yzzzCharts.setOption({
        title: {
          left: 'left',
          text: '请求数',
          textStyle: {
            color: '#106ad3'
          }
        },
        legend: {
          data: ['昨日', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#1C5F88',
              width: 0
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0F1D3A'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#1C5F88',
              width: 1
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0F1D3A'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 10,
            barGap: '30%',
            name: '昨日',
            data: [720, 832, 801, 834, 790, 1430, 1220],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#3DACB1' },
                  { offset: 1, color: '#1D575A' }
                ])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#1D575A' },
                  { offset: 1, color: '#3DACB1' }
                ])
              }
            }
          },
          {
            type: 'bar',
            barWidth: 10,
            barGap: '30%',
            name: '今日',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#C9B67F' },
                  { offset: 1, color: '#807146' }
                ])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#807146' },
                  { offset: 1, color: '#C9B67F' }
                ])
              }
            }
          }
        ]
      })

      zhzxCharts.setOption({
        title: {
          left: 'left',
          text: '请求数',
          textStyle: {
            color: '#106ad3'
          }
        },
        legend: {
          data: ['昨日', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#1C5F88',
              width: 0
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0F1D3A'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#1C5F88',
              width: 1
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0F1D3A'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 10,
            barGap: '30%',
            name: '今日',
            data: [720, 832, 801, 834, 790, 1430, 1220],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#9A4F48' },
                  { offset: 1, color: '#653431' }
                ])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#653431' },
                  { offset: 1, color: '#9A4F48' }
                ])
              }
            }
          },
          {
            type: 'bar',
            barWidth: 10,
            barGap: '30%',
            name: '昨日',
            data: [720, 832, 801, 834, 790, 1430, 1220],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#44A4CE' },
                  { offset: 1, color: '#2B6389' }
                ])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2B6389' },
                  { offset: 1, color: '#44A4CE' }
                ])
              }
            }
          }
        ]
      })
      rzrqCharts.setOption({
        title: {
          left: 'left',
          text: '请求数',
          textStyle: {
            color: '#106ad3'
          }
        },
        legend: {
          data: ['昨日', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#1C5F88',
              width: 0
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0F1D3A'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#1C5F88',
              width: 1
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0F1D3A'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 10,
            barGap: '30%',
            name: '今日',
            data: [720, 832, 801, 834, 790, 1430, 1220],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#7A8A2F' },
                  { offset: 1, color: '#A4BD2C' }
                ])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#A4BD2C' },
                  { offset: 1, color: '#7A8A2F' }
                ])
              }
            }
          },
          {
            type: 'bar',
            barWidth: 10,
            barGap: '30%',
            name: '昨日',
            data: [720, 832, 801, 834, 790, 1430, 1220],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#228290' },
                  { offset: 1, color: '#1A4950' }
                ])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#228290' },
                  { offset: 1, color: '#1A4950' }
                ])
              }
            }
          }
        ]
      })
      wskhSuccessRateCharts.setOption({
        tooltip: {
          formatter: '{b} : {d}%'
        },
        color: ['#20273E'],
        graphic: {
          type: 'text',
          left: 'center',
          top: 'center',
          z: 2,
          zlevel: 100,
          style: {
            text: '98%',
            fill: '#fff',
            font: 'bolder 1.5rem cursive'
          }
        },
        series: [
          {
            name: '网上开户',
            type: 'pie',
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: false
              }
            },
            data: [
              {
                value: 98,
                name: '成功率',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0.5,
                        color: 'rgb(74, 141, 230)'
                      },
                      {
                        offset: 1,
                        color: 'rgb(25, 43, 90)'
                      }
                    ])
                  }
                }
              },
              { value: 2, name: '失败率' }
            ]
          }
        ]
      })
      wskhEcharts.setOption({
        title: {
          left: 'left',
          text: '请求数',
          textStyle: {
            color: '#106ad3'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['昨日', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: {
            lineStyle: {
              color: '#1C5F88',
              width: 0
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0F1D3A'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#1C5F88',
              width: 1
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0F1D3A'
            }
          }
        },
        series: [
          {
            name: '昨日',
            data: [720, 832, 801, 834, 790, 1430, 1220],
            type: 'line',
            smooth: true,
            itemStyle: {
              color: 'rgb(255, 235, 21)'
            }
          },
          {
            name: '今日',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            itemStyle: {
              color: 'rgb(129, 32, 245)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(60, 16, 137)'
                },
                {
                  offset: 1,
                  color: 'rgb(17, 17, 60)'
                }
              ])
            },
            smooth: true
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
</style>
