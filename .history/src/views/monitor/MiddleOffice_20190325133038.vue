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
                      <div class="ht-content"  style="margin-top:1.2rem">
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
export default {
  name: 'middleOffice',
  mounted() {
    this.drawLine()
  },
  methods: {
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
        dataset: {
          source: [
            ['product', '昨日', '今日'],
            ['10:20', 43.3, 85.8],
            ['10:21', 83.1, 73.4],
            ['10:22', 86.4, 61.2],
            ['10:23', 56.4, 75.2],
            ['10:24', 86.4, 69.2],
            ['10:25', 36.4, 45.2],
            ['10:26', 46.4, 67.25],
            ['10:27', 46.4, 75.2]
          ]
        },
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
        dataset: {
          source: [
            ['product', '昨日', '今日'],
            ['10:20', 43.3, 85.8],
            ['10:21', 83.1, 73.4],
            ['10:22', 86.4, 61.2],
            ['10:23', 56.4, 75.2],
            ['10:24', 86.4, 69.2],
            ['10:25', 36.4, 45.2],
            ['10:26', 46.4, 67.25],
            ['10:27', 46.4, 75.2]
          ]
        },
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
        dataset: {
          source: [
            ['product', '昨日', '今日'],
            ['10:20', 43.3, 85.8],
            ['10:21', 83.1, 73.4],
            ['10:22', 86.4, 61.2],
            ['10:23', 56.4, 75.2],
            ['10:24', 86.4, 69.2],
            ['10:25', 36.4, 45.2],
            ['10:26', 46.4, 67.25],
            ['10:27', 46.4, 75.2]
          ]
        },
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
