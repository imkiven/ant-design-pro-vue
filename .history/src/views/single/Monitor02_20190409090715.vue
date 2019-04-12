<template>
  <div class="ht-container">
    <v-chart style="padding-top:100px;height:80%;width:95%" :options="options"></v-chart>
  </div>
</template>

<script>
import './blackDashboard.less'
import echarts from 'vue-echarts'
import './index.js'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'monitor02',
  components:{
    'v-chart': echarts
  },
  data() {
    let options = {
      title: {
        left: 'left',
        text: 'SPX实时走势图',
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
        data: [],
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
        data: [],
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
      series: []
    }
    return {
      options
    }
  },
  computed: {
    wgqspxLine() {
      return this.$store.state.wgqspxLine
    }
  },
  created() {
    this.doWgqspxLine().then(
        res => {
          this.options.series=[]
          this.options.xAxis.data=[]
          this.options.legend.data=[]
          let datas = res.data
          let xArray = [];
          for(let i =0 ;i < datas.length; i++){
            let serie= {}
            serie.name = datas[i].ip
            serie.data = datas[i].data.y
            serie.type = 'line'
            serie.smooth = true
            this.options.series.push(serie)
            let x = datas[i].data.x
            xArray.push(...x)
            this.options.legend.data.push(datas[i].ip)
          }
          let xSet = new Set(xArray);
          this.options.xAxis.data = Array.from(xSet).sort()
        }
    )
    this.intervalid = setInterval(() => {
      this.doWgqspxLine().then(
        res => {
          this.options.series=[]
          this.options.xAxis.data=[]
          this.options.legend.data=[]
          let datas = res.data
          let xArray = [];
          for(let i =0 ;i < datas.length; i++){
            let serie= {}
            serie.name = datas[i].ip
            serie.data = datas[i].data.y
            serie.type = 'line'
            serie.smooth = true
            this.options.series.push(serie)
            let x = datas[i].data.x
            xArray.push(...x)
            this.options.legend.data.push(datas[i].ip)
          }
          let xSet = new Set(xArray);
          this.options.xAxis.data = Array.from(xSet).sort()
        }
      )
    },30000)
  },
  mounted() {
  },
  methods: {
    ...mapActions(['doWgqspxLine']),
  },
  watch: {
    wgqspxLine: function(a,b){
      console.log("A"+a)
      console.log("B"+b)
    }
  },
  beforeDestroy() {
    clearInterval(this.intervalid)
  }
}
</script>

<style scoped>
</style>
