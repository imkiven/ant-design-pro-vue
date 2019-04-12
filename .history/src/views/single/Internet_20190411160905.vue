<template>
  <div class="ht-container">
    <a-row>
      <a-col :sm="24" :md="24" :lg="11">
        <section class="ht-left-section">
          <header class="ht-header">ECC监控系统-互联网</header>
          <a-card title="e海通财手机端">
            <a href="#" @click="() => setEhtsecModal(true,'e海通财手机端')" slot="extra">各站点情况</a>
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
                  交易量
                  <strong class="ht-number">564,900</strong>
                  <div style="margin-left:60px;">
                    <small class="ht-percent">11.38%</small>
                    <small class="ht-percent-tips">
                      <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                    </small>
                  </div>
                </div>
              </a-col>
              <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span: 8}">
                <div class="ht-content">
                  <a-row>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 14}">
                      时 延
                      <strong class="ht-number">4ms</strong>
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
                      <strong class="ht-number">{{ehtsecState.totalSuccessRate}}</strong>
                    </a-col>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 10}">
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
            <a href="#" @click="() => setEhtsecModal(true,'e海通财PC端')" slot="extra">各站点情况</a>
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
                  交易量
                  <strong class="ht-number">564,900</strong>
                  <div style="margin-left:60px;">
                    <small class="ht-percent">11.38%</small>
                    <small class="ht-percent-tips">
                      <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                    </small>
                  </div>
                </div>
              </a-col>
              <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span: 8}">
                <div class="ht-content">
                  <a-row>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 14}">
                      时 延
                      <strong class="ht-number">4ms</strong>
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
                <div class="ht-content">
                  <a-row style="margin-top: 20px">
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 14}">
                      成功率
                      <strong class="ht-number">{{ehtsecPCState.totalSuccessRate}}</strong>
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
            <a href="#" @click="() => setEhtsecModal(true,'e海方舟')" slot="extra">各站点情况</a>
            <a-row>
              <a-col :sm="24" :md="24" :lg="6">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">564,900</strong>
                </p>
                <p class="ht-content">
                  等待数
                  <strong class="ht-number">564,900</strong>
                </p>
                <div class="ht-content">
                  交易量
                  <strong class="ht-number">564,900</strong>
                  <div style="margin-left:60px;">
                    <small class="ht-percent">11.38%</small>
                    <small class="ht-percent-tips">
                      <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                    </small>
                  </div>
                </div>
                <div class="ht-content">
                  <a-row>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 14}">
                      时 延
                      <strong class="ht-number">4ms</strong>
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
              </a-col>
              <a-col :sm="24" :md="24" :lg="18">
                <v-chart id="ehfzCharts" :options="ehfzOptions" style="height: 266px;width:100%"></v-chart>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="通达信">
            <a href="#" @click="() => setEhtsecModal(true,'通达信')" slot="extra">各站点情况</a>
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
                  交易量
                  <strong class="ht-number">564,900</strong>
                  <div style="margin-left:60px;">
                    <small class="ht-percent">11.38%</small>
                    <small class="ht-percent-tips">
                      <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                    </small>
                  </div>
                </div>
                <div class="ht-content">
                  <a-row>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 14}">
                      时 延
                      <strong class="ht-number">4ms</strong>
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
              </a-col>
              <a-col :sm="24" :md="24" :lg="18">
                <v-chart id="tdxCharts" :options="tdxOptions" style="height: 245px;width:100%"></v-chart>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="同花顺">
            <a href="#" @click="() => setEhtsecModal(true,'同花顺')" slot="extra">各站点情况</a>
            <a-row>
              <a-col :sm="24" :md="24" :lg="6">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">564,900</strong>
                </p>
                <p class="ht-content">
                  等待数
                  <strong class="ht-number">564,900</strong>
                </p>
                <div class="ht-content">
                  交易量
                  <strong class="ht-number">564,900</strong>
                  <div style="margin-left:60px;">
                    <small class="ht-percent">11.38%</small>
                    <small class="ht-percent-tips">
                      <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                    </small>
                  </div>
                </div>
                <div class="ht-content">
                  <a-row>
                    <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 14}">
                      时 延
                      <strong class="ht-number">4ms</strong>
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
          <a-input-search style="margin-bottom: 8px" placeholder="Search" @change="onChange"/>
          <div class="htsec-infinite-container">
            <a-list size="large" bordered :dataSource="data">
              <div slot="header">
                <div class="list-item-wrap">
                  <div>IP</div>
                  <div>机房位置</div>
                </div>
              </div>
              <a-list-item slot="renderItem" slot-scope="item, index">
                <div class="list-item-wrap">
                  <div>{{item}}</div>
                  <div>机房位置{{item.index}}</div>
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
            <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span: 6}">
              <v-chart
                id="succRateCharts"
                :options="succRateOptions"
                style="height: 140px;width:100%"
              ></v-chart>
            </a-col>
            <a-col :sm="12" :md="12" :lg="{ span: 8}" style="margin-top:25px">
              <p class="ht-content">
                成功数
                <strong class="ht-number">564,900</strong>
              </p>
              <p class="ht-content">
                失败数
                <strong class="ht-number">564,900</strong>
              </p>
            </a-col>
            <a-col :sm="24" :md="24" :lg="{ span: 10}">
              <p class="ht-content">
                当前处理总数
                <strong class="ht-number">564,900</strong>
              </p>
              <p class="ht-content">
                当前用户
                <strong class="ht-number">564,900</strong>
              </p>
              <p class="ht-content">
                当前等待
                <strong class="ht-number">564,900</strong>
              </p>
            </a-col>
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
      loading: false,
      busy: false,
      data: [
        '192.168.0.1 ',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1 .',
        '192.168.0.1.',
        '192.168.0.1.',
        '192.168.0.1.'
      ]
    }
  },
  computed: {
    ...mapState({
      ehtsecLineX: state => state.single.ehtsecLine.x,
      ehtsecLineY: state => state.single.ehtsecLine.y,
      ehtsecState: state => state.single.ehtsecState,
      ehtsecBaseX: state => state.single.ehtsecBase.x,
      ehtsecBaseY: state => state.single.ehtsecBase.y,
      ehtsecWaitlineX: state => state.single.ehtsecWaitline.x,
      ehtsecWaitlineY: state => state.single.ehtsecWaitline.y,
      // pc
      ehtsecPCLineX: state => state.single.ehtsecPCLine.x,
      ehtsecPCLineY: state => state.single.ehtsecPCLine.y,
      ehtsecPCState: state => state.single.ehtsecPCState,
      ehtsecPCBaseX: state => state.single.ehtsecPCBase.x,
      ehtsecPCBaseY: state => state.single.ehtsecPCBase.y,
      ehtsecPCWaitlineX: state => state.single.ehtsecPCWaitline.x,
      ehtsecPCWaitlineY: state => state.single.ehtsecPCWaitline.y,
      // tdx
      tdxLineX: state => state.single.tdxLine.x,
      tdxLineY: state => state.single.tdxLine.y,
      tdxState: state => state.single.tdxState,
      tdxBaseX: state => state.single.tdxBase.x,
      tdxBaseY: state => state.single.tdxBase.y,
      tdxWaitlineX: state => state.single.tdxWaitline.x,
      tdxWaitlineY: state => state.single.tdxWaitline.y,
      // ths
      thsLineX: state => state.single.thsLine.x,
      thsLineY: state => state.single.thsLine.y,
      thsState: state => state.single.thsState,
      thsBaseX: state => state.single.thsBase.x,
      thsBaseY: state => state.single.thsBase.y,
      thsWaitlineX: state => state.single.thsWaitline.x,
      thsWaitlineY: state => state.single.thsWaitline.y
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
              normal: {
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
                lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                }
              }
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
              normal: {
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
                lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                }
              }
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
              normal: {
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
                lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                }
              }
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
              normal: {
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
                lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                }
              }
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
              color: '#5AC4F3'
            }
          },
          {
            name: '基线',
            data: this.tdxBaseY,
            type: 'line',
            symbol: 'none',
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
                lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                }
              }
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
              normal: {
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
                lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                }
              }
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
              normal: {
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
                lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                }
              }
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
              normal: {
                borderColor: 'rgb(129, 32, 245)', // 拐点边框颜色
                lineStyle: {
                  width: 0, // 设置线宽
                  type: 'solid' //'dotted'虚线 'solid'实线
                }
              }
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
    // pc
    this.doEhtsecPCLine()
    this.doEhtsecPCState()
    this.doEhtsecPCBase()
    this.doEhtsecPCWaitline()
    // tdx
    this.doTdxLine()
    this.doTdxState()
    this.doTdxBase()
    this.doTdxWaitline()
    this.intervalid = setInterval(() => {
      //e海通财App端
      this.doEhtsecLine()
      this.doEhtsecState()
      this.doEhtsecBase()
      this.doEhtsecWaitline()
      // pc
      this.doEhtsecPCLine()
      this.doEhtsecPCState()
      this.doEhtsecPCBase()
      this.doEhtsecPCWaitline()
      // tdx
      this.doTdxLine()
      this.doTdxState()
      this.doTdxBase()
      this.doTdxWaitline()
    }, 10000)
  },
  mounted() {

  },
  methods: {
    ...mapActions([
      'doEhtsecState',
      'doEhtsecLine',
      'doEhtsecBase',
      'doEhtsecWaitline',
      'doEhtsecPCState',
      'doEhtsecPCLine',
      'doEhtsecPCBase',
      'doEhtsecPCWaitline',
      'doTdxState',
      'doTdxLine',
      'doTdxBase',
      'doTdxWaitline'
    ]),
    setEhtsecModal(modalVisible, type) {
      this.modalVisible = modalVisible
      this.modalTitle = '各站点情况(' + type + ')'
      // this.drawDeatilLine()
    },
    onChange(e) {
      const value = e.target.value
      const expandedKeys = dataList
        .map(item => {
          if (item.key.indexOf(value) > -1) {
            return getParentKey(item.key, gData)
          }
          return null
        })
        .filter((item, i, self) => item && self.indexOf(item) === i)
      Object.assign(this, {
        expandedKeys,
        searchValue: value,
        autoExpandParent: true
      })
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalid)
  }
}
</script>

<style scoped>
</style>
