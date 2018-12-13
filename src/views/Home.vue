<template>
  <div class="home">
    <!--页面第一部分：大图-->
    <div class="section1" v-bind:style="fullImg">
      <img src="images/section1.jpg" class="section-img">
      <div class="cover">
        <div class="slogn">
          <img src="images/cxjy.png" class="cxjy">
          <img src="images/gxcx.png" class="gxcx">
          <img src="images/en.png" class="en">
        </div>
      </div>
    </div>
    <!--页面第二部分：资讯中心-->
    <div class="section2">
      <p class="headline">资讯中心</p>
      <Row>
        <Col :span="8" :offset="4" class="bg-gray"><news-list></news-list></Col>
        <Col :span="8" class="bg-gray"><news-list></news-list></Col>
      </Row>
      <Row>
        <Col :span="8" :offset="4" class="bg-gray"><news-list></news-list></Col>
        <Col :span="8" class="bg-gray"><news-list></news-list></Col>
      </Row>
      <Row>
        <Col :span="8" :offset="4" class="bg-gray"><news-list></news-list></Col>
        <Col :span="8" class="bg-gray"><news-list></news-list></Col>
      </Row>
    </div>
    <!--页面第三部分-->
    <div class="section3">
      <div class="company">
        <p class="intro-text">陕西力源仪器设备检测有限公司位于西安市航天基地工业二路299号，经工商行政管理局注册登记，是陕西省质量技术监督局依法授权的法定计量检定机构，授权号：（陕）法计610000128号，并于2016年10月通过“中国合格评定国家认可委员会”认可（注册号CNAS L9406）。2016年，我公司经陕西省质量技术监督局批准筹建陕西省建设工程产业计量测试服务中心、陕西省省级型式评价试验室。公司主要从事计量器具的量值传递工作，附带计量器具托管、企业校准规范方法起草、计量知识培训考核等业务。业务涵盖了力学、热学、几何量、理化、时间频率、无损检测等全产业链计量检测服务。授权开展的检定/校准/检测项目300余项。为企业提供“一站式”服务，解决各领域工作中的实际难题。</p>
      </div>
    </div>
    <!--页面第四部分-->
    <div class="section4">
      <p class="headline">部分案例</p>
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
          <case-list caseImg="/images/case2.jpg"></case-list>
        </Col>
        <Col :span="6">
          <case-list caseImg="/images/case3.jpg"></case-list>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import scrollreavel from 'scrollreveal'
import newsList from '@/components/newsList'
import caseList from '@/components/caseList'

export default {
  name: 'home',
  components: {
    newsList,
    caseList
  },
  mounted () {
    scrollreavel().reveal('.cxjy', { distance: '50px', origin: 'left', duration: 1000, reset: true, easing: 'ease-in-out' })
    scrollreavel().reveal('.gxcx', { distance: '50px', origin: 'right', duration: 1000, reset: true, easing: 'ease-in-out' })
    scrollreavel().reveal('.en', { distance: '50px', origin: 'bottom', duration: 1000, reset: true, easing: 'ease-in-out' })
    scrollreavel().reveal('.section3', { opacity: 0, duration: 1000, reset: true, easing: 'ease-in-out' })
    scrollreavel().reveal('.intro-text', { distance: '50px', origin: 'bottom', duration: 1000, delay: 500, reset: true, easing: 'ease-in-out' })
  },
  data () {
    return {
      fullImg: {
        height: document.documentElement.clientHeight - 64 + 'px'
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
  .section1 {
    overflow: hidden;
    width: 100%;
  }
  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .2);
    z-index: 3;
  }
  .section-img {
    width: 100%;
    min-width: 100%;
  }
  .slogn{
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    .gxcx {
      margin-left: 15rem;
      margin-top: 3rem;
    }
    .en {
      margin-top: 3rem;
    }
  }
  .headline {
    font-size: 1.5rem;
    padding-top: 50px;
    padding-bottom: 60px;
    text-align: center;
    position: relative;
    background: #eee;
    &:after{
      content: '';
      display: block;
      position: relative;
      bottom: -10px;
      width: 50px;
      margin: 0 auto;
      background: @primary-color;
      height: 3px;
    }
  }
  .bg-gray {
    padding: 30px 15px;
  }
  .section3 {
    width: 100%;
    height: 500px;
    margin-top: 50px;
    position: relative;
    background: url("/images/section3.jpg") no-repeat;
    background-position: center;
    background-size: cover;
  }
  .company {
    .intro-text {
      position: absolute;
      width: 60%;
      padding-left: 5rem;
      bottom: 5rem;
      color: #fff;
      line-height: 2.5rem;
      text-align: justify;
    }
  }
</style>
