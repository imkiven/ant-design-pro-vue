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
                <p class="ht-content" style="">
                  交易量
                  <strong class="ht-number">564,900</strong>
                  <br>
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
                <div class="ht-content">
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
                <div id="ehtsecAppCharts" style="height: 20rem;"></div>
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
import { mapActions } from 'vuex'
export default {
  name: 'internet',
  data() {
    return {
      // succX: [],
      // succY: []
    }
  },
  mounted() {
    // this.ehtsecLine().then(res => {
    //   this.succX = res.data.x
    //   this.succY = res.data.y
    // })
    this.drawLine()
  },
  methods: {
    ...mapActions(['ehtsecState', 'ehtsecLine']),
    drawLine() {
      let ehtsecAppCharts = echarts.init(document.getElementById('ehtsecAppCharts'))
      
      window.onresize = function() {
        ehtsecAppCharts.resize()
      }

      ehtsecAppCharts.setOption({
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
            symbol: "none",
            smooth: true,
            itemStyle: {
              color: 'rgb(255, 235, 21)'
            }
          },
          {
            name: '今日',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            symbol: "none",
            itemStyle: {
              color: 'rgb(129, 32, 245)',
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
            // smooth: true
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
</style>
