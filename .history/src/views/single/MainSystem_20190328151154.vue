<template>
  <div class="ht-container">
    <a-row>
      <a-col :sm="24" :md="24" :lg="11">
        <section class="ht-left-section">
          <header class="ht-header">ECC监控系统-重要系统</header>
          <a-card title="集中交易">
            <a-row>
              <a-col :sm="24" :md="24" :lg="{ span: 8}">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">564,900</strong>
                </p>
                <p class="ht-content">
                  交易笔数
                  <strong class="ht-number">564,900</strong>
                </p>
              </a-col>
              <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span:8}">
                <p class="ht-content" style>
                  交易量
                  <strong class="ht-number">564,900</strong>
                  <small class="ht-percent">11.38%</small>
                  <small class="ht-percent-tips">
                    <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                  </small>
                </p>
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
                <div id="jzjyCharts" style="height: 266px;"></div>
              </a-col>
            </a-row>
          </a-card>
          <a-card title="融资融券">
            <a-row>
              <a-col :sm="24" :md="24" :lg="{ span: 8}">
                <p class="ht-content">
                  用户数
                  <strong class="ht-number">564,900</strong>
                </p>
                <p class="ht-content">
                  交易笔数
                  <strong class="ht-number">564,900</strong>
                </p>
              </a-col>
              <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span:8}">
                <p class="ht-content" style>
                  交易量
                  <strong class="ht-number">564,900</strong>
                  <br>
                  <small class="ht-percent">11.38%</small>
                  <small class="ht-percent-tips">
                    <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                  </small>
                </p>
              </a-col>
              <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span: 6, offset :2}">
                <div class="ht-content">
                  时 延
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
            </a-row>
            <a-row>
              <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 18}">
                <div id="rzrqCharts" style="height: 265px;"></div>
              </a-col>
              <a-col :sm="{ span: 24}" :md="{ span: 24}" :lg="{ span: 6}">
                <div class="ht-content" style="text-align:center;margin-top:30px;">
                  成功率
                  <div id="rzrqSuccessRateCharts" style="height: 100px;margin-top:25px;"></div>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </section>
      </a-col>
      <a-row :sm="24" :md="24" :lg="13">
        <section class="ht-right-section">
          <a-row>
            <a-card title="个股期权">
              <a-row>
                <a-col :sm="24" :md="24" :lg="{ span: 8}">
                  <p class="ht-content">
                    用户数
                    <strong class="ht-number">564,900</strong>
                  </p>
                  <p class="ht-content">
                    交易笔数
                    <strong class="ht-number">564,900</strong>
                  </p>
                </a-col>
                <a-col :sm="{ span: 12}" :md="{ span: 12}" :lg="{ span:8}">
                  <p class="ht-content" style>
                    交易量
                    <strong class="ht-number">564,900</strong>
                    <small class="ht-percent">11.38%</small>
                    <small class="ht-percent-tips">
                      <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                    </small>
                  </p>
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
                  <div id="ggqqCharts" style="height: 266px;"></div>
                </a-col>
              </a-row>
            </a-card>
          </a-row>
          <a-row>
           
              <a-card title="贵金属">
                <a-row>
                   <a-row :sm="24" :md="24" :lg="12">
                    <p class="ht-content">
                      用户数
                      <strong class="ht-number">564,900</strong>
                    </p>
                    <p class="ht-content">
                      等待数
                      <strong class="ht-number">564,900</strong>
                    </p>
                    <p class="ht-content">
                      交易量
                      <strong class="ht-number">564,900</strong>
                      <br>
                      <small class="ht-percent">11.38%</small>
                      <small class="ht-percent-tips">
                        <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                      </small>
                    </p>
                  </a-col>
                  <a-col :sm="24" :md="24" :lg="8">
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
                </a-row>
                <a-row>
                  <div id="tdxCharts" style="height: 245px;"></div>
                </a-row>
              </a-card>
            </a-row>
            <a-col :sm="24" :md="24" :lg="12">
              <a-card title="子交易">
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
                    <p class="ht-content">
                      交易量
                      <strong class="ht-number">564,900</strong>
                      <br>
                      <small class="ht-percent">11.38%</small>
                      <small class="ht-percent-tips">
                        <a-icon type="rise" class="ht-percent-icon-up"/>同比昨日
                      </small>
                    </p>
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
            </a-col>
          </a-row>
        </section>
      </a-row>
    </a-row>
  </div>
</template>

<script>
import './blackDashboard.less'
import echarts from 'echarts'
import { mapActions } from 'vuex'
export default {
  name: 'internet',
  data() {
    return {
      ehtcAppX: [],
      ehtcAppY: []
    }
  },
  mounted() {
    this.ehtsecLine().then(res => {
      this.ehtcAppX = res.data.x
      this.ehtcAppY = res.data.y
      console.log(this)
    })
    this.drawLine()
  },
  methods: {
    ...mapActions(['ehtsecState', 'ehtsecLine']),
    drawLine() {
      let jzjyCharts = echarts.init(document.getElementById('jzjyCharts'))
      let rzrqCharts = echarts.init(document.getElementById('rzrqCharts'))
      let ggqqCharts = echarts.init(document.getElementById('ggqqCharts'))
      let tdxCharts = echarts.init(document.getElementById('tdxCharts'))
      let thsCharts = echarts.init(document.getElementById('thsCharts'))
      let rzrqSuccessRateCharts = echarts.init(document.getElementById('rzrqSuccessRateCharts'))

      window.onresize = function() {
        jzjyCharts.resize()
        rzrqCharts.resize()
        ggqqCharts.resize()
        tdxCharts.resize()
        thsCharts.resize()
        rzrqSuccessRateCharts.resize()
      }

      rzrqSuccessRateCharts.setOption({
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
      })
      ggqqCharts.setOption({
        title: {
          left: 'left',
          text: '交易量基线',
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
          text: '交易量基线',
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
          text: '交易量基线',
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
      jzjyCharts.setOption({
        title: {
          left: 'left',
          text: '交易量基线',
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
          data: this.ehtcAppX,
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
            data: this.ehtcAppY,
            type: 'line',
            symbol: 'none',
            smooth: true,
            itemStyle: {
              color: '#FFA772'
            }
          },
          {
            name: '今日',
            data: this.ehtcAppY,
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

      rzrqCharts.setOption({
        title: {
          left: 'left',
          text: '交易量基线',
          textStyle: {
            color: '#106ad3'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          iconStyle: {
            borderColor: '#1F62BA'
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
                  fill: '#666',
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
            name: '前一日平均',
            data: [720, 832, 801, 834, 790, 1430, 1220],
            type: 'line',
            symbol: 'none',
            smooth: true,
            yAxisIndex: 0,
            itemStyle: {
              color: '#FFA772'
            },

            markLine: {
              data: [{ type: 'average', name: '平均值' }]
            }
          },
          {
            name: '今日',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'bar',
            barWidth: 10,
            barGap: '30%',
            symbol: 'none',
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#228290' },
                  { offset: 1, color: '#228290' }
                ])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#228290' },
                  { offset: 1, color: '#228290' }
                ])
              }
            },
            markPoint: {
              data: [{ type: 'max', name: '最大值' }]
            },
            markLine: {
              data: [{ type: 'average', name: '平均值' }]
            }
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
</style>
