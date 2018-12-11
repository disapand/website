<template>
    <nav :class="{ 'nav-mini': isMini, 'nav-debug': isDebug }">
      <Col :span="16" :offset="4">
        <img :src="imgLogo" alt="力源计量" class="logo" @click="toHome">
        <ul>
          <li v-for="(navItem, index) in navList" :key="index">
            <router-link :to="navItem.link" :class="{'active': isActive}">{{ navItem.label }}</router-link>
          </li>
        </ul>
      </Col>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    navList: {
      type: Array,
      default: () => [
        {
          'label': '首页',
          'link': '/Home'
        },
        {
          'label': '关于力源',
          'link': '/About'
        },
        {
          'label': '在线检测',
          'link': '/Online'
        },
        {
          'label': '项目案例',
          'link': '/Case'
        },
        {
          'label': '资讯中心',
          'link': '/News'
        },
        {
          'label': '联系我们',
          'link': '/Contact'
        },
        {
          'label': '下载中心',
          'link': '/Download'
        }
      ]
    },
    imgLogo: {
      type: String,
      default: 'images/logo.png'
    },
    isDebug: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isMini: false,
      isActive: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let sTop = document.documentElement.scrollTop
      if (sTop >= 100) {
        this.isMini = true
      } else {
        this.isMini = false
      }
    },
    toHome () {
      this.$router.push('/Home')
    }
  }
}
</script>

<style scoped lang="less">
.nav-debug {
  position: fixed;
  z-index: @zindex-spin;
  top: 0;
  left: 0;
  height: 64px;
  line-height: 64px;
  width: 100%;
  border: 1px solid #0094d8;
  box-shadow: 0 3px #0094d8;
  background: #333;
  transition: all 0.3s ease-in-out;
}
nav {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  height: 64px;
  line-height: 64px;
  width: 100%;
  background: @primary-color;
  transition: all 0.3s ease-in-out;
}
.logo {
  height: 58px;
  line-height: 58px;
  padding-top: 3px;
  cursor: pointer;
}
.nav-mini {
  height: 48px;
  line-height: 48px;
  box-shadow: 0 1px 5px @primary-color;
  a, a:hover, a:active, a:visited, a:focus{
    font-size: 0.8rem;
    padding: 8px 5px;
  }
  .logo {
    height: 46px;
  }
  transition: all 0.3s ease-in-out;
}
  ul{
    list-style: none;
    float: right;
    li {
      display: inline-block;
      float: left;
      margin: 0 20px;
    }
    a, a:hover, a:visited, a:active, a:focus{
      font-size: 0.9rem;
      color: #fff;
      position: relative;
      padding: 15px 5px;
    }
    a:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0%;
      height: 2.5px;
      background: #fff;
    }
    a:hover:after{
      width: 100%;
      left: 0;
      transition: all 0.2s ease-in-out;
    }
    .active:after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2.5px;
      background: #fff;
    }
  }
</style>
