<template>
  <router-link :to="caseUrl">
      <div class="caseList">
          <div class="caseImg" v-bind:style="img">
          </div>
          <div class="cover">
              <div class="cover-bg"></div>
              <Icon type="md-add-circle" class="iconAdd"/>
          </div>
          <div class="caseIntro">
              <p class="caseName">{{ caseName }}</p>
              <span class="caseTime">{{ caseTime }}</span>
          </div>
      </div>
  </router-link>
</template>

<script>
import scrollreveal from 'scrollreveal'

export default {
  name: 'caseList',
  props: {
    caseUrl: {
      type: String,
      default: '/About'
    },
    caseImg: {
      type: String,
      default: '/images/case1.jpg'
    },
    caseName: {
      type: String,
      default: '案例名称'
    },
    caseTime: {
      type: String,
      default: '案例发生时间'
    }
  },
  data () {
    return {
      img: {
        background: 'url(' + this.caseImg + ') no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }
    }
  },
  mounted () {
    scrollreveal().reveal('.caseList', { distance: '50px', origin: 'bottom', reset: true, easing: 'ease-in-out', duration: 1000 })
  }
}
</script>

<style scoped lang="less">
.caseList{
  margin-top: 30px;
  &:hover {
    .caseIntro:after {
      bottom: 0;
      width: 100%;
      left: 0;
      height: 100%;
      transition: all 0.3s ease-in-out;
    }
    .caseName {
      color: #fff;
    }
    .cover-bg {
        height: 100%;
      transition: all 0.3s ease-in-out;
    }
      .iconAdd {
          top: 50%;
          transition: all 0.3s ease-in-out;
      }
  }
  .caseImg {
    width: 80%;
    margin: 0 auto;
    height: 0;
    padding-bottom: 80%;
  }
  .caseIntro {
    width: 80%;
    margin: 0 auto;
    background: #eee;
    position: relative;
    .caseName {
      padding: 30px 30px 15px 30px;
      position: relative;
      z-index: 3;
    }
    .caseTime{
      display: block;
      position: relative;
      padding: 0 0 30px 30px;
      z-index: 3;
      color: #666;
      font-size: 0.8rem;
    }
  }
  .caseIntro:after {
    content: '';
    background: @primary-color;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }
    .cover{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
  .cover-bg {
    background: #000;
    opacity: 0.1;
    position: absolute;
    width: 80%;
      height: 0;
    left: 10%;
    top: 30px;
    transition: all 0.3s ease-in-out;
  }
  .iconAdd{
    font-size: 5rem;
      position: absolute;
      top: -10%;
      left: 50%;
      transform: translate(-50%, -50%);
    color: @primary-color;
      transition: all 0.3s ease-in-out;
  }
}
</style>
