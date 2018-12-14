<template>
  <div class="cooperation">
    <router-link :to="cooperationLink">
      <img :src="cooperationLogo" :alt="cooperationName" :title="cooperationName">
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
  }
}
</script>

<style scoped lang="less">
.cooperation{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding: 30px;
  img {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
