<template>
  <div class="ht-container">
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
      <a-col :span="12">
        ECC监控系统--中台
        <a-card title="网上开户" class="ht-section">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
        <a-card title="融资融券" class="ht-section">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-row  :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
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
        <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
          <a-col :span="24">
            <a-card title="员工平台">
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
import './index.less';
export default {
  name: 'middleOffice'
}
</script>

<style scoped>
</style>
