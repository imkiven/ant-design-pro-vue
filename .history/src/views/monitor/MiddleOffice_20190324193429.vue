<template>
  <div class="ht-container">
    <a-row>
      <a-col :span="11" :offset="1">
        <header class="ht-header">ECC监控系统-中台</header>
        <a-card title="网上开户">
          <a-row>
            <a-col :span="12">
              <div class="ht-section">
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
              </div>
            </a-col>
            <a-col :span="3" :offset="1">
              <div class="ht-content" style="margin-top:1.6rem;text-align:center">
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
              <div class="ht-content" style="margin-top:1.6rem;text-align:right">成功率</div>
            </a-col>
            <a-col :span="3" :offset="1">
              <div id="wskhSuccessRateCharts" style="height: 100px;"></div>
            </a-col>
          </a-row>
          <a-row>
            <div id="wskhEcharts" style="height: 350px;"></div>
          </a-row>
        </a-card>
        <a-card title="融资融券">
          <a-row>
            <a-col :span="18">
              <div id="rzrqCharts" style="height: 250px;"></div>
            </a-col>
            <a-col :span="3" :offset="1" :pull="1">
              <div class="ht-content" style="margin-top:1.6rem">
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
                <div class="ht-content" style="margin-top:1.6rem">
                  成功率
                  <strong class="ht-number">98%</strong>
                  <a-progress
                    type="line"
                    :percent="98"
                    :showInfo="false"
                    strokeColor="#0C6FC3"
                    status="active"
                    style="margin-top:1rem"
                  />
                </div>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="10" :offset="1">
        <a-row>
          <a-col :span="12">
            <a-card title="账户中心">
              <a-row>
                <a-col :span="18">
                  <div class="ht-section">
                    <p class="ht-content">
                      业务量
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
                      <small class="ht-percent">11.38%</small>
                    </p>
                  </div>
                </a-col>
                <a-col :span="4" :offset="1">
                  <div class="ht-content" >
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
                    <div class="ht-content" style="margin-top:1.6rem">
                      成功率
                      <strong class="ht-number">98%</strong>
                      <a-progress
                        type="line"
                        :percent="98"
                        :showInfo="false"
                        strokeColor="#0C6FC3"
                        status="active"
                        style="margin-top:1rem"
                      />
                    </div>
                  </div>
                </a-col>
              </a-row>
              <a-row>
                <a-col>
                <div id="zhzxCharts" style="height: 100px;"></div>
                </a-col>
              </a-row>
            </a-card>
          </a-col>
          <a-col :span="12">
            <a-card title="银证转账">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </a-card>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-card title="员工平台" class="ht-section">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </a-card>
          </a-col>
        </a-row>
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
      let zhzxCharts = echarts.init(document.getElementById('rzrqCharts'))
      
      window.onresize = wskhEcharts.resize
      window.onresize = wskhSuccessRateCharts.resize
      window.onresize = rzrqCharts.resize
      window.onresize = zhzxCharts.resize
      zhzxCharts.setOption({
         title: {
          left: 'left',
          text: '请求数',
          textStyle: {
            color: '#106ad3',
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
      rzrqCharts.setOption({
        title: {
          left: 'left',
          text: '请求数',
          textStyle: {
            color: '#106ad3',
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
