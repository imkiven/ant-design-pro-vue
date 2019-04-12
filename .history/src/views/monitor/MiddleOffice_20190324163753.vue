<template>
  <div class="ht-container">
    <a-row>
      <a-col :span="10" :offset="1">
        <header class="ht-header">ECC监控系统-中台</header>
        <a-card title="网上开户">
          <a-row>
            <a-col :span="12">
              <div class="ht-section">
                <p class="ht-content">
                  当日开户数
                  564,900 11.38% 同比昨日
                </p>
                <p class="ht-content">
                  开户失败数
                  564,900 11.38% 同比昨日
                </p>
              </div>
            </a-col>
            <a-col :span="4" :offset="1">
              <div class="ht-content">
                时延 4ms
                <a-progress
                  type="line"
                  :percent="75"
                  :showInfo=false
                  strokeColor="#188882"
                  status="active"
                />
              </div>
            </a-col>
            <a-col :span="2" :offset="1">
              <div class="ht-content">成功率</div>
            </a-col>
            <a-col :span="3" :offset="1">
              <div id="wskhSuccessRateCharts" style="height: 100px;"></div>
            </a-col>
          </a-row>
          <a-row>
            <div id="wskhEcharts" style="height: 400px;"></div>
          </a-row>
        </a-card>
        <a-card title="融资融券">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-col>
      <a-col :span="11" :offset="1">
        <a-row>
          <a-col :span="12">
            <a-card title="账户中心">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
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
      window.onresize = wskhEcharts.resize
      window.onresize = wskhSuccessRateCharts.resize
      wskhSuccessRateCharts.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}%'
        },
        series: [
          {
            name: '网上开户',
            type: 'pie',
            radius: ['60%', '80%'],
            hoverAnimation: false,
            graphic:{
              
            },
            label: {
              normal: {
                formatter: function(argument) {
                  return '98%'
                  console.log(argument)
                  debugger
                  if ((argument.data.name = '成功率')) {
                    return argument.data.value
                  }
                },
                position: 'center'
              },
              labelLine: {
                show: false
              },
              fontSize: 20,
              color: '#fff',
              itemStyle: {
                emphasis: {
                    show: false
                }
            }
            },
            data: [{ value: 10, name: '成功率' }, { value: 90, name: '失败率' }]
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
