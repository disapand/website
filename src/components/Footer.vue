<template>
  <div class="footer">
    <Row>
      <Col :span="16" :offset="4">
        <div class="info-banner">
          <p>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：西安市航天基地工业二路299号3号楼1-05室</p>
          <p>业务电话：029-89257171 029-89690762</p>
          <p>监督电话：029-84169176</p>
          <p>邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：liyuanjiliang@qq.com</p>
          <p>Copyright © 2018 陕西力源仪器设备检测有限公司 陕ICP备17023502号-1 </p>
        </div>
        <div class="wx-img">
          <img src="images/ewm.jpg" alt="微信公众号">
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="less">
  .footer {
    position: relative;
    width: 100%;
    background: #333;

    p {
      padding: 5px 0;
      color: #999;
    }
  }

  .info-banner {
    display: inline-block;

    :first-child {
      padding-top: 20px;
    }

    :last-child {
      padding-bottom: 20px;
    }
  }
  .wx-img{
    display: inline-block;
    margin-left: 300px;
    &:before{
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
    img{
      width: 40%;
    }
  }
</style>
