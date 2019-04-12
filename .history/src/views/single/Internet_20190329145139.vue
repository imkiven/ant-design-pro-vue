<template>
  <div class="ht-container">
    <a-row>
      <a-col :sm="24" :md="24" :lg="11">
        <section class="ht-left-section">
          <header class="ht-header">ECC监控系统-互联网</header>
          <a-card title="e海通财手机端">
            <a-row>
              <a-col :sm="24" :md="24" :lg="{ span: 8}">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">564,900</strong>
                </p>
                <p class="ht-content">
                  等待数
                  <strong class="ht-number">564,900</strong>
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
                <div id="ehtsecAppCharts" style="height: 266px;"></div>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="e海通财PC端">
            <a-row>
              <a-col :sm="24" :md="24" :lg="{ span: 8}">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">564,900</strong>
                </p>
                <p class="ht-content">
                  等待数
                  <strong class="ht-number">564,900</strong>
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
                <div id="ehtsecPcCharts" style="height: 265px;"></div>
              </a-col>
            </a-row>
          </a-card>
        </section>
      </a-col>
      <a-col :sm="24" :md="24" :lg="13">
        <section class="ht-right-section">
          <a-card title="e海方舟">
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
                <div id="ehfzCharts" style="height: 245px;"></div>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="通达信">
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
                <div id="tdxCharts" style="height: 245px;"></div>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="同花顺">
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
                <div id="thsCharts" style="height: 245px;"></div>
              </a-col>
            </a-row>
          </a-card>
        </section>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import './blackDashboard.less'
import echarts from 'echarts'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'internet',
  data() {
    return {
    //   ehtcAppX: [],
    //   ehtcAppY: []
    }
  },
  computed: {
    ...mapState({
      ehtsecLineX: state => state.ehtsecLine.data.x,
      ehtsecLineY: state => state.ehtsecLine.data.y,
      ehtsecState: state => state.ehtsecState,
      ehtsecBaseX: state => state.ehtsecBase.x,
      ehtsecBaseY: state => state.ehtsecBase.y,
      ehtsecWaitlineX: state => state.ehtsecWaitline.x,
      ehtsecWaitlineY: state => state.ehtsecWaitline.y,
    })
  },
  mounted() {
    this.doEhtsecState();
    this.doEhtsecLine();
    this.doEhtsecBase();
    this.doEhtsecWaitline();
    this.drawLine();
    this.intervalid = setInterval(() => {
      this.doEhtsecState();
      this.doEhtsecLine();
      this.doEhtsecBase();
      this.doEhtsecWaitline();
    }, 10000)
  },
  methods: {
    ...mapActions(['doEhtsecState', 'doEhtsecLine','doEhtsecBase','doEhtsecWaitline']),
    drawLine() {
      let ehtsecAppCharts = echarts.init(document.getElementById('ehtsecAppCharts'))
      let ehtsecPcCharts = echarts.init(document.getElementById('ehtsecPcCharts'))
      let ehfzCharts = echarts.init(document.getElementById('ehfzCharts'))
      let tdxCharts = echarts.init(document.getElementById('tdxCharts'))
      let thsCharts = echarts.init(document.getElementById('thsCharts'))

      window.onresize = function() {
        ehtsecAppCharts.resize()
        ehtsecPcCharts.resize()
        ehfzCharts.resize()
        tdxCharts.resize()
        thsCharts.resize()
      }

      ehfzCharts.setOption({
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
      })

      tdxCharts.setOption({
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
              color: '#526AFB'
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
                  color: '#FF983E'
                },
                {
                  offset: 1,
                  color: '#595753'
                }
              ])
            }
          }
        ]
      })

      thsCharts.setOption({
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
              color: '#5AC4F3'
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
                  color: '#D878FF'
                },
                {
                  offset: 1,
                  color: '#2A0C39'
                }
              ])
            }
          }
        ]
      })

      ehtsecAppCharts.setOption({
        title: {
          left: 'left',
          text: '在线用户基数/延迟',
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
          data: ['前5日平均', '今日', '延迟'],
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
            name: '延迟',
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
            name: '前5日平均',
            data: this.ehtsecBaseY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            yAxisIndex: 0,
            itemStyle: {
              color: '#5AC4F3'
            }

            // markLine: {
            //   data: [{ type: 'average', name: '平均值' }]
            // }
          },
          {
            name: '今日',
            data: this.ehtsecLineY,
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
            // markPoint: {
            //   data: [{ type: 'max', name: '最大值' }]
            // },
            // markLine: {
            //   data: [{ type: 'average', name: '平均值' }]
            // }
          },
          {
            name: '延迟',
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
      })

      ehtsecPcCharts.setOption({
        title: {
          left: 'left',
          text: '在线用户基数/延迟',
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
          data: ['昨日', '今日', '延迟'],
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
            name: '延迟',
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
            name: '昨日',
            data: [720, 832, 801, 834, 790, 1430, 1220],
            type: 'line',
            symbol: 'none',
            smooth: true,
            yAxisIndex: 0,
            itemStyle: {
              color: '#5AC4F3'
            }

            // markLine: {
            //   data: [{ type: 'average', name: '平均值' }]
            // }
          },
          {
            name: '今日',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
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
            // markPoint: {
            //   data: [{ type: 'max', name: '最大值' }]
            // },
            // markLine: {
            //   data: [{ type: 'average', name: '平均值' }]
            // }
          },
          {
            name: '延迟',
            data: [120, 32, 100, 34, 190, 30, 120],
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
      })
    },
    beforeDestroy() {
      clearInterval(this.intervalid)
    }
  }
}
</script>

<style scoped>
</style>
