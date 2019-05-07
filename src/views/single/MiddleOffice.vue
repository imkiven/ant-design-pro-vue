<template>
  <div class="ht-container">
    <a-row>
      <a-col :sm="24" :md="24" :lg="11">
        <section class="ht-left-section">
          <header class="ht-header">ECC监控系统-中台</header>
          <a-card title="网上开户">
            <a href="#" @click="() => setModal(true,'wskh')" slot="extra">服务器列表</a>
            <a-row>
              <a-col :sm="24" :md="24" :lg="{ span: 12}">
                <p class="ht-content">
                  当日总请求
                  <strong class="ht-number">{{this.openAccountState.totalRequest}}</strong>
                  <!-- <small class="ht-percent">11.38%</small>
                  <small class="ht-percent-tips">
                    <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                  </small>-->
                </p>
                <p class="ht-content">
                  当日开户数
                  <strong
                    class="ht-number"
                  >{{this.openAccountState.totalSuccess}}</strong>
                  <!-- <small class="ht-percent">11.38%</small>
                  <small class="ht-percent-tips">
                    <a-icon type="fall" class="ht-percent-icon-down"/>同比昨日
                  </small>-->
                </p>
              </a-col>
              <a-col :sm="24" :md="24" :lg="{ span: 12}">
                <p class="ht-content">
                  当日新注册用户数
                  <strong class="ht-number">{{this.openAccountState.totalRegist}}</strong>
                  <!-- <small class="ht-percent">11.38%</small>
                  <small class="ht-percent-tips">
                    <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                  </small>-->
                </p>
                <p class="ht-content">
                  当前请求数(笔/秒)
                  <strong
                    class="ht-number"
                  >{{this.openAccountState.tps}}</strong>
                  <!-- <small class="ht-percent">11.38%</small>
                  <small class="ht-percent-tips">
                    <a-icon type="fall" class="ht-percent-icon-down"/>同比昨日
                  </small>-->
                </p>
              </a-col>
              <!-- <a-col :sm="{ span: 10}" :md="{ span: 10}" :lg="{ span:4}">
                <div class="ht-content" style="margin-top:15px;">
                  时延
                  <strong class="ht-number">--ms</strong>
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
                <div class="ht-content" style="margin-top:15px;text-align:right">成功率</div>
              </a-col>
              <a-col :sm="{ span: 10}" :md="{ span: 10}" :lg="{ span: 4}">
                <v-chart :options="wskhSuccessRateOptions" style="height: 100px;width:98%"></v-chart>
              </a-col> -->
            </a-row>
            <a-row>
              <a-col>
                <v-chart :options="wskhOptions" style="height: 320px;width:98%"></v-chart>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="融资融券管理系统">
            <a href="#" @click="() => setModal(true,'rzrq')" slot="extra">服务器列表</a>
            <a-row>
              <a-col :xs="24" :sm="24" :md="{ span: 18}" :lg="{ span:18}">
                <v-chart :options="rzrqOptions" style="height: 320px;width:98%"></v-chart>
              </a-col>
              <a-col :xs="24" :sm="24" :md="{ span: 4}" :lg="{ span: 4}">
                <div class="ht-content" style="margin-top:60px">
                  时延
                  <strong class="ht-number">--ms</strong>
                  <a-progress
                    type="line"
                    :percent="75"
                    :showInfo="false"
                    strokeColor="#188882"
                    status="active"
                  />
                </div>
                <div class="ht-content" style="margin-top:60px">
                  成功率
                  <strong class="ht-number">--</strong>
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
            <a-col :sm="24" :md="24" :lg="12">
              <a-card title="账户中心">
                <a href="#" @click="() => setModal(true,'zhzx')" slot="extra">服务器列表</a>
                <a-row>
                  <a-col :sm="24" :md="24" :lg="12">
                    <p class="ht-content">
                      总请求数
                      <strong class="ht-number">{{this.accountCenterState.totalReq}}</strong>
                      <!-- <small class="ht-percent">11.38%</small>
                      <small class="ht-percent-tips">
                        <a-icon type="rise" class="ht-percent-icon-up"/>
                      </small>-->
                    </p>
                    <div class="ht-content">
                      时延
                      <strong class="ht-number">{{this.accountCenterState.avgTime}}ms</strong>
                      <a-row>
                        <a-col :sm="24" :md="24" :lg="18">
                          <a-progress
                            type="line"
                            :percent="75"
                            :showInfo="false"
                            strokeColor="#188882"
                            status="active"
                          />
                        </a-col>
                      </a-row>
                    </div>
                    <!-- <p class="ht-content">
                      在线用户
                      <strong class="ht-number">--</strong>
                      <small class="ht-percent">11.38%</small>
                      <small class="ht-percent-tips">
                        <a-icon type="fall" class="ht-percent-icon-down"/>
                      </small>
                    </p> -->
                  </a-col>
                  <a-col :sm="24" :md="24" :lg="12">
                    <p class="ht-content">
                      单业务最大耗时
                      <strong class="ht-number">{{parseInt(this.accountCenterState.maxWaitTime/1000)}}s</strong>
                    </p>
                      <div class="ht-content">
                        成功率
                        <strong class="ht-number">{{this.accountCenterState.successRate * 100}} %</strong>
                        <a-row>
                        <a-col :sm="24" :md="24" :lg="18">
                        <a-progress
                          type="line"
                          :percent="this.accountCenterState.successRate*100"
                          :showInfo="false"
                          strokeColor="#0C6FC3"
                          status="active"
                        />
                        </a-col>
                      </a-row>
                    </div>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="24">
                    <v-chart :options="zhzxOptions" style="height: 260px;width:98%"></v-chart>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
            <a-col :sm="24" :md="24" :lg="{ span:11,offset :1}">
              <a-card title="银证转账">
                <a href="#" @click="() => setModal(true,'yzzz')" slot="extra">服务器列表</a>
                <a-row>
                  <a-col :sm="24" :md="24" :lg="14">
                    <p class="ht-content">
                      转入金额(万元)
                      <strong class="ht-number">{{parseInt(this.bankTransferState.transferin/10000)}}</strong>
                    </p>
                    <p class="ht-content">
                      转出金额(万元)
                      <strong class="ht-number">{{parseInt(this.bankTransferState.transferout/10000)}}</strong>
                    </p>
                    
                  </a-col>
                  <a-col :sm="24" :md="24" :lg="10">
                    <!-- <div class="ht-content">
                      时延
                      <strong class="ht-number">--ms</strong>
                      <a-progress
                        type="line"
                        :percent="75"
                        :showInfo="false"
                        strokeColor="#188882"
                        status="active"
                      />
                    </div> -->
                    <p class="ht-content">
                      总请求数
                      <strong class="ht-number">{{this.bankTransferState.totalReq}}</strong>
                    </p>
                      <div class="ht-content">
                        成功率
                        <strong class="ht-number">{{this.bankTransferState.successRate * 100}}%</strong>
                        <a-progress
                          type="line"
                          :percent="this.bankTransferState.successRate * 100"
                          :showInfo="false"
                          strokeColor="#0C6FC3"
                          status="active"
                        />
                      </div>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :span="24">
                    <v-chart :options="yzzzOptions" style="height: 260px;width:98%"></v-chart>
                  </a-col>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="24">
              <a-card title="员工平台" class="ht-section">
                <a href="#" @click="() => setModal(true,'ygpt')" slot="extra">服务器列表</a>
                <a-row>
                  <a-col :sm="24" :md="24" :lg="{ span:8}">
                    <!-- <p class="ht-content">
                      当前在线用户数
                      <strong class="ht-number">--</strong>
                    </p>
                    <p class="ht-content">
                      当日最大在线用户数
                      <strong class="ht-number">--</strong>
                      <!-- <small class="ht-percent">11.38%</small>
                      <small class="ht-percent-tips">
                        <a-icon type="fall" class="ht-percent-icon-down"/>
                      </small>
                    </p> -->
                    <p class="ht-content" style="margin-top:30px;">
                      当前请求数
                      <strong class="ht-number">{{this.succState.totalDps}}</strong>
                    </p>
                  </a-col>
                  <a-col :sm="12" :md="12" :lg="{ span:6}">
                    <div class="ht-content" style="margin-top:30px;">
                      时延
                      <strong class="ht-number">{{this.succState.avgTime}}ms</strong>
                      <a-row>
                        <a-col :sm="16" :md="16" :lg="14">
                      <a-progress
                        type="line"
                        :percent="75"
                        :showInfo="false"
                        strokeColor="#188882"
                        status="active"
                      />
                      </a-col>
                      </a-row>
                    </div>
                  </a-col>
                  <a-col :sm="12" :md="12" :lg="{ span:3}">
                    <div class="ht-content" style="margin-top:30px;text-align:right">成功率</div>
                  </a-col>
                  <a-col :sm="12" :md="12" :lg="{ span:4}" style="margin-top:30px;">
                    <v-chart :options="ygptSuccessRateOptions" style="height: 100px;width:98%"></v-chart>
                  </a-col>
                </a-row>
                <a-row>
                  <v-chart :options="ygptOptions" style="height: 300px;width:98%"></v-chart>
                </a-row>
              </a-card>
            </a-col>
          </a-row>
        </section>
      </a-col>
    </a-row>
    <a-modal
      :title="modalTitle"
      centered
      width="1280px"
      v-model="modalVisible"
      :footer="null"
      @ok="() => modalVisible = false"
    >
      <a-row>
        <a-col :sm="24" :md="8" :lg="{ span: 8}">
          <a-input-search style="margin-bottom: 8px" placeholder="请输入IP地址" @change="onChange"/>
          <div class="htsec-infinite-container">
            <a-list size="large" bordered :dataSource="data">
              <div slot="header">
                <div class="list-item-wrap">
                  <div>IP 地址</div>
                  <!-- <div>机房位置</div> -->
                </div>
              </div>
              <a-list-item
                slot="renderItem"
                slot-scope="item, index"
                @click="changIpItem(item,index)"
                :class="{'current':currentIndex===index}"
              >
                <a-icon
                  type="swap-right"
                  style="position:absolute;color:red;left:1px;padding-top:3px"
                  v-if="currentIndex===index"
                />
                <div class="list-item-wrap">
                  <div>{{item}}</div>
                  <!-- <div>机房位置{{item.index}}</div> -->
                </div>
              </a-list-item>
            </a-list>
          </div>
        </a-col>
        <a-col :sm="24" :md="16" :lg="{ span: 16}">
          <v-chart id="CPUCharts" :options="CPUOptions" style="height: 200px;width:100%"></v-chart>
          <v-chart id="menCharts" :options="menOptions" style="height: 200px;width:100%"></v-chart>
          <v-chart id="diskCharts" :options="diskOptions" style="height: 200px;width:100%"></v-chart>
          <a-row>
            <a-col
              :sm="12"
              :md="12"
              :lg="{ span: 8}"
              v-if="this.dataInfo.userCount || this.dataInfo.waitCount"
            >
              <p class="ht-content">
                当前用户
                <strong class="ht-number">{{this.dataInfo.userCount}}</strong>
              </p>
              <p class="ht-content">
                当前等待
                <strong class="ht-number">{{this.dataInfo.waitCount}}</strong>
              </p>
            </a-col>
            <a-col
              :sm="12"
              :md="12"
              :lg="{ span: 8}"
              v-if="this.dataInfo.user_cnt || this.dataInfo.current_inqueue"
            >
              <p class="ht-content">
                当前用户
                <strong class="ht-number">{{this.dataInfo.user_cnt}}</strong>
              </p>
              <p class="ht-content">
                当前等待
                <strong class="ht-number">{{this.dataInfo.current_inqueue}}</strong>
              </p>
            </a-col>
            <a-col
              :sm="12"
              :md="12"
              :lg="{ span: 8}"
              v-if="this.dataInfo.max_inqueue || this.dataInfo.total_enqueue"
            >
              <p class="ht-content">
                最大等待
                <strong class="ht-number">{{this.dataInfo.max_inqueue}}</strong>
              </p>
              <p class="ht-content">
                总 请 求
                <strong class="ht-number">{{this.dataInfo.total_enqueue}}</strong>
              </p>
            </a-col>

            <!-- <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span: 6}">
              <v-chart
                id="succRateCharts"
                :options="succRateOptions"
                style="height: 140px;width:100%"
              ></v-chart>
            </a-col>
            <a-col :sm="12" :md="12" :lg="{ span: 8}" style="margin-top:25px">
              <p class="ht-content">
                成功数
                <strong class="ht-number">--</strong>
              </p>
              <p class="ht-content">
                失败数
                <strong class="ht-number">--</strong>
              </p>
            </a-col>
            <a-col :sm="24" :md="24" :lg="{ span: 10}">
              <p class="ht-content">
                当前处理总数
                <strong class="ht-number">--</strong>
              </p>
              <p class="ht-content">
                当前用户
                <strong class="ht-number">--</strong>
              </p>
              <p class="ht-content">
                当前等待
                <strong class="ht-number">--</strong>
              </p>
            </a-col>-->
          </a-row>
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>

<script>
import './blackDashboard.less'
import echarts from 'vue-echarts'
import './index.js'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'middleOffice',
  components: {
    'v-chart': echarts
  },
  created() {
    // 网上开户
    this.doOpenAccountLine()
    this.doOpenAccountState()
    this.doOpenAccountBase()
    // 账户中心
    this.doAccountCenterLine({ time: '00-00' })
    this.doAccountCenterState()
    this.doAccountCenterBase()
    this.doAccountCenterWaitline({ time: '00-00' })
    // 银证转账
    this.doBankTransferLine({ time: '00-00' })
    this.doBankTransferState()
    this.doBankTransferBase()
    // 员工平台
    this.doSuccLine({
      start: new Date(new Date().toLocaleDateString()).getTime() / 1000,
      end: Date.parse(new Date()) / 1000
    })
    this.doSuccState()
    this.doSuccBase()
    this.intervalid = setInterval(() => {
      // 网上开户
      this.doOpenAccountLine()
      this.doOpenAccountState()
      this.doOpenAccountBase()
      // 账户中心
      this.doAccountCenterLine({ time: '00-00' })
      this.doAccountCenterState()
      this.doAccountCenterBase()
      this.doAccountCenterWaitline({ time: '00-00' })
      // 银证转账
      this.doBankTransferLine({ time: '00-00' })
      this.doBankTransferState()
      this.doBankTransferBase()
      // 员工平台
      this.doSuccLine({
        start: new Date(new Date().toLocaleDateString()).getTime() / 1000,
        end: Date.parse(new Date()) / 1000
      })
      this.doSuccState()
      this.doSuccBase()
    }, 30000)
  },
  data() {
    return {
      modalTitle: '',
      modalVisible: false,
      data: [],
      dataInfo: {},
      dataList: [],
      currentIndex: 0,
      type: ''
    }
  },
  computed: {
    ...mapState({
      // common
      cpuPerformanceX: state => {
        if(state.single.kcmimPerformance) {
          return state.single.kcmimPerformance[0].x
        } else {
          return ""
        }
      },
      cpuPerformanceY: state => {
        if(state.single.kcmimPerformance) {
          return state.single.kcmimPerformance[0].y
        } else {
          return ""
        }
      },
      memPerformanceX: state => {
        if(state.single.kcmimPerformance) {
          return state.single.kcmimPerformance[1].x
        } else {
          return ""
        }
      },
      memPerformanceY: state => {
        if(state.single.kcmimPerformance) {
          return state.single.kcmimPerformance[1].y
        } else {
          return ""
        }
      },
      diskPerformanceX: state => {
        if(state.single.kcmimPerformance) {
          return state.single.kcmimPerformance[2].x
        } else {
          return ""
        }
      },
      diskPerformanceY: state => {
        if(state.single.kcmimPerformance) {
          return state.single.kcmimPerformance[2].y
        } else {
          return ""
        }
      },
      // 网上开户
      openAccountLineX: state => state.single.openAccountLine.x,
      openAccountLineY: state => state.single.openAccountLine.y,
      openAccountState: state => state.single.openAccountState,
      openAccountBaseX: state => state.single.openAccountBase.x,
      openAccountBaseY: state => state.single.openAccountBase.y,
      // 账户中心
      accountCenterLineX: state => state.single.accountCenterLine.x,
      accountCenterLineY: state => state.single.accountCenterLine.y,
      accountCenterState: state => state.single.accountCenterState,
      accountCenterBaseX: state => state.single.accountCenterBase.x,
      accountCenterBaseY: state => state.single.accountCenterBase.y,
      accountCenterWaitlineX: state => state.single.accountCenterWaitline.x,
      accountCenterWaitlineY: state => state.single.accountCenterWaitline.y,
      //银证转账
      bankTransferLineX: state => state.single.bankTransferLine.x,
      bankTransferLineY: state => state.single.bankTransferLine.y,
      bankTransferState: state => state.single.bankTransferState,
      bankTransferBaseX: state => state.single.bankTransferBase.x,
      bankTransferBaseY: state => state.single.bankTransferBase.y,
      // 员工平台
      succLineX: state => state.single.succLine.x,
      succLineY: state => state.single.succLine.y,
      succState: state => state.single.succState,
      succBaseX: state => state.single.succBase.x,
      succBaseY: state => state.single.succBase.y
    }),
    wskhOptions() {
      return {
        title: {
          left: 'left',
          text: '请求数',
          textStyle: {
            color: '#106ad3'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              color: '#5F6164'
            },
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['前5日均值', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        toolbox: {
          iconStyle: {
            borderColor: '#1F62BA',
            opacity: '0.3'
          },
          emphasis: {
            iconStyle: {
              borderColor: '#5AA9FF',
              opacity: '0.6'
            }
          },
          feature: {
            dataView: { show: true, readOnly: false }, //清单功能
            magicType: { show: true, type: ['line', 'bar'] }, //柱形/折线切换功能
            restore: { show: true }, //刷新功能
            saveAsImage: { show: true } //下载功能
          }
        },
        graphic: [
          {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 40,
            bottom: 40,
            z: 100,
            children: [
              {
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: {
                  width: 18,
                  height: 12
                },
                style: {
                  fill: 'rgba(0,0,0,0.3)'
                }
              },
              {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                  fill: '#444',
                  text: 'e海智维',
                  font: 'bold 10px Microsoft YaHei'
                }
              }
            ]
          }
        ],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.openAccountBaseX,
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
            data: this.openAccountLineY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: 'rgb(255, 235, 21)'
            }
          },
          {
            name: '前5日均值',
            data: this.openAccountBaseY,
            type: 'line',
            symbol: 'none',
            itemStyle: {
              color: 'rgb(60, 16, 137)',
              borderColor: 'rgb(60, 16, 137)' // 拐点边框颜色
            },
            lineStyle: {
              width: 0, // 设置线宽
              type: 'solid' //'dotted'虚线 'solid'实线
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
      }
    },
    wskhSuccessRateOptions() {
      return {
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
            font: 'bolder 30px cursive'
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
      }
    },
    rzrqOptions() {
      return {
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              color: '#5F6164'
            },
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        toolbox: {
          iconStyle: {
            borderColor: '#1F62BA',
            opacity: '0.3'
          },
          emphasis: {
            iconStyle: {
              borderColor: '#5AA9FF',
              opacity: '0.6'
            }
          },
          feature: {
            dataView: { show: true, readOnly: false }, //清单功能
            magicType: { show: true, type: ['line', 'bar'] }, //柱形/折线切换功能
            restore: { show: true }, //刷新功能
            saveAsImage: { show: true } //下载功能
          }
        },
        graphic: [
          {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 40,
            bottom: 40,
            z: 100,
            children: [
              {
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: {
                  width: 18,
                  height: 12
                },
                style: {
                  fill: 'rgba(0,0,0,0.3)'
                }
              },
              {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                  fill: '#444',
                  text: 'e海智维',
                  font: 'bold 10px Microsoft YaHei'
                }
              }
            ]
          }
        ],
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
            type: 'line',
            name: '今日',
            data: [720, 832, 801, 834, 790, 1430, 1220],
            itemStyle: {
              color: '#7A8A2F'
            }
          },
          {
            type: 'line',
            name: '昨日',
            data: [720, 832, 801, 834, 790, 1430, 1220],
            itemStyle: {
              color: '#228290'
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#228290' },
                  { offset: 1, color: '#1A4950' }
                ])
              }
            }
          }
        ]
      }
    },
    zhzxOptions() {
      return {
        title: {
          left: 'left',
          text: '请求数',
          textStyle: {
            color: '#106ad3'
          }
        },
        legend: {
          data: ['前5日均值', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              color: '#5F6164'
            },
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        toolbox: {
          iconStyle: {
            borderColor: '#1F62BA',
            opacity: '0.3'
          },
          emphasis: {
            iconStyle: {
              borderColor: '#5AA9FF',
              opacity: '0.6'
            }
          },
          feature: {
            dataView: {
              show: true,
              readOnly: false
            }, //清单功能
            magicType: {
              show: true,
              type: ['line', 'bar']
            }, //柱形/折线切换功能
            restore: {
              show: true
            }, //刷新功能
            saveAsImage: {
              show: true
            } //下载功能
          }
        },
        graphic: [
          {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 40,
            bottom: 40,
            z: 100,
            children: [
              {
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: {
                  width: 18,
                  height: 12
                },
                style: {
                  fill: 'rgba(0,0,0,0.3)'
                }
              },
              {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                  fill: '#444',
                  text: 'e海智维',
                  font: 'bold 10px Microsoft YaHei'
                }
              }
            ]
          }
        ],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.accountCenterBaseX,
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
            type: 'line',
            symbol: 'none',
            smooth: true,
            name: '今日',
            data: this.accountCenterLineY,
            itemStyle: {
              color: '#9A4F48'
            }
          },
          {
            type: 'line',
            symbol: 'none',
            smooth: true,
            name: '前5日均值',
            data: this.accountCenterBaseY,
            itemStyle: {
              color: '#44A4CE',
              borderColor: '#44A4CE' // 拐点边框颜色
            },
            lineStyle: {
              width: 0, // 设置线宽
              type: 'solid' //'dotted'虚线 'solid'实线
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#44A4CE' },
                  { offset: 1, color: '#2B6389' }
                ])
              }
            }
          }
        ]
      }
    },
    yzzzOptions() {
      return {
        title: {
          left: 'left',
          text: '请求数',
          textStyle: {
            color: '#106ad3'
          }
        },
        legend: {
          data: ['前5日均值', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              color: '#5F6164'
            },
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        toolbox: {
          iconStyle: {
            borderColor: '#1F62BA',
            opacity: '0.3'
          },
          emphasis: {
            iconStyle: {
              borderColor: '#5AA9FF',
              opacity: '0.6'
            }
          },
          feature: {
            dataView: { show: true, readOnly: false }, //清单功能
            magicType: { show: true, type: ['line', 'bar'] }, //柱形/折线切换功能
            restore: { show: true }, //刷新功能
            saveAsImage: { show: true } //下载功能
          }
        },
        graphic: [
          {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 40,
            bottom: 40,
            z: 100,
            children: [
              {
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: {
                  width: 18,
                  height: 12
                },
                style: {
                  fill: 'rgba(0,0,0,0.3)'
                }
              },
              {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                  fill: '#444',
                  text: 'e海智维',
                  font: 'bold 10px Microsoft YaHei'
                }
              }
            ]
          }
        ],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.bankTransferBaseX,
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
            type: 'line',
            symbol: 'none',
            smooth: true,
            name: '前5日均值',
            data: this.bankTransferBaseY,
            itemStyle: {
              color: '#3DACB1'
            },
            lineStyle: {
              width: 0, // 设置线宽
              type: 'solid' //'dotted'虚线 'solid'实线
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#3DACB1' },
                  { offset: 1, color: '#1D575A' }
                ])
              }
            }
          },
          {
            type: 'line',
            name: '今日',
            symbol: 'none',
            smooth: true,
            data: this.bankTransferLineY,
            itemStyle: {
              color: '#C9B67F'
            }
          }
        ]
      }
    },
    ygptOptions() {
      return {
        title: {
          left: 'left',
          text: '请求数',
          textStyle: {
            color: '#106ad3'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              color: '#5F6164'
            },
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['前5日均值', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        toolbox: {
          iconStyle: {
            borderColor: '#1F62BA',
            opacity: '0.3'
          },
          emphasis: {
            iconStyle: {
              borderColor: '#5AA9FF',
              opacity: '0.6'
            }
          },
          feature: {
            dataView: { show: true, readOnly: false }, //清单功能
            magicType: { show: true, type: ['line', 'bar'] }, //柱形/折线切换功能
            restore: { show: true }, //刷新功能
            saveAsImage: { show: true } //下载功能
          }
        },
        graphic: [
          {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 40,
            bottom: 40,
            z: 100,
            children: [
              {
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: {
                  width: 18,
                  height: 12
                },
                style: {
                  fill: 'rgba(0,0,0,0.3)'
                }
              },
              {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                  fill: '#444',
                  text: 'e海智维',
                  font: 'bold 10px Microsoft YaHei'
                }
              }
            ]
          }
        ],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.succBaseX,
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
            data: this.succLineY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: 'rgb(255, 235, 21)'
            }
          },
          {
            name: '前5日均值',
            data: this.succBaseY,
            type: 'line',
            symbol: 'none',
            itemStyle: {
              color: '#1F6F94'
            },
            lineStyle: {
              width: 0, // 设置线宽
              type: 'solid' //'dotted'虚线 'solid'实线
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#1F6F94'
                },
                {
                  offset: 1,
                  color: '#44A4CE'
                }
              ])
            },
            smooth: true
          }
        ]
      }
    },
    ygptSuccessRateOptions() {
      return {
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
            text: this.succState.successPercent * 100 + '%',
            fill: '#fff',
            font: 'bolder 30px cursive'
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
                value: this.succState.successPercent * 100,
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
              { value: 100 - this.succState.successPercent * 100, name: '失败率' }
            ]
          }
        ]
      }
    },
    CPUOptions() {
      return {
        title: {
          left: 'left',
          text: 'CPU曲线',
          textStyle: {
            color: '#106ad3'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              color: '#5F6164'
            },
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          // data: ['昨日', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },

        toolbox: {
          iconStyle: {
            borderColor: '#1F62BA',
            opacity: '0.3'
          },
          emphasis: {
            iconStyle: {
              borderColor: '#5AA9FF',
              opacity: '0.6'
            }
          },
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            }, //放缩功能
            dataView: { show: true, readOnly: false }, //清单功能
            magicType: { show: true, type: ['line', 'bar'] }, //柱形/折线切换功能
            restore: { show: true }, //刷新功能
            saveAsImage: { show: true } //下载功能
          }
        },
        graphic: [
          {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 40,
            bottom: 40,
            z: 100,
            children: [
              {
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: {
                  width: 18,
                  height: 12
                },
                style: {
                  fill: 'rgba(0,0,0,0.3)'
                }
              },
              {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                  fill: '#444',
                  text: 'e海智维',
                  font: 'bold 10px Microsoft YaHei'
                }
              }
            ]
          }
        ],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.cpuPerformanceX,
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
            data: this.cpuPerformanceY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#FFA772'
            }
          }
          // {
          //   name: '昨日',
          //   data: ,
          //   type: 'line',
          //   symbol: 'none',
          //   itemStyle: {
          //     normal: {
          //       borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
          //       lineStyle: {
          //         width: 0, // 设置线宽
          //         type: 'solid' //'dotted'虚线 'solid'实线
          //       }
          //     }
          //   },
          //   areaStyle: {
          //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //       {
          //         offset: 0,
          //         color: '#3E52FF'
          //       },
          //       {
          //         offset: 1,
          //         color: '#122245'
          //       }
          //     ])
          //   }
          // }
        ]
      }
    },
    menOptions() {
      return {
        title: {
          left: 'left',
          text: '内存曲线',
          textStyle: {
            color: '#106ad3'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              color: '#5F6164'
            },
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          // data: ['昨日', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        toolbox: {
          iconStyle: {
            borderColor: '#1F62BA',
            opacity: '0.3'
          },
          emphasis: {
            iconStyle: {
              borderColor: '#5AA9FF',
              opacity: '0.6'
            }
          },
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            }, //放缩功能
            dataView: { show: true, readOnly: false }, //清单功能
            magicType: { show: true, type: ['line', 'bar'] }, //柱形/折线切换功能
            restore: { show: true }, //刷新功能
            saveAsImage: { show: true } //下载功能
          }
        },
        graphic: [
          {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 40,
            bottom: 40,
            z: 100,
            children: [
              {
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: {
                  width: 18,
                  height: 12
                },
                style: {
                  fill: 'rgba(0,0,0,0.3)'
                }
              },
              {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                  fill: '#444',
                  text: 'e海智维',
                  font: 'bold 10px Microsoft YaHei'
                }
              }
            ]
          }
        ],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.memPerformanceX,
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
            data: this.memPerformanceY,

            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#FFA772'
            }
          }
          // {
          //   name: '昨日',
          //   data: [720, 832, 801, 834, 790, 1430, 1220],
          //   type: 'line',
          //   symbol: 'none',
          //   itemStyle: {
          //     normal: {
          //       borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
          //       lineStyle: {
          //         width: 0, // 设置线宽
          //         type: 'solid' //'dotted'虚线 'solid'实线
          //       }
          //     }
          //   },
          //   areaStyle: {
          //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //       {
          //         offset: 0,
          //         color: '#3E52FF'
          //       },
          //       {
          //         offset: 1,
          //         color: '#122245'
          //       }
          //     ])
          //   }
          // }
        ]
      }
    },
    diskOptions() {
      return {
        title: {
          left: 'left',
          text: '硬盘曲线',
          textStyle: {
            color: '#106ad3'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              color: '#5F6164'
            },
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          // data: ['昨日', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },

        toolbox: {
          iconStyle: {
            borderColor: '#1F62BA',
            opacity: '0.3'
          },
          emphasis: {
            iconStyle: {
              borderColor: '#5AA9FF',
              opacity: '0.6'
            }
          },
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            }, //放缩功能
            dataView: { show: true, readOnly: false }, //清单功能
            magicType: { show: true, type: ['line', 'bar'] }, //柱形/折线切换功能
            restore: { show: true }, //刷新功能
            saveAsImage: { show: true } //下载功能
          }
        },
        graphic: [
          {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 40,
            bottom: 40,
            z: 100,
            children: [
              {
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: {
                  width: 18,
                  height: 12
                },
                style: {
                  fill: 'rgba(0,0,0,0.3)'
                }
              },
              {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                  fill: '#444',
                  text: 'e海智维',
                  font: 'bold 10px Microsoft YaHei'
                }
              }
            ]
          }
        ],
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.diskPerformanceX,
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
            data: this.diskPerformanceY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#FFA772'
            }
          }
          // {
          //   name: '昨日',
          //   data: [720, 832, 801, 834, 790, 1430, 1220],
          //   type: 'line',
          //   symbol: 'none',
          //   itemStyle: {
          //     normal: {
          //       borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
          //       lineStyle: {
          //         width: 0, // 设置线宽
          //         type: 'solid' //'dotted'虚线 'solid'实线
          //       }
          //     }
          //   },
          //   areaStyle: {
          //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //       {
          //         offset: 0,
          //         color: '#3E52FF'
          //       },
          //       {
          //         offset: 1,
          //         color: '#122245'
          //       }
          //     ])
          //   }
          // }
        ]
      }
    }
  },
  mounted() {},
  methods: {
    ...mapActions([
      'doKcmimPerformance',
      'doSuccState',
      'doSuccLine',
      'doSuccBase',
      'doSuccServerList',
      'doOpenAccountState',
      'doOpenAccountLine',
      'doOpenAccountBase',
      'doOpenAccountServerList',
      'doBankTransferState',
      'doBankTransferLine',
      'doBankTransferBase',
      'doBankTransferServerList',
      'doAccountCenterState',
      'doAccountCenterLine',
      'doAccountCenterBase',
      'doAccountCenterWaitline',
      'doAccountCenterServerList'
    ]),
    changIpItem(ip, index) {
      this.currentIndex = index
      let type = this.type
      this.doKcmimPerformance({ ip, type: 'all' })
    },
    setModal(modalVisible, type) {
      this.type = type
      this.modalVisible = modalVisible
      this.dataList = []
      this.dataInfo = {}
      this.currentIndex = 0
      if (type == 'wskh') {
        this.modalTitle = '服务器列表(网上开户)'
        this.doOpenAccountServerList().then(response => {
          this.dataList = this.data = response.data
          this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
        })
        // } else if (type == 'rzrq') {
        //   this.modalTitle = '服务器列表(融资融券管理平台)'
        //   this.doRzrqServerList().then(response => {
        //     this.dataList = this.data = response.data
        //     this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
        //   })
      } else if (type == 'zhzx') {
        this.modalTitle = '服务器列表(账户中心)'
        this.doAccountCenterServerList().then(response => {
          this.dataList = this.data = response.data
          this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
        })
      } else if (type == 'yzzz') {
        this.modalTitle = '服务器列表(银证转账)'
        this.doBankTransferServerList().then(response => {
          this.dataList = this.data = response.data
          this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
        })
      } else if (type == 'ygpt') {
        this.modalTitle = '服务器列表(员工平台)'
        this.doSuccServerList().then(response => {
          this.dataList = this.data = response.data
          this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
        })
      }
    },
    onChange(e) {
      const value = e.target.value
      this.data = this.dataList.filter((item, i, self) => item.indexOf(value) !== -1)
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalid)
  }
}
</script>

<style scoped>
</style>
