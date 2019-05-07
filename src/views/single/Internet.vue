<template>
  <div class="ht-container">
    <a-row>
      <a-col :sm="24" :md="24" :lg="11">
        <section class="ht-left-section">
          <header class="ht-header">ECC监控系统-互联网</header>
          <a-card title="e海通财手机端">
            <a href="#" @click="() => setEhtsecModal(true,'ehtsecApp')" slot="extra">各站点情况</a>
            <a-row>
              <a-col :sm="24" :md="24" :lg="{ span: 8}">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">{{ehtsecState.totalUser}}</strong>
                </p>
                <p class="ht-content">
                  等待数
                  <strong class="ht-number">{{ehtsecState.totalWait}}</strong>
                </p>
              </a-col>
              <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span:8}">
                <div class="ht-content" style>
                  交易笔数
                  <strong class="ht-number">{{ehtsecState.trans_count}}</strong>
                  <p></p>
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
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 16}">
                      时 延
                      <strong class="ht-number">{{Math.round(ehtsecState.duration)}}ms</strong>
                    </a-col>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 8}">
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
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 16}">
                      成功率
                      <strong class="ht-number">{{ehtsecState.totalSuccessRate * 100}}%</strong>
                    </a-col>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 8}">
                      <a-progress
                        type="line"
                        :percent="ehtsecState.totalSuccessRate*100"
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
                <v-chart
                  id="ehtsecAppCharts"
                  :options="ehtsecAppOptions"
                  style="height: 266px;width:100%"
                ></v-chart>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="e海通财PC端">
            <a href="#" @click="() => setEhtsecModal(true,'ehtsecPC')" slot="extra">各站点情况</a>
            <a-row>
              <a-col :sm="24" :md="24" :lg="{ span: 8}">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">{{ehtsecPCState.totalUser}}</strong>
                </p>
                <p class="ht-content">
                  等待数
                  <strong class="ht-number">{{ehtsecPCState.totalWait}}</strong>
                </p>
              </a-col>
              <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span:8}">
                <div class="ht-content" style>
                  交易笔数
                  <!-- <strong class="ht-number">{{ehtsecPCState.trans_count}}</strong> -->
                  <strong class="ht-number">---</strong>
                  <p></p>
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
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 16}">
                      时 延
                      <!-- <strong class="ht-number">{{Math.round(ehtsecPCState.duration)}}ms</strong> -->
                      <strong class="ht-number">--ms</strong>
                    </a-col>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 8}">
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
                <div class="ht-content">
                  <a-row style="margin-top: 20px">
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 16}">
                      成功率
                      <strong class="ht-number">{{ehtsecPCState.totalSuccessRate * 100}}%</strong>
                    </a-col>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 8}">
                      <a-progress
                        type="line"
                        :percent="ehtsecPCState.totalSuccessRate * 100"
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
                <v-chart
                  id="ehtsecPcCharts"
                  :options="ehtsecPcOptions"
                  style="height: 266px;width:100%"
                ></v-chart>
              </a-col>
            </a-row>
          </a-card>
        </section>
      </a-col>
      <a-col :sm="24" :md="24" :lg="13">
        <section class="ht-right-section">
          <a-card title="e海方舟">
            <a href="#" @click="() => setEhtsecModal(true,'ehfz')" slot="extra">各站点情况</a>
            <a-row>
              <a-col :sm="24" :md="24" :lg="6">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">--</strong>
                </p>
                <p class="ht-content">
                  等待数
                  <strong class="ht-number">--</strong>
                </p>
                <div class="ht-content">
                  交易笔数
                  <strong class="ht-number">--</strong>
                  <p></p>
                  <!-- <div style="margin-left:60px;">
                    <small class="ht-percent">11.38%</small>
                    <small class="ht-percent-tips">
                      <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                    </small>
                  </div>-->
                </div>
                <div class="ht-content">
                  <a-row>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 16}">
                      时 延
                      <strong class="ht-number">--ms</strong>
                    </a-col>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 8}">
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
              <a-col :sm="24" :md="24" :lg="18">
                <v-chart id="ehfzCharts" :options="ehfzOptions" style="height: 266px;width:100%"></v-chart>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="通达信">
            <a href="#" @click="() => setEhtsecModal(true,'tdx')" slot="extra">各站点情况</a>
            <a-row>
              <a-col :sm="24" :md="24" :lg="6">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">{{tdxState.totalUser}}</strong>
                </p>
                <p class="ht-content">
                  等待数
                  <strong class="ht-number">{{tdxState.totalWait}}</strong>
                </p>
                <div class="ht-content">
                  交易笔数
                  <strong class="ht-number">{{tdxState.trans_count}}</strong>
                  <p></p>
                  <!-- <div style="margin-left:60px;">
                    <small class="ht-percent">11.38%</small>
                    <small class="ht-percent-tips">
                      <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                    </small>
                  </div>-->
                </div>
                <div class="ht-content">
                  <a-row>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 16}">
                      时 延
                      <strong class="ht-number">{{Math.round(tdxState.duration)}}ms</strong>
                    </a-col>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 8}">
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
              <a-col :sm="24" :md="24" :lg="18">
                <v-chart id="tdxCharts" :options="tdxOptions" style="height: 245px;width:100%"></v-chart>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="同花顺">
            <a href="#" @click="() => setEhtsecModal(true,'ths')" slot="extra">各站点情况</a>
            <a-row>
              <a-col :sm="24" :md="24" :lg="6">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">{{thsState.totalUser}}</strong>
                </p>
                <p class="ht-content">
                  等待数
                  <strong class="ht-number">{{thsState.totalWait}}</strong>
                </p>
                <div class="ht-content">
                  交易笔数
                  <strong class="ht-number">{{thsState.trans_count}}</strong>
                  <p></p>
                  <!-- <div style="margin-left:60px;">
                    <small class="ht-percent">11.38%</small>
                    <small class="ht-percent-tips">
                      <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                    </small>
                  </div>-->
                </div>
                <div class="ht-content">
                  <a-row>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 16}">
                      时 延
                      <strong class="ht-number">{{Math.round(thsState.duration)}}ms</strong>
                    </a-col>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 8}">
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
              <a-col :sm="24" :md="24" :lg="18">
                <v-chart id="thsCharts" :options="thsOptions" style="height: 245px;width:100%"></v-chart>
              </a-col>
            </a-row>
          </a-card>
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
            id="ehtsecAppCPUCharts"
            :options="ehtsecAppCPUOptions"
            style="height: 200px;width:100%"
          ></v-chart>
          <v-chart
            id="ehtsecAppMenCharts"
            :options="ehtsecAppMenOptions"
            style="height: 200px;width:100%"
          ></v-chart>
          <v-chart
            id="ehtsecAppDiskCharts"
            :options="ehtsecAppDiskOptions"
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
      // ehtsec
      ehtsecLineX: state => state.single.ehtsecLine.x,
      ehtsecLineY: state => state.single.ehtsecLine.y,
      ehtsecState: state => state.single.ehtsecState,
      ehtsecBaseX: state => state.single.ehtsecBase.x,
      ehtsecBaseY: state => state.single.ehtsecBase.y,
      ehtsecWaitlineX: state => state.single.ehtsecWaitline.x,
      ehtsecWaitlineY: state => state.single.ehtsecWaitline.y,
      ehtsecServerList: state => state.single.ehtsecServerList,
      ehtsecDetailInfo: state => state.single.ehtsecDetailInfo,
      // pc
      ehtsecPCLineX: state => state.single.ehtsecPCLine.x,
      ehtsecPCLineY: state => state.single.ehtsecPCLine.y,
      ehtsecPCState: state => state.single.ehtsecPCState,
      ehtsecPCBaseX: state => state.single.ehtsecPCBase.x,
      ehtsecPCBaseY: state => state.single.ehtsecPCBase.y,
      ehtsecPCWaitlineX: state => state.single.ehtsecPCWaitline.x,
      ehtsecPCWaitlineY: state => state.single.ehtsecPCWaitline.y,
      ehtsecPCServerList: state => state.single.ehtsecPCServerList,
      ehtsecPCDetailInfo: state => state.single.ehtsecPCDetailInfo,
      // ehfz
      // ehfzLineX: state => state.single.ehfzLine.x,
      // ehfzLineY: state => state.single.ehfzLine.y,
      // ehfzState: state => state.single.ehfzState,
      // ehfzBaseX: state => state.single.ehfzBase.x,
      // ehfzBaseY: state => state.single.ehfzBase.y,
      // ehfzWaitlineX: state => state.single.ehfzWaitline.x,
      // ehfzWaitlineY: state => state.single.ehfzWaitline.y,
      // ehfzServerList: state => state.single.ehfzServerList,
      // ehfzDetailInfo: state => state.single.ehfzDetailInfo,
      // tdx
      tdxLineX: state => state.single.tdxLine.x,
      tdxLineY: state => state.single.tdxLine.y,
      tdxState: state => state.single.tdxState,
      tdxBaseX: state => state.single.tdxBase.x,
      tdxBaseY: state => state.single.tdxBase.y,
      tdxWaitlineX: state => state.single.tdxWaitline.x,
      tdxWaitlineY: state => state.single.tdxWaitline.y,
      tdxServerList: state => state.single.tdxServerList,
      tdxDetailInfo: state => state.single.tdxDetailInfo,
      // ths
      thsLineX: state => state.single.thsLine.x,
      thsLineY: state => state.single.thsLine.y,
      thsState: state => state.single.thsState,
      thsBaseX: state => state.single.thsBase.x,
      thsBaseY: state => state.single.thsBase.y,
      thsWaitlineX: state => state.single.thsWaitline.x,
      thsWaitlineY: state => state.single.thsWaitline.y,
      thsServerList: state => state.single.thsServerList,
      thsDetailInfo: state => state.single.thsDetailInfo
    }),
    ehtsecAppOptions() {
      return {
        title: {
          left: 'left',
          text: '在线用户基数/等待数',
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
        legend: {
          data: ['基线', '今日', '等待数'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.ehtsecBaseX,
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
            name: '在线用户数',
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
          {
            name: '等待数',
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
            data: this.ehtsecLineY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            yAxisIndex: 0,
            itemStyle: {
              color: '#5AC4F3'
            }
          },
          {
            name: '基线',
            data: this.ehtsecBaseY,
            type: 'line',
            symbol: 'none',
            yAxisIndex: 0,
            itemStyle: {
               color: '#3E52FF',
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
            },
            lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#3E52FF'
                },
                {
                  offset: 1,
                  color: '#122245'
                }
              ])
            }
          },
          {
            name: '等待数',
            data: this.ehtsecWaitlineY,
            type: 'line',
            symbol: 'none',
            yAxisIndex: 1,
            smooth: true,
            position: 'right',
            itemStyle: {
              color: '#FF983E'
            }
          }
        ]
      }
    },
    ehtsecPcOptions() {
      return {
        title: {
          left: 'left',
          text: '在线用户基数/等待数',
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
        legend: {
          data: ['基线', '今日', '等待数'],
          bottom: '0',
          textStyle: {
            color: '#fff',
            fontSize: '14'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.ehtsecPCBaseX,
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
            name: '在线用户数',
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
          {
            name: '等待数',
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
            data: this.ehtsecPCLineY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            yAxisIndex: 0,
            itemStyle: {
              color: '#5AC4F3'
            }
          },
          {
            name: '基线',
            data: this.ehtsecPCBaseY,
            type: 'line',
            symbol: 'none',
            yAxisIndex: 0,
            itemStyle: {
               color: '#D878FF',
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
            },
            lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#D878FF'
                },
                {
                  offset: 1,
                  color: '#2A0C39'
                }
              ])
            }
          },
          {
            name: '等待数',
            data: this.ehtsecPCWaitlineY,
            type: 'line',
            symbol: 'none',
            yAxisIndex: 1,
            smooth: true,
            position: 'right',
            itemStyle: {
              color: '#FF983E'
            }
          }
        ]
      }
    },
    ehfzOptions() {
      return {
        title: {
          left: 'left',
          text: '在线用户基数',
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
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#FFA772'
            }
          },
          {
            name: '今日',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            symbol: 'none',
            itemStyle: {
              color: '#3E52FF',
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
            },
            lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#3E52FF'
                },
                {
                  offset: 1,
                  color: '#122245'
                }
              ])
            }
          }
        ]
      }
    },
    tdxOptions() {
      return {
        title: {
          left: 'left',
          text: '在线用户基数/等待数',
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
          data: ['基线', '今日', '等待数'],
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
          data: this.tdxBaseX,
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
            name: '在线用户数',
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
          {
            name: '等待数',
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
            data: this.tdxLineY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            yAxisIndex: 0,
            itemStyle: {
              color: '#526AFB'
            }
          },
          {
            name: '基线',
            data: this.tdxBaseY,
            type: 'line',
            symbol: 'none',
            yAxisIndex: 0,
            itemStyle: {
             color: '#FF983E',
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
            },
             lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#FF983E'
                },
                {
                  offset: 1,
                  color: '#595753'
                }
              ])
            }
          },
          {
            name: '等待数',
            data: this.tdxWaitlineY,
            type: 'line',
            symbol: 'none',
            yAxisIndex: 1,
            smooth: true,
            position: 'right',
            itemStyle: {
              color: '#FF983E'
            }
          }
        ]
      }
    },
    thsOptions() {
      return {
        title: {
          left: 'left',
          text: '在线用户基数/等待数',
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
          data: ['基线', '今日', '等待数'],
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
          data: this.thsBaseX,
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
            name: '在线用户数',
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
          {
            name: '等待数',
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
            data: this.thsLineY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            yAxisIndex: 0,
            itemStyle: {
              color: '#5AC4F3'
            }
          },
          {
            name: '基线',
            data: this.thsBaseY,
            type: 'line',
            symbol: 'none',
            yAxisIndex: 0,
            itemStyle: {
              color: '#D878FF',
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
            },
            lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#D878FF'
                },
                {
                  offset: 1,
                  color: '#2A0C39'
                }
              ])
            }
          },
          {
            name: '等待数',
            data: this.thsWaitlineY,
            type: 'line',
            symbol: 'none',
            yAxisIndex: 1,
            smooth: true,
            position: 'right',
            itemStyle: {
              color: '#FF983E'
            }
          }
        ]
      }
    },
    ehtsecAppCPUOptions() {
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
    ehtsecAppMenOptions() {
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
    ehtsecAppDiskOptions() {
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
    succRateOptions() {
      return {
        tooltip: {
          formatter: '{b} : {d}%'
        },
        color: ['#CD4040', '#76BC8B'],
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
            name: '成功率',
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
                        color: 'rgba(118, 188, 139, 1)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(38, 73, 42, 1)'
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
    }
  },
  created() {
    //e海通财App端
    this.doEhtsecLine()
    this.doEhtsecState()
    this.doEhtsecBase()
    this.doEhtsecWaitline()
    // this.doEhtsecServerList()
    // this.doEhtsecDetailInfo()
    // pc
    this.doEhtsecPCLine()
    this.doEhtsecPCState()
    this.doEhtsecPCBase()
    this.doEhtsecPCWaitline()
    // this.doEhtsecPCServerList()
    // this.doEhtsecPCDetailInfo()
    // ehfz
    // this.doEhfzLine()
    // this.doEhfzState()
    // this.doEhfzBase()
    // this.doEhfzWaitline()
    // this.doEhfzServerList()
    // this.doEhfzDetailInfo()
    // tdx
    this.doTdxLine()
    this.doTdxState()
    this.doTdxBase()
    this.doTdxWaitline()
    // this.doTdxServerList()
    // this.doTdxDetailInfo()
    // ths
    this.doThsLine()
    this.doThsState()
    this.doThsBase()
    this.doThsWaitline()
    // this.doThsServerList()
    // this.doThsDetailInfo()
    this.intervalid = setInterval(() => {
      //e海通财App端
      this.doEhtsecLine()
      this.doEhtsecState()
      this.doEhtsecBase()
      this.doEhtsecWaitline()
      // this.doEhtsecServerList()
      // this.doEhtsecDetailInfo()
      // pc
      this.doEhtsecPCLine()
      this.doEhtsecPCState()
      this.doEhtsecPCBase()
      this.doEhtsecPCWaitline()
      // this.doEhtsecPCServerList()
      // this.doEhtsecPCDetailInfo()
      // ehfz
      // this.doEhfzLine()
      // this.doEhfzState()
      // this.doEhfzBase()
      // this.doEhfzWaitline()
      // this.doEhfzServerList()
      // this.doEhfzDetailInfo()
      // tdx
      this.doTdxLine()
      this.doTdxState()
      this.doTdxBase()
      this.doTdxWaitline()
      // this.doTdxServerList()
      // this.doTdxDetailInfo()
      // ths
      this.doThsLine()
      this.doThsState()
      this.doThsBase()
      this.doThsWaitline()
      // this.doThsServerList()
      // this.doThsDetailInfo()
    }, 30000)
  },
  mounted() {},
  methods: {
    ...mapActions([
      'doKcmimPerformance',
      'doEhtsecState',
      'doEhtsecLine',
      'doEhtsecBase',
      'doEhtsecWaitline',
      'doEhtsecServerList',
      'doEhtsecDetailInfo',
      'doEhtsecPCState',
      'doEhtsecPCLine',
      'doEhtsecPCBase',
      'doEhtsecPCWaitline',
      'doEhtsecPCServerList',
      'doEhtsecPCDetailInfo',
      // 'doEhfzState',
      // 'doEhfzLine',
      // 'doEhfzBase',
      // 'doEhfzWaitline',
      // 'doEhfzServerList',
      // 'doEhfzDetailInfo',
      'doTdxState',
      'doTdxLine',
      'doTdxBase',
      'doTdxWaitline',
      'doTdxServerList',
      'doTdxDetailInfo',
      'doThsState',
      'doThsLine',
      'doThsBase',
      'doThsWaitline',
      'doThsServerList',
      'doThsDetailInfo'
    ]),
    changIpItem(ip,index) {
      this.currentIndex = index
      let type = this.type
      this.doKcmimPerformance({ ip, type: 'all' })
      if (type == 'ehtsecApp') {
        this.doEhtsecDetailInfo({ ip })
          .then(response => (this.dataInfo = response.data))
          .catch(error => {
            console.log(error)
          })
      } else if (type == 'ehtsecPC') {
        this.doEhtsecPCDetailInfo({ ip })
          .then(response => (this.dataInfo = response.data))
          .catch(error => {
            console.log(error)
          })
      } else if (type == 'ehfz') {
        this.doEhfzDetailInfo({ ip })
          .then(response => (this.dataInfo = response.data))
          .catch(error => {
            console.log(error)
          })
      } else if (type == 'tdx') {
        this.doTdxDetailInfo({ ip })
          .then(response => (this.dataInfo = response.data))
          .catch(error => {
            console.log(error)
          })
      } else if (type == 'ths') {
        this.doThsDetailInfo({ ip })
          .then(response => (this.dataInfo = response.data))
          .catch(error => {
            console.log(error)
          })
      }
    },
    setEhtsecModal(modalVisible, type) {
      this.type = type
      this.modalVisible = modalVisible
      this.dataList = []
      this.dataInfo = {}
      this.currentIndex = 0
      if (type == 'ehtsecApp') {
        this.modalTitle = '各站点情况(e海通财手机端)'
        this.doEhtsecServerList().then(response => {
          this.dataList = this.data = response.data
          this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
          this.doEhtsecDetailInfo({ ip: this.data[0] })
            .then(response => (this.dataInfo = response.data))
            .catch(error => {
              console.log(error)
            })
        })
      } else if (type == 'ehtsecPC') {
        this.modalTitle = '各站点情况(e海通财PC端)'
        this.doEhtsecPCServerList().then(response => {
          this.dataList = this.data = response.data
          this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
          this.doEhtsecPCDetailInfo({ ip: this.data[0] })
            .then(response => (this.dataInfo = response.data))
            .catch(error => {
              console.log(error)
            })
        })
      } else if (type == 'ehfz') {
        this.modalTitle = '各站点情况(e海方舟)'
        this.doEhfzServerList().then(response => {
          this.dataList = this.data = response.data
          this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
          this.doEhfzDetailInfo({ ip: this.data[0] })
            .then(response => (this.dataInfo = response.data))
            .catch(error => {
              console.log(error)
            })
        })
      } else if (type == 'tdx') {
        this.modalTitle = '各站点情况(通达信)'
        this.doTdxServerList().then(response => {
          this.dataList = this.data = response.data
          this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
          this.doTdxDetailInfo({ ip: this.data[0] })
            .then(response => (this.dataInfo = response.data))
            .catch(error => {
              console.log(error)
            })
        })
      } else if (type == 'ths') {
        this.modalTitle = '各站点情况(同花顺)'
        this.doThsServerList().then(response => {
          this.dataList = this.data = response.data
          this.doKcmimPerformance({ ip: this.data[0], type: 'all' })
          this.doThsDetailInfo({ ip: this.data[0] })
            .then(response => (this.dataInfo = response.data))
            .catch(error => {
              console.log(error)
            })
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
