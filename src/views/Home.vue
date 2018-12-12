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
    </div>
  </div>
</template>

<script>
import scrollreavel from 'scrollreveal'
import newsList from '@/components/newsList'

export default {
  name: 'home',
  components: {
    newsList
  },
  mounted: function () {
    scrollreavel().reveal('.cxjy', { distance: '50px', origin: 'left', duration: 1000, reset: true, easing: 'ease-in-out' })
    scrollreavel().reveal('.gxcx', { distance: '50px', origin: 'right', duration: 1000, reset: true, easing: 'ease-in-out' })
    scrollreavel().reveal('.en', { distance: '50px', origin: 'bottom', duration: 1000, reset: true, easing: 'ease-in-out' })
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
    padding-top: 85px;
    padding-bottom: 10px;
    margin-bottom: 85px;
    text-align: center;
    position: relative;
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
    background: #eee;
    padding: 15px;
  }
</style>
