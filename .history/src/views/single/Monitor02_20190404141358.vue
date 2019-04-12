<template>
  <div class="ht-container">
    <v-chart style="height:680px;width:1280px" :options="options"></v-chart>
  </div>
</template>

<script>
import './blackDashboard.less'
import echarts from 'vue-echarts'
import { mapActions } from 'vuex'
export default {
  name: 'monitor02',
  components:{
    'v-chart': echarts
  },
  data() {
    let options = {
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
            color: '#FFEB15'
          }
        },
        {
          name: '今日',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          symbol: 'none',
          itemStyle: {
            normal: {
              borderColor: '#5AC4F3', // 拐点边框颜色
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
    return {
      ehtcAppX: [],
      ehtcAppY: []
    }
  },
  mounted() {
    this.ehtsecLine().then(res => {
    })
    this.drawLine()
  },
  methods: {
    ...mapActions(['ehtsecState', 'ehtsecLine']),
    drawLine() {}
  }
}
</script>

<style scoped>
</style>
