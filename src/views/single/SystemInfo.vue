<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="14" :sm="24">
            <a-button type="primary" icon="plus">新建</a-button>
            <a-button type="primary" icon="edit" style="margin-left: 8px">修改</a-button>
            <a-button type="primary" icon="delete" style="margin-left: 8px">删除</a-button>
          </a-col>
          <a-col :md="4" :sm="8" style="padding-right: 0px">
            <a-form-item label="">
              <a-input placeholder="请输入系统名称"/>
            </a-form-item>
          </a-col>
          <a-col :md="3" :sm="12" style="padding-left: 8px">
            <span class="table-page-search-submitButtons">
              <a-button type="primary" @click="querySystemInfo()">查询</a-button>
              <a-button style="margin-left: 6px">重置</a-button>
            </span>
          </a-col>
          <a-col :md="1" :sm="4">
            <a-button type="primary" icon="file-excel">生成EXCEL</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <s-table
      size="default"
      :columns="columns"
      :data="loadData"
    >
      <span slot="action" slot-scope="text, record">
        <a @click="handleEdit(record)">编辑</a>
        <a-divider type="vertical" />
        <a-dropdown>
          <a class="ant-dropdown-link">
            更多 <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;">详情</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">删除</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
    </s-table>

    <a-modal
      title="操作"
      style="top: 20px;"
      :width="800"
      v-model="visible"
      @ok="handleOk"
    >
      <a-form :autoFormCreate="(form)=>{this.form = form}">

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="唯一识别码"
          hasFeedback
          validateStatus="success"
        >
          <a-input placeholder="唯一识别码" v-model="mdl.id" id="no" disabled="disabled" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="角色名称"
          hasFeedback
          validateStatus="success"
        >
          <a-input placeholder="起一个名字" v-model="mdl.name" id="role_name" />
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="状态"
          hasFeedback
          validateStatus="warning"
        >
          <a-select v-model="mdl.status">
            <a-select-option value="1">正常</a-select-option>
            <a-select-option value="2">禁用</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item
          :labelCol="labelCol"
          :wrapperCol="wrapperCol"
          label="描述"
          hasFeedback
        >
          <a-textarea :rows="5" v-model="mdl.describe" placeholder="..." id="describe"/>
        </a-form-item>

        <a-divider />

      </a-form>
    </a-modal>

  </a-card>
</template>

<script>
import STable from '@/components/table/'
import { getSystemInfo, getServiceList } from '@/api/single'

export default {
  name: 'TableList',
  components: {
    STable
  },
  data () {
    return {
      visible: false,
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      },
      form: null,
      mdl: {},

      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: '系统名称',
          dataIndex: 'systemName'
        },
        {
          title: '技术主管部门',
          dataIndex: 'systemManagerDepart'
        },
        {
          title: '技术运维部门',
          dataIndex: 'systemOPSDepart'
        },
        {
          title: '应用等级',
          dataIndex: 'appLevel',
          sorter: true
        }, {
          title: '系统功能概述',
          dataIndex: 'systemFunctionDesc',
          sorter: true
        }, {
          title: '备份能力等级',
          dataIndex: 'backupCapabilityLevel',
          sorter: true
        }, {
          title: '应用层次分类',
          dataIndex: 'appHierarchicalLevel',
          sorter: true
        }, {
          title: '业务体系分类',
          dataIndex: 'businessClassifiy',
          sorter: true
        }, {
          title: '系统类型',
          dataIndex: 'systemType',
          sorter: true
        }, {
          title: '提供厂商',
          dataIndex: 'providedMerchant',
          sorter: true
        }, {
          title: '业务服务时间',
          dataIndex: 'bussinessServiceTime',
          sorter: true
        }, {
          title: '业务服务对象',
          dataIndex: 'bussinessServiceObject',
          sorter: true
        }, {
          title: '研发方式',
          dataIndex: 'systemPlatform',
          sorter: true
        }, {
          title: '数据库平台',
          dataIndex: 'databasePlatform',
          sorter: true
        }, {
          title: '重要信息系统标志',
          dataIndex: 'importantMessageDepartSign',
          sorter: true
        }, {
          title: '业务主管部门',
          dataIndex: 'bussinessManageDepart',
          sorter: true
        }, {
          title: '业务运营部门',
          dataIndex: 'bussinessOPSDepart',
          sorter: true
        }, {
          title: '备注',
          dataIndex: 'comment',
          sorter: true
        }, {
          title: '系统曾用名称',
          dataIndex: 'previousName',
          sorter: true
        }, {
          title: '操作',
          width: '150px',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' }
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return getSystemInfo(parameter)
          .then(res => {
            return res
          })
      },

      selectedRowKeys: [],
      selectedRows: []
    }
  },
  created () {
    getServiceList().then(res => {
      console.log('getServiceList.call()', res)
    })

    getSystemInfo().then(res => {
      console.log('getSystemInfo.call()', res)
    })
  },
  methods: {
    // handleEdit (record) {
    //   this.mdl = Object.assign({}, record)

    //   this.mdl.permissions.forEach(permission => {
    //     permission.actionsOptions = permission.actionEntitySet.map(action => {
    //       return { label: action.describe, value: action.action, defaultCheck: action.defaultCheck }
    //     })
    //   })

    //   this.visible = true
    // },
    // handleOk () {

    // },
    // querySystemInfo () {

    // },
    // onChange (selectedRowKeys, selectedRows) {
    //   this.selectedRowKeys = selectedRowKeys
    //   this.selectedRows = selectedRows
    // },
    // toggleAdvanced () {
    //   this.advanced = !this.advanced
    // }
  },
  watch: {
  }
}
</script>
