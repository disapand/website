<template>
  <div class="newsList">
    <span class="time">2018/12/12</span>
    <p>悬疑剧《悍城》热播 耐飞NicePartner计划打造精品超级剧</p>
    <div class="intro">
      <img src="images/ewm.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsList'
}
</script>

<style scoped lang="less">
.newsList {
  border-top: 1px solid #000;
  * {
    padding: 5px;
  }
  p{
    display: inline-block;
    width: 50%;
  }
  .intro{
    display: inline-block;
    float: right;
    border: 1px solid red;
  }
}
  .time {
    display: block;
  }
</style>
