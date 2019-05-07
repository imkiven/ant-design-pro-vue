<template>
  <div class="ht-container">
    <a-row>
      <a-col :sm="24" :md="24" :lg="11">
        <section class="ht-left-section">
          <header class="ht-header">ECC监控系统-重要系统</header>
          <a-card title="集中交易">
            <a href="#" @click="() => setModal(true,'jzjy')" slot="extra">服务器列表</a>
            <a-row>
              <a-col :sm="24" :md="24" :lg="{ span: 8}">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">--</strong>
                </p>
                <p class="ht-content">
                  交易笔数
                  <strong class="ht-number">{{concentratedTradingState.trans_count}}</strong>
                </p>
              </a-col>
              <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span:8}">
                <div class="ht-content" style>
                  交易量
                  <strong class="ht-number">--</strong>
                  <!-- <div style="margin-left:60px;">
                    <small class="ht-percent">11.38%</small>
                    <small class="ht-percent-tips">
                      <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                    </small>
                  </div>-->
                </div>
              </a-col>
              <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span: 8}">
                <div class="ht-content">
                  <a-row>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 14}">
                      时 延
                      <strong
                        class="ht-number"
                      >{{Math.round(concentratedTradingState.duration)}}ms</strong>
                    </a-col>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 10}">
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
                <div class="ht-content" style="margin-top: 20px">
                  <a-row>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 14}">
                      成功率
                      <strong
                        class="ht-number"
                      >{{Math.round(concentratedTradingState.succ_rate)}}%</strong>
                    </a-col>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 10}">
                      <a-progress
                        type="line"
                        :percent="concentratedTradingState.succ_rate"
                        :showInfo="false"
                        strokeColor="#14A2EE"
                        status="active"
                      />
                    </a-col>
                  </a-row>
                </div>
              </a-col>
            </a-row>
            <a-row>
              <a-col>
                <v-chart :options="jzjyOptions" style="height: 266px;width:98%"></v-chart>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="融资融券">
            <a href="#" @click="() => setModal(true,'rzrq')" slot="extra">服务器列表</a>
            <a-row>
              <a-col :sm="24" :md="24" :lg="{ span: 8}">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">--</strong>
                </p>
                <p class="ht-content">
                  交易笔数
                  <strong class="ht-number">{{marginState.trans_count}}</strong>
                </p>
              </a-col>
              <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span:8}">
                <div class="ht-content" style>
                  交易量
                  <strong class="ht-number">--</strong>
                  <!-- <div style="margin-left:60px;">
                    <small class="ht-percent">11.38%</small>
                    <small class="ht-percent-tips">
                      <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                    </small>
                  </div>-->
                </div>
              </a-col>
              <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span: 6, offset :2}">
                <div class="ht-content">
                  时 延
                  <strong class="ht-number">{{Math.round(marginState.duration)}}ms</strong>
                  <a-progress
                    type="line"
                    :percent="75"
                    :showInfo="false"
                    strokeColor="#188882"
                    status="active"
                  />
                </div>
              </a-col>
            </a-row>
            <a-row>
              <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 18}">
                <v-chart :options="rzrqOptions" style="height: 265px;width:98%"></v-chart>
              </a-col>
              <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 6}">
                <div class="ht-content" style="text-align:center;margin-top:30px;">
                  成功率
                  <v-chart
                    :options="rzrqSuccessRateOptions"
                    style="height: 100px;margin-top:25px;width:98%"
                  ></v-chart>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </section>
      </a-col>
      <a-col :sm="24" :md="24" :lg="13">
        <section class="ht-right-section">
          <a-row>
            <a-card title="个股期权">
              <a href="#" @click="() => setModal(true,'ggqq')" slot="extra">服务器列表</a>
              <a-row>
                <a-col :sm="24" :md="24" :lg="{ span: 8}">
                  <p class="ht-content">
                    用户数
                    <strong class="ht-number">--</strong>
                  </p>
                  <p class="ht-content">
                    交易笔数
                    <strong class="ht-number">--</strong>
                  </p>
                </a-col>
                <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span:8}">
                  <div class="ht-content" style>
                    交易量
                    <strong class="ht-number">--</strong>
                    <!-- <div style="margin-left:60px;">
                      <small class="ht-percent">11.38%</small>
                      <small class="ht-percent-tips">
                        <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                      </small>
                    </div>-->
                  </div>
                </a-col>
                <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span: 8}">
                  <div class="ht-content">
                    <a-row>
                      <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 14}">
                        时 延
                        <strong class="ht-number">--ms</strong>
                      </a-col>
                      <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 10}">
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
                  <div class="ht-content" style="margin-top: 20px">
                    <a-row>
                      <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 14}">
                        成功率
                        <strong class="ht-number">98%</strong>
                      </a-col>
                      <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 10}">
                        <a-progress
                          type="line"
                          :percent="75"
                          :showInfo="false"
                          strokeColor="#14A2EE"
                          status="active"
                        />
                      </a-col>
                    </a-row>
                  </div>
                </a-col>
              </a-row>
              <a-row>
                <a-col>
                  <v-chart :options="ggqqOptions" style="height: 270px;width:98%"></v-chart>
                </a-col>
              </a-row>
            </a-card>
          </a-row>
          <a-row>
            <a-col :sm="24" :md="24" :lg="12">
              <a-card title="贵金属">
                <a href="#" @click="() => setModal(true,'gjs')" slot="extra">服务器列表</a>
                <a-row>
                  <a-col :sm="24" :md="24" :lg="16">
                    <p class="ht-content">
                      用户数
                      <strong class="ht-number">--</strong>
                    </p>
                    <p class="ht-content">
                      等待数
                      <strong class="ht-number">--</strong>
                    </p>
                    <div class="ht-content">
                      交易量
                      <strong class="ht-number">--</strong>
                      <p></p>
                      <!-- <div style="margin-left:60px;">
                        <small class="ht-percent">11.38%</small>
                        <small class="ht-percent-tips">
                          <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                        </small>
                      </div>-->
                    </div>
                  </a-col>
                  <a-col :sm="24" :md="24" :lg="8">
                    <div class="ht-content">
                      <a-row>
                        时 延
                        <strong class="ht-number">--ms</strong>
                        <a-progress
                          type="line"
                          :percent="75"
                          :showInfo="false"
                          strokeColor="#188882"
                          status="active"
                        />
                      </a-row>
                      <a-row>
                        成功率
                        <strong class="ht-number">98%</strong>
                        <a-progress
                          type="line"
                          :percent="75"
                          :showInfo="false"
                          strokeColor="#188882"
                          status="active"
                        />
                      </a-row>
                    </div>
                  </a-col>
                </a-row>
                <a-row>
                  <v-chart :options="gjsOptions" style="height: 260px;width:98%"></v-chart>
                </a-row>
              </a-card>
            </a-col>

            <a-col :sm="24" :md="24" :lg="12">
              <a-card title="子交易">
                <a href="#" @click="() => setModal(true,'zjy')" slot="extra">服务器列表</a>
                <a-row>
                  <a-col :sm="24" :md="24" :lg="16">
                    <p class="ht-content">
                      用户数
                      <strong class="ht-number">--</strong>
                    </p>
                    <p class="ht-content">
                      等待数
                      <strong class="ht-number">--</strong>
                    </p>
                    <div class="ht-content">
                      交易量
                      <strong class="ht-number">--</strong>
                      <p></p>
                      <!-- <div style="margin-left:60px;">
                        <small class="ht-percent">11.38%</small>
                        <small class="ht-percent-tips">
                          <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                        </small>
                      </div>-->
                    </div>
                  </a-col>
                  <a-col :sm="24" :md="24" :lg="8">
                    <div class="ht-content">
                      <a-row>
                        时 延
                        <strong class="ht-number">--ms</strong>
                        <a-progress
                          type="line"
                          :percent="75"
                          :showInfo="false"
                          strokeColor="#188882"
                          status="active"
                        />
                      </a-row>
                      <a-row>
                        成功率
                        <a-progress
                          type="line"
                          :percent="75"
                          :showInfo="false"
                          strokeColor="#188882"
                          status="active"
                        />
                      </a-row>
                    </div>
                  </a-col>
                </a-row>
                <a-row>
                  <a-col :sm="24" :md="24" :lg="24">
                    <v-chart :options="zjyOptions" style="height: 260px;width:98%"></v-chart>
                  </a-col>
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
              <a-list-item slot="renderItem" slot-scope="item, index" @click="changIpItem(item,index)" :class="{'current':currentIndex===index}">
                <a-icon type="swap-right" style='position:absolute;color:red;left:1px;padding-top:3px' v-if="currentIndex===index" />
                <div class="list-item-wrap">
                  <div>{{item}}</div>
                  <!-- <div>机房位置{{item.index}}</div> -->
                </div>
              </a-list-item>
            </a-list>
          </div>
        </a-col>
        <a-col :sm="24" :md="16" :lg="{ span: 16}">
          <v-chart
            id="CPUCharts"
            :options="CPUOptions"
            style="height: 200px;width:100%"
          ></v-chart>
          <v-chart
            id="menCharts"
            :options="menOptions"
            style="height: 200px;width:100%"
          ></v-chart>
          <v-chart
            id="diskCharts"
            :options="diskOptions"
            style="height: 200px;width:100%"
          ></v-chart>
          <a-row>
            <a-col :sm="12" :md="12" :lg="{ span: 8}" v-if="this.dataInfo.userCount || this.dataInfo.waitCount">
              <p class="ht-content">
                当前用户
              <strong class="ht-number">{{this.dataInfo.userCount}}</strong>
              </p>
              <p class="ht-content">
                当前等待
                <strong class="ht-number">{{this.dataInfo.waitCount}}</strong>
              </p>
            </a-col>
            <a-col :sm="12" :md="12" :lg="{ span: 8}" v-if="this.dataInfo.user_cnt || this.dataInfo.current_inqueue">
              <p class="ht-content">
                当前用户
              <strong class="ht-number">{{this.dataInfo.user_cnt}}</strong>
              </p>
              <p class="ht-content">
                当前等待
                <strong class="ht-number">{{this.dataInfo.current_inqueue}}</strong>
              </p>
            </a-col>
            <a-col :sm="12" :md="12" :lg="{ span: 8}" v-if="this.dataInfo.max_inqueue || this.dataInfo.total_enqueue">
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
  name: 'internet',
  components: {
    'v-chart': echarts
  },
  created() {
    // 集中交易
    this.doConcentratedTradingLine({start:new Date(new Date().toLocaleDateString()).getTime()/1000,end:Date.parse(new Date())/1000})
    this.doConcentratedTradingState()
    this.doConcentratedTradingBase()
    // 子交易
    this.doSubTradingLine({start:new Date(new Date().toLocaleDateString()).getTime()/1000,end:Date.parse(new Date())/1000})
    this.doSubTradingState()
    this.doSubTradingBase()
    //  两融
    this.doMarginLine({start:new Date(new Date().toLocaleDateString()).getTime()/1000,end:Date.parse(new Date())/1000})
    this.doMarginState()
    this.doMarginBase()
    this.intervalid = setInterval(() => {
       // 集中交易
      this.doConcentratedTradingLine({start:new Date(new Date().toLocaleDateString()).getTime()/1000,end:Date.parse(new Date())/1000})
      this.doConcentratedTradingState()
      this.doConcentratedTradingBase()
      // 子交易
      this.doSubTradingLine({start:new Date(new Date().toLocaleDateString()).getTime()/1000,end:Date.parse(new Date())/1000})
      this.doSubTradingState()
      this.doSubTradingBase()
      //  两融
      this.doMarginLine({start:new Date(new Date().toLocaleDateString()).getTime()/1000,end:Date.parse(new Date())/1000})
      this.doMarginState()
      this.doMarginBase()
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
      // 集中交易
      concentratedTradingLineX: state => state.single.concentratedTradingLine.x,
      concentratedTradingLineY: state => state.single.concentratedTradingLine.y,
      concentratedTradingState: state => state.single.concentratedTradingState,
      concentratedTradingBaseX: state => state.single.concentratedTradingBase.x,
      concentratedTradingBaseY: state => state.single.concentratedTradingBase.y,
      // 子交易
      subTradingLineX: state => state.single.subTradingLine.x,
      subTradingLineY: state => state.single.subTradingLine.y,
      subTradingState: state => state.single.subTradingState,
      subTradingBaseX: state => state.single.subTradingBase.x,
      subTradingBaseY: state => state.single.subTradingBase.y,
      // 两融
      marginLineX: state => state.single.marginLine.x,
      marginLineY: state => state.single.marginLine.y,
      marginState: state => state.single.marginState,
      marginBaseX: state => state.single.marginBase.x,
      marginBaseY: state => state.single.marginBase.y
    }),
    jzjyOptions() {
      return {
        title: {
          left: 'left',
          text: '交易量基线',
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
          data: ['前15日均值', '今日'],
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
          data: this.concentratedTradingBaseX,
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
            data: this.concentratedTradingLineY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#FFEB15'
            }
          },
          {
            name: '前15日均值',
            data: this.concentratedTradingBaseY,
            type: 'line',
            symbol: 'none',
            itemStyle: {
              color: '#9014EE',
                borderColor: '#9014EE', // 拐点边框颜色
            },
            lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#9014EE'
                },
                {
                  offset: 1,
                  color: '#6834FF'
                }
              ])
            }
          }
        ]
      }
    },
    rzrqOptions() {
      return {
        title: {
          left: 'left',
          text: '交易量基线',
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
        legend: {
          data: ['前15日均值', '今日'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.marginBaseX,
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
        yAxis: [
          {
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
          }
        ],
        series: [
          {
            name: '今日',
            data: this.marginLineY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            yAxisIndex: 0,
            itemStyle: {
              color: '#FFA772'
            }
          },
          {
            name: '前15日均值',
            data: this.marginBaseY,
            type: 'line',
            smooth: true,
            symbol: 'none',
            yAxisIndex: 0,
            itemStyle: {
                color: '#228290',
                borderColor: '#9014EE', // 拐点边框颜色
            },
            lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#228290'
                  },
                  {
                    offset: 1,
                    color: '#228290'
                  }
              ])
            }
          }
        ]
      }
    },
    ggqqOptions() {
      return {
        title: {
          left: 'left',
          text: '交易量基线',
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
            dataZoom: {
              yAxisIndex: 'none'
            }, //放缩功能
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
            data: [720, 832, 801, 834, 790, 1430, 1220],
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#FFEB15'
            }
          },
          {
            name: '前5日均值',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            symbol: 'none',
            itemStyle: {
                color: '#1F7297',
                borderColor: '#5AC4F3', // 拐点边框颜色
            },
            lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#1F7297'
                },
                {
                  offset: 1,
                  color: '#44A4CE'
                }
              ])
            }
          }
        ]
      }
    },
    gjsOptions() {
      return {
        title: {
          left: 'left',
          text: '交易量基线',
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
          data: ['昨日', '今日'],
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
            data: [720, 832, 801, 834, 790, 1430, 1220],
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#526AFB'
            }
          },
          {
            name: '前5日平均',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            symbol: 'none',
            smooth: true,
            lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                },
            itemStyle: {
                    color: '#228290'
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#228290'
                  },
                  {
                    offset: 1,
                    color: '#228290'
                  }
                ])
              }
            }
        ]
      }
    },
    zjyOptions() {
      return {
        title: {
          left: 'left',
          text: '交易量基线',
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
          data: ['前15日均值', '今日'],
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
          data: this.subTradingBaseX,
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
            data: this.subTradingLineY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#FFA772'
            }
          },
          {
            name: '前15日均值',
            data: this.subTradingBaseY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
                    color: '#222790'
            },
            lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#222790'
                  },
                  {
                    offset: 1,
                    color: '#222790'
                  }
                ])
              }
          }
        ]
      }
    },
    rzrqSuccessRateOptions() {
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
            text: Math.round(this.marginState.succ_rate)+'%',
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
                value: Math.round(this.marginState.succ_rate),
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
              {
                value: 100 - Math.round(this.marginState.succ_rate),
                name: '失败率'
              }
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
    },
  },
  mounted() {},
  methods: {
    ...mapActions([
      'doKcmimPerformance',
      'doMarginState',
      'doMarginLine',
      'doMarginBase',
      'doMarginServerList',
      'doConcentratedTradingState',
      'doConcentratedTradingLine',
      'doConcentratedTradingBase',
      'doConcentratedTradingServerList',
      'doSubTradingState',
      'doSubTradingLine',
      'doSubTradingBase',
      'doSubTradingServerList'
    ]),
    changIpItem(ip,index) {
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
      if (type == 'jzjy') {
        this.modalTitle = '服务器列表(集中交易)'
        this.doConcentratedTradingServerList().then(response => {
          this.dataList = this.data = response.data
          this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
        })
      } else if (type == 'rzrq') {
        this.modalTitle = '服务器列表(融资融券)'
        this.doMarginServerList().then(response => {
          this.dataList = this.data = response.data
          this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
        })
      // } else if (type == 'ggqq') {
      //   this.modalTitle = '服务器列表(个股期权)'
      //   this.doEhfzServerList().then(response => {
      //     this.dataList = this.data = response.data
      //     this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
      //   })
      // } else if (type == 'jgs') {
      //   this.modalTitle = '服务器列表(贵金属)'
      //   this.doTdxServerList().then(response => {
      //     this.dataList = this.data = response.data
      //     this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
      //   })
      } else if (type == 'zjy') {
        this.modalTitle = '服务器列表(子交易)'
        this.doSubTradingServerList().then(response => {
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
