<template>
  <div class="home">
    <!--页面第一部分-->
    <div class="section1">
      <img src="images/section1.png" alt="" class="fadeIn">
    </div>
  </div>
</template>

<script>
import scrollreavel from 'scrollreveal'

export default {
  name: 'home',
  components: {},
  mounted () {
    this.scrollreavel.reveal('.fadeIn', { easing: 'ease-in-out', duration: 1000, reset: true })
  },
  data () {
    return {
      scrollreavel: scrollreavel
    }
  }
}
</script>

<style scoped lang="less">
  .section1 {
    img {
      width: 100%;
      min-width: 100%;
    }
  }
</style>
