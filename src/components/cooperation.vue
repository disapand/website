<template>
  <div class="cooperation">
    <router-link :to="cooperationLink">
      <div class="cooperationLogo" v-bind:style="LogoUrl"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'cooperation',
  props: {
    cooperationLink: {
      type: String,
      default: '/Home'
    },
    cooperationName: {
      type: String,
      default: '合作单位名称'
    },
    cooperationLogo: {
      type: String,
      default: 'images/ewm.jpg'
    }
  },
  data () {
    return {
      LogoUrl: {
        background: 'url(' + this.cooperationLogo + ') no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    }
  }
}
</script>

<style scoped lang="less">
.cooperation{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 30px 60px;
  transition: all 0.2s ease-in-out;
  &:hover{
    box-shadow: 15px 0 40px -25px black, -15px 0 40px -25px black;
    transition: all 0.2s ease-in-out;
  }
  .cooperationLogo {
    width: 95px;
    height: 95px;
  }
}
</style>
