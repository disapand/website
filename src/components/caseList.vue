<template>
  <div class="caseList">
    <div class="caseImg" v-bind:style="img">
    </div>
    <div class="cover">
    </div>
    <div class="caseIntro">
      <p class="caseName">{{ caseName }}</p>
      <span class="caseTime">{{ caseTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'caseList',
  props: {
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
    .cover {
      bottom: 0;
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
      padding: 30px 0 15px 30px;
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
  .cover {
    background: #000;
    opacity: 0.1;
    position: absolute;
    width: 80%;
    left: 10%;
    top: 30px;
    bottom: 100%;
    transition: all 0.3s ease-in-out;
  }
}
</style>
