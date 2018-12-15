<template>
  <div class="case">
    <div class="banner">
    </div>
    <!--案例列表-->
    <div>
      <Row>
        <Col :span="6" :offset="3">
          <case-list></case-list>
        </Col>
        <Col :span="6">
          <case-list caseImg="/images/case2.jpg"></case-list>
        </Col>
        <Col :span="6">
          <case-list caseImg="/images/case3.jpg"></case-list>
        </Col>
      </Row>
      <Row>
        <Col :span="6" :offset="3">
          <case-list></case-list>
        </Col>
        <Col :span="6">
          <case-list caseImg="/images/case2.jpg"></case-list>
        </Col>
        <Col :span="6">
          <case-list caseImg="/images/case3.jpg"></case-list>
        </Col>
      </Row>
      <Row>
        <Col :span="6" :offset="3">
          <case-list></case-list>
        </Col>
        <Col :span="6">
          <case-list caseImg="/images/case2.jpg" caseUrl="/Case"></case-list>
        </Col>
        <Col :span="6">
          <case-list caseImg="/images/case3.jpg"></case-list>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import caseList from '@/components/caseList'

export default {
  name: 'Case',
  components: {
    caseList
  }
}
</script>

<style scoped lang="less">
.banner{
  height: 500px;
  background: url("/images/case/banner.jpg") no-repeat center center / cover;
}
</style>
