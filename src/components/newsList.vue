<template>
  <router-link :to="link">
    <div class="newsList">
      <div class="wrap">
        <span class="time">{{ this.time }}</span><br />
        <p>{{ this.head }}</p>
      </div>
      <div class="intro">
        <div class="intro-img" v-bind:style="introImg"></div>
      </div>
    </div>
  </router-link>
</template>

<script>
import scrollreveal from 'scrollreveal'

export default {
  name: 'newsList',
  props: {
    time: {
      type: String,
      default: '这里填写时间'
    },
    head: {
      type: String,
      default: '这里填写标题内容'
    },
    link: {
      type: String,
      default: '/Home'
    },
    uri: {
      type: String,
      default: 'images/section1.jpg'
    }
  },
  data () {
    return {
      introImg: {
        background: 'url(' + this.uri + ') no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }
  },
  mounted () {
    scrollreveal().reveal('.newsList', { distance: '15px', origin: 'bottom', duration: 1000, reset: true, easing: 'ease-in-out' })
  }
}
</script>

<style scoped lang="less">
.newsList {
  border-top: 2px solid #000;
  * {
    padding: 5px;
  }
  &:hover {
    border-top: 2px solid @primary-color;
    transition: all 0.3s ease-in-out;
    .intro {
      opacity: 1;
      transition: all 0.5s ease-in-out;
    }
  }
  .wrap{
    display: inline-block;
    width: 50%;
  }
  .intro{
    margin-top: 20px;
    display: inline-block;
    float: right;
    border-radius: 50%;
    width: 35%;
    padding-bottom: 35%;
    height: 0;
    opacity: 0;
    position: relative;
    transition: all 0.5s ease-in-out;
    .intro-img{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
    }
    &:before{
      content: '';
      position: absolute;
      left: -50px;
      top: -5%;
      width: 110%;
      height: 110%;
      border-radius: 50%;
      background: @primary-color;
      opacity: 0;
      transition: all 0.4s ease-in-out;
    }
    &:hover:before{
      left: -20px;
      opacity: .8;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
    }
  }
}
  .time {
    display: inline-block;
    padding: 30px 5px;
    color: #666;
  }
  a{
    color: #000 !important;
  }
</style>
